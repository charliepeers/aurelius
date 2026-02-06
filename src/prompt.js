import React, { useState, useEffect } from 'react';
import { quotes } from '../data/quotes';
import { getDailyQuote } from '../utils/dateHash';

const Prompt = () => {
  const [todaysQuote, setTodaysQuote] = useState(null);

  useEffect(() => {
    const index = getDailyQuote(quotes.length);
    setTodaysQuote(quotes[index]);
  }, []);

  if (!todaysQuote) return null;

  return(
    //although tried out tailwind a bit after learning from dalibird I will stick right now to css
    <div className="header"> 
      <p className="date">
        {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
      </p>
      <h2 className="quote">
        "{todaysQuote.text}"
      </h2>
      <p className="author">— {todaysQuote.author}</p>
    </div>
  );

  )


export default Prompt;