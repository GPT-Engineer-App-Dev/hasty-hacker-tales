import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import StoryCard from './StoryCard';
import Skeleton from './Skeleton';
import SearchBar from './SearchBar';

const fetchTopStories = async () => {
  const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page');
  const data = await response.json();
  return data.hits;
};

const HackerNewsList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories,
  });

  const [searchTerm, setSearchTerm] = useState('');

  const filteredStories = data?.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <Skeleton count={10} />
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredStories.map(story => (
            <StoryCard key={story.objectID} story={story} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HackerNewsList;