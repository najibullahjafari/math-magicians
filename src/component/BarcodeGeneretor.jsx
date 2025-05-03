import React, { useState } from 'react';
import '../css/barcode.css';

const BARCODE_TYPES = [
  'code39', 'code128', 'ean', 'ean13', 'ean8', 'gs1', 'gtin', 'isbn', 'isbn10', 'isbn13', 'issn', 'jan', 'pzn', 'upc', 'upca',
];

function BarcodeGenerator() {
  const [text, setText] = useState('');
  const [type, setType] = useState('code128');
  const [format, setFormat] = useState('png');
  const [barcodeUrl, setBarcodeUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setHasError(false);
    setBarcodeUrl('');
    try {
      const params = new URLSearchParams({
        text,
        type,
        format,
        include_text: 'true',
      });
      const response = await fetch(
        `https://api.api-ninjas.com/v1/barcodegenerate?${params.toString()}`,
        {
          headers: {
            'X-Api-Key': 'XrVqjM1uEDWD3unxglcTsg==qlj5m86gjEcGnwEz',
            Accept: format === 'svg' ? 'image/svg+xml' : 'image/png',
          },
        },
      );
      if (!response.ok) throw new Error('Failed to generate barcode');
      const blob = await response.blob();
      setBarcodeUrl(URL.createObjectURL(blob));
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleDownload = () => {
    if (!barcodeUrl) return;
    const link = document.createElement('a');
    link.href = barcodeUrl;
    link.download = `barcode.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="barcode-con">
      <div className="barcode-card">
        <h2 className="barcode-title">Barcode Generator</h2>
        <form className="barcode-form" onSubmit={handleGenerate}>
          <input
            className="barcode-input"
            type="text"
            placeholder="Enter text to encode"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <select
            className="barcode-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {BARCODE_TYPES.map((t) => (
              <option key={t} value={t}>{t.toUpperCase()}</option>
            ))}
          </select>
          <select
            className="barcode-select"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="png">PNG</option>
            <option value="svg">SVG</option>
          </select>
          <button className="barcode-btn" type="submit">Generate</button>
        </form>
        {isLoading && (
          <div className="barcode-loading">
            <span className="barcode-loader" />
            <p>Generating...</p>
          </div>
        )}
        {hasError && (
          <div className="barcode-error">
            <p>Could not generate barcode. Try again.</p>
          </div>
        )}
        {barcodeUrl && (
          <div className="barcode-result">
            {format === 'svg' ? (
              <object type="image/svg+xml" data={barcodeUrl} className="barcode-img" aria-label="barcode" />
            ) : (
              <img src={barcodeUrl} alt="barcode" className="barcode-img" />
            )}
            <button className="barcode-btn barcode-download-btn" onClick={handleDownload} type="button">
              Download
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default BarcodeGenerator;
