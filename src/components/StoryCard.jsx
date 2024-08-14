import React from 'react';

const StoryCard = ({ story }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">{story.title}</h2>
      <p className="text-gray-600">Upvotes: {story.points}</p>
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read more
      </a>
    </div>
  );
};

export default StoryCard;