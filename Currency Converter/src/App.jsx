import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo[to] || 0));
  };

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/14907378/pexels-photo-14907378.jpeg)",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div className="border border-gray-500 rounded-2xl p-6 backdrop-blur-md bg-white/10 shadow-xl">
          <h1 className="text-white text-2xl font-bold text-center mb-6">
            Currency Converter
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="space-y-4"
          >
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />

            <div className="flex justify-center -my-2 relative z-20">
              <button
                type="button"
                onClick={swap}
                className="border border-white rounded-lg bg-blue-600 text-white px-4 py-1 hover:bg-blue-700 transition"
              >
                Swap
              </button>
            </div>

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;