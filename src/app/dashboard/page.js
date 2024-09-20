'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import NewsFeedItem from './NewsFeedItem';
import Navigation from '@/components/Navigation';
import Chat from './Chat';
import NewsModal from './NewsModal';

async function fetchNews({ searchQuery, category, language, country, sortBy }) {
  const url = new URL('https://newsapi.org/v2/everything');
  url.searchParams.append('q', searchQuery || 'example');
  url.searchParams.append('category', category || '');
  url.searchParams.append('language', language || 'en');
  url.searchParams.append('country', country || '');
  url.searchParams.append('sortBy', sortBy || 'publishedAt');
  url.searchParams.append('apiKey', process.env.NEXT_PUBLIC_NEWS_API_KEY);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch news');
  }

  const data = await res.json();
  return data.articles;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
  const [selectedCountry, setSelectedCountry] = useState('All Countries');
  const [isAIFilterEnabled, setIsAIFilterEnabled] = useState(false);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    if (!session) {
      router.push('/auth/signin');
    }
    if (status === 'loading') {
      return;
    }
  }, [status, router, session]);

  useEffect(() => {
    // Fetch default news on load
    fetchNewsData();
  }, [selectedCategory, selectedLanguage, selectedCountry, isAIFilterEnabled]);

  const fetchNewsData = async () => {
    setLoading(true);
    setError('');
    try {
      const articlesData = await fetchNews({
        searchQuery: '',
        category: selectedCategory === 'All' ? '' : selectedCategory,
        language: selectedLanguage === 'All Languages' ? '' : selectedLanguage,
        country: selectedCountry === 'All Countries' ? '' : selectedCountry,
        sortBy: 'publishedAt',
      });
      setArticles(articlesData);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        isProfileOpen={isProfileOpen}
        setIsProfileOpen={setIsProfileOpen}
        isDashboard={true}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            isAIFilterEnabled={isAIFilterEnabled}
            setIsAIFilterEnabled={setIsAIFilterEnabled}
            fetchNewsData={fetchNewsData}
          />
          <div className="flex-1 lg:ml-8">
            <h1 className="text-3xl font-bold mb-8 text-foreground pt-8">Your Personalized News Feed</h1>

            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                  <NewsFeedItem key={index} article={article} onClick={() => setSelectedArticle(article)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        {isChatOpen ? 'Close Chat' : 'Open Chat With AI'}
      </button>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${isChatOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ width: '350px' }}
      >
        <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
          <h2 className="text-lg font-semibold">AI Powered Chat</h2>
          <button
            onClick={toggleChat}
            className="text-red-600 hover:text-red-800"
          >
            Close
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-full">
          <Chat />
        </div>
      </div>

      {selectedArticle && (
        <NewsModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
}
