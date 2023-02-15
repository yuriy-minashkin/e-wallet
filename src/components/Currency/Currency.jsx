import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Loader } from './Loader';

//===fetch===
const currencyAPI = async () => {
  try {return await axios.get('https://api.monobank.ua/bank/currency');} 
  catch (error) {return alert(`Something went wrong. ${error}. Please, try again later`);}
};

//===main logic===
const LS_KEY = 'savedRates';

export const Currency = () => {
  const [currencyRate, setCurrencyRate] = useState(JSON.parse(window.localStorage.getItem(LS_KEY)) ?? []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeToFetch = Date.now() - Number(currencyRate.fetchTime) <= 360000;
    if (timeToFetch) return;

    const visibleCurrencyCode = [840, 978];
    setLoading(true);
    const getCurrency = async () => {
      try {
        const { data } = await currencyAPI();
        const filterdCurrency = data.filter(item =>visibleCurrencyCode.includes(Number(item.currencyCodeA)) && item.currencyCodeB !== 840);
        localStorage.setItem(LS_KEY, JSON.stringify({ cur: filterdCurrency, fetchTime: Date.now() }));
        setCurrencyRate(JSON.parse(localStorage.getItem(LS_KEY)));} 
      catch (error) { return alert(`Something went wrong. ${error}. Please, try again later`); }
      finally { setLoading(false); }};
      
    getCurrency();
  }, [currencyRate]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        {loading ? (
          <Loader />
        ) : (
          <tbody>
            {currencyRate.cur?.map(({ currencyCodeA, rateBuy, rateSell }) => (
              <tr key={currencyCodeA}>
                <td>{currencyCodeA === Number(840) ? 'USD' : 'EUR'}</td>
                <td>{Number(rateBuy).toFixed(2)}</td>
                <td>{Number(rateSell).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};
