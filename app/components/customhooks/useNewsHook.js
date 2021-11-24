
import React, { useState, useEffect } from "react";

export default function useNews() {
  const [posts, setPosts] = useState([]);
  const [initialPosts, setInitialPosts] =useState(10);
  const [loading, setLoading] = useState(false)

  async function getTopStories() {
    setLoading(true)
    const url = `https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$key"&limitToFirst=${initialPosts}`;
    
    try {
      
      const response = await fetch(url);
      if (response.ok === false) {
        throw new Error("Response Error:" + response.text);
      }
      const json = await response.json();
      console.log(json.length)
      const promises = json.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (response) => response.json()
        )
      );
      const result = await Promise.all(promises);
      // console.log(result);
      setPosts([...result]);
      setLoading(false)
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getTopStories();
  }, []);
  const fetchMoreData = () =>{
     setInitialPosts((previous) => previous + 10)
     getTopStories();
    };
  return [posts, loading, fetchMoreData];
}
