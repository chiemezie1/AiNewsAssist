import axios from 'axios';
import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';

export async function GET(request) {
  const url = request.nextUrl.searchParams.get('url');

  if (!url) {
    console.error('No URL provided in the request.');
    return new Response('No URL provided.', { status: 400 });
  }

  try {
    // Validate the URL
    const validUrl = new URL(url);
    
    // Fetch the article HTML
    const articleResponse = await axios.get(validUrl.href);
    
    // Create a JSDOM instance
    const dom = new JSDOM(articleResponse.data, { url: validUrl.href });
    
    // Extract and parse article content
    const readability = new Readability(dom.window.document);
    const article = readability.parse();

    if (!article) {
      console.error('Failed to parse article content.');
      return new Response('Failed to parse article content.', { status: 500 });
    }

    // Return the parsed article content
    return new Response(JSON.stringify(article), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching or parsing article:', error.message);
    return new Response(`Failed to load article content: ${error.message}`, { status: 500 });
  }
}
