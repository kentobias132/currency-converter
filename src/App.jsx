import React, { useState } from "react";
import bgImg from "./assets/musclecar.jpg";
import { InputBox } from "./components/index.js";
import useCurrencyData from "./hooks/useCurrencyData";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrencies, setFromCurrencies] = useState("usd");
  const [toCurrency, setToCurrency] = useState("eur");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyData(fromCurrencies);

  const option = Object.keys(currencyInfo);

  // function that convert amout to hundreds tens and units?

  const convert = () => {
    const convAmount = (amount * currencyInfo[toCurrency]).toFixed(2);
    setConvertedAmount(parseFloat(convAmount).toLocaleString("en-US"));
  };

  const swap = () => {
    setFromCurrencies(toCurrency);
    setToCurrency(fromCurrencies);
    setAmount(0);
  };

  return (
    <div className="flex flex-col h-screen">
      <div
        className="h-screen w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="w-full mx-4">
          <div className=" w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 bg-white/30 backdrop-blur-sm  ">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  type="number"
                  amount={amount}
                  label="From"
                  currencyOption={option}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(option) => setFromCurrencies(option)}
                  selectedCurrency={fromCurrencies}
                />
              </div>
              <div className="w-full relative h-0.5">
                <button
                  className=" absolute left-1/2 bg-blue-600 px-2 py-0.5 text-white border-2 border-white rounded-md -translate-x-1/2 -translate-y-1/2"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mb-4">
                <InputBox
                  amount={convertedAmount}
                  label="To"
                  currencyOption={option}
                  amountDisable={true}
                  onCurrencyChange={(option) => setToCurrency(option)}
                  selectedCurrency={toCurrency}
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 w-full rounded-lg bg-blue-600 text-white"
              >
                Convert {fromCurrencies.toUpperCase()}/
                {toCurrency.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className=" bg-blue-600 text-white text-center">
        <p>code with ❤️ by KenTobias </p>
      </div>
    </div>
  );
}

export default App;
