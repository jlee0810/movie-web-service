import React, { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coin Converter!</h1>
      {loading ? <strong>Loading...</strong> : <div>Loaded!</div>}

      <h2>
        Your balance: $ <input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} />
      </h2>

      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) {balance / coin.quotes.USD.price}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}
export default App;
