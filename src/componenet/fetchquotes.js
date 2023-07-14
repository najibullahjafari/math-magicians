import React, { useEffect, useState } from 'react';

function QuoteComponent() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=life', {
          headers: { 'X-Api-Key': 'jefeiaQXYarLAsPZwTWiuA==QZ0GIv61ur9IdrN2' },
        });
        if (!response.ok) {
          throw new Error("Can't fetch");
        }
        const data = await response.json();
        const randomQuote = data[0];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="quote-con">
      <h2>Random Quote:</h2>
      <p>{quote}</p>
      <p>{author}</p>
    </div>
  );
}

export default QuoteComponent;
