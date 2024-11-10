// Tweet.js
import React, { useState } from 'react';


/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/


type Tweet = {username:string, content:string, timestamp:string, initialLikes:number}
  
  export default function Tweet({username, content, timestamp, initialLikes}: Tweet) {

    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(initialLikes)

    function handleClick() {
      if (liked) {
        setLiked(false)
        setLikes(likes - 1)
      }
      else {
        setLiked(true)
        setLikes(likes + 1)
      }
    }
    return (
      <>
      <div className = "tweet">

        <p><b>@{username}</b></p>
        <p>{content}</p>
        <p>{timestamp} ago</p>
        <p onClick={() => handleClick()}>{liked ? '❤️' : '🤍'} {likes} Likes</p>

      </div>
      </>
    )

  }

