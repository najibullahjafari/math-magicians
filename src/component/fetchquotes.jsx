import React, { useEffect, useState } from 'react';
import '../css/quote.css';

function QuoteComponent() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': 'XrVqjM1uEDWD3unxglcTsg==qlj5m86gjEcGnwEz' },
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

  useEffect(() => {
    fetchQuote();
  }, []);

  const handlePrev = () => {
    fetchQuote();
  };

  const handleNext = () => {
    fetchQuote();
  };

  if (isLoading) {
    return (
      <div className="quote-con loading">
        <span className="quote-loader" />
        <p>Loading...</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="quote-con error">
        <p>Something went wrong! Please try again later.</p>
      </div>
    );
  }

  return (
    <section className="quote-con">
      <div className="quote-card">
        <h2 className="quote-title">Inspiring Quote</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            type="button"
            aria-label="Previous quote"
            className="quote-arrow"
            onClick={handlePrev}
            style={{
              fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer',
            }}
          >
            &#8592;
          </button>
          <div>
            <blockquote className="quote-text">
              “
              {quote}
              ”
            </blockquote>
            <p className="quote-author">
              —
              {author}
            </p>
          </div>
          <button
            type="button"
            aria-label="Next quote"
            className="quote-arrow"
            onClick={handleNext}
            style={{
              fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer',
            }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuoteComponent;
