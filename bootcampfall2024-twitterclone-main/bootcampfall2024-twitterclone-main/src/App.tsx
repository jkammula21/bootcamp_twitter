// App.js
import React from 'react';
import Tweet from './tweet';
import { tweetsData } from './data';

/* Do not write your tweet component here, write it in the tweet.tsx file */

function App() {
  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <div className="feed">
        {
          <div id = "tweet-container">
          {tweetsData.map((x) => <Tweet username = {x.username} content = {x.content} timestamp = {x.timestamp} initialLikes = {x.likes}></Tweet>)}
          </div>
        /* Here you will use the data from the 'tweetsData' variable and populate every tweet
          that you received from the 'backend' (data.ts).
         */}
      </div>
    </div>
  );
}

export default App;
