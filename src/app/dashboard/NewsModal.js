'use client';

// This file summarizes content using Google Generative AI

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

export default function NewsModal({ article, onClose }) {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFullContentAndSummarize = async () => {
      try {
        // Fetch the full content from the server-side API route
        const response = await fetch(`/api/scrapeArticle?url=${encodeURIComponent(article.url)}`);
        const data = await response.json();
        const fullContent = data.textContent;

        // Send the full content to the AI for summarization
        const summarizedContent = await summarizeContent(fullContent);
        setSummary(formatSummary(summarizedContent));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching and summarizing article:', error);
        setSummary('Failed to load and summarize article content.');
        setLoading(false);
      }
    };

    if (article.url) {
      fetchFullContentAndSummarize();
    }
  }, [article.url]);

  // Function to summarize content using Google Generative AI
  const summarizeContent = async (content) => {
    const userPrompt = `Please summarize the following article in less than 200 words. Include a "Summary" heading followed by the summary text and a "Main Points" heading with bullet points:\n\n${content}`;
    
    try {
      setLoading(true); // Set loading while the AI is processing
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const chatSession = model.startChat({
        history: [],
        generationConfig: {
          maxOutputTokens: 200,
        },
      });
      const result = await chatSession.sendMessage(userPrompt);
      const response = await result.response;
      return await response.text();
    } catch (error) {
      console.error('Error summarizing content:', error);
      return 'Failed to summarize content.';
    } finally {
      setLoading(false);
    }
  };

  // Function to format the summarized content
  const formatSummary = (content) => {
    if (!content) return '';

    // Convert headings and bullet points to HTML
    let formattedContent = content
      .replace(/^##\s*(.*)$/gm, '<h2 class="text-xl font-semibold mb-2">$1</h2>')  // Convert ## Heading to <h2>
      .replace(/^\*\s*(.*)$/gm, '<li>$1</li>')  // Convert * Bullet points to <li>
      .replace(/(<li>.*<\/li>)/g, '<ul class="list-disc ml-6">$1</ul>'); // Wrap <li> in <ul>

    // Handle bold text (for additional emphasis)
    formattedContent = formattedContent
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');  // Convert **bold** to <strong>

    return formattedContent;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative bg-white p-6 rounded-lg max-w-4xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black bg-white p-2 rounded-full"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
        {article.urlToImage && (
          <div className="relative w-full h-64 mb-4">
            <Image
              src={`/api/imageProxy?url=${encodeURIComponent(article.urlToImage)}`}
              alt={article.title}
              layout="fill"
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
          </div>
        )}
        {/* Display the summarized content */}
        {loading ? (
          <p className="text-gray-700 mb-4">Loading and summarizing article...</p>
        ) : (
          <div className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: summary }} />
        )}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Read full article →
        </a>
      </div>
    </div>
  );
}
