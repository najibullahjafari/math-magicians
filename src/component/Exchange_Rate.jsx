import React, { useEffect, useState } from 'react';
import '../css/exchange_rate.css';
import '../css/fetchQuotes.css';

const CURRENCIES = [
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'NZD', name: 'New Zealand Dollar' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'KRW', name: 'South Korean Won' },
  { code: 'PLN', name: 'Polish Zloty' },
  { code: 'DKK', name: 'Danish Krone' },
  { code: 'TRY', name: 'Turkish New Lira' },
  { code: 'HKD', name: 'Hong Kong Dollar' },
];

function ExchangeRateComponent() {
  const [from, setFrom] = useState('GBP');
  const [to, setTo] = useState('AUD');
  const [rate, setRate] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchRate = async (fromCurr, toCurr) => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/exchangerate?pair=${fromCurr}_${toCurr}`,
        { headers: { 'X-Api-Key': 'XrVqjM1uEDWD3unxglcTsg==qlj5m86gjEcGnwEz' } }
      );
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setRate(data.exchange_rate);
      setTimestamp(data.timestamp);
    } catch (error) {
      setHasError(true);
      setRate(null);
      setTimestamp(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRate(from, to);
  }, [from, to]);

  return (
    <section className="exchange-con">
      <div className="exchange-card">
        <h2 className="exchange-title">Currency Exchange Rate</h2>
        <form
          className="exchange-form"
          onSubmit={e => { e.preventDefault(); fetchRate(from, to); }}
        >
          <div className="exchange-selects">
            <select
              className="exchange-select"
              value={from}
              onChange={e => setFrom(e.target.value)}
            >
              {CURRENCIES.map(cur => (
                <option key={cur.code} value={cur.code}>
                  {cur.code} - {cur.name}
                </option>
              ))}
            </select>
            <span className="exchange-arrow">→</span>
            <select
              className="exchange-select"
              value={to}
              onChange={e => setTo(e.target.value)}
            >
              {CURRENCIES.map(cur => (
                <option className='exchange-options' key={cur.code} value={cur.code}>
                  {cur.name}
                </option>
              ))}
            </select>
          </div>
        </form>
        {isLoading && (
          <div className="exchange-loading">
            <span className="exchange-loader" />
            <p>Loading...</p>
          </div>
        )}
        {hasError && (
          <div className="exchange-error">
            <p>Could not fetch exchange rate. Try again later.</p>
          </div>
        )}
        {!isLoading && !hasError && rate && (
          <div className="exchange-rate">
            <span className="rate-value">{rate}</span>
            <span className="rate-label">
              1 {from} = {rate} {to}
            </span>
            {timestamp && (
              <div className="rate-time">
                <small>
                  Updated: {new Date(timestamp * 1000).toLocaleString()}
                </small>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ExchangeRateComponent;