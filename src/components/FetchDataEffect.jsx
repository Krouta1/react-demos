import React, { useState, useEffect } from 'react';

const FetchDataEffect = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = await response.json();
        if (data.length > 0) {
          setPost(data[0]); // Store the first post
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Runs only once when the component mounts

  return (
    <div>
      <h2>Fetched Data</h2>
      {post ? <p>First Post Title: {post.title}</p> : <p>Loading...</p>}
    </div>
  );
};

export default FetchDataEffect;
