'use client';

import { useEffect } from 'react';

const TickerTapeWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: 'Gold', proName: 'TVC:GOLD' },
        { description: 'Oil', proName: 'AMEX:USO' },
        { description: 'S&P 500', proName: 'AMEX:SPY' },
        { description: 'EGLD / USDT', proName: 'BINANCE:EGLDUSDT' },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en',
    });

    const container = document.getElementById('tradingview-widget-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className='tradingview-widget-container'
      id='tradingview-widget-container'
    >
      <div className='tradingview-widget-container__widget'></div>
    </div>
  );
};

export default TickerTapeWidget;
