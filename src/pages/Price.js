import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import Stock from "../components/stock-data";


const Price = (props) => {

  const apiKey = "e069d407534c94d93263d93b1c387e56";
    

  const { symbol } = useParams();


  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey} `;

  const [stock, setStock] = useState(null);

  
  const getStock = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setStock(data[0]);
  }

  useEffect(() => {
    getStock();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>
          {stock.name}
        </h1>
        <h2>Price: {stock.price}</h2>
        <h2>Day low: {stock.dayLow}</h2>
        <h2>Day high: {stock.dayHigh}</h2>
        <h2>Change: {stock.change}</h2>
        <h2>Open: {stock.open}</h2>
      </div>
    );
  };


  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return stock ? loaded() : loading();
};

export default Price;