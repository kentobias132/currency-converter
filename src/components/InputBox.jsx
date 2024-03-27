import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
  type,
}) {
  const id = useId();
  return (
    <div className={` bg-white p-3 flex text-sm rounded-lg   ${className}`}>
      <div className="w-1/2">
        <label htmlFor={id} className=" text-black/40 inline-block mb-2">
          {label}
        </label>
        <input
          id={id}
          type={type || "text"}
          className="outline-none w-full py-1.5 bg-transparent"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 w-full mb-2">Currency type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}{" "}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
