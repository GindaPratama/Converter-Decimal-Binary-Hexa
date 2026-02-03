import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  // Decimal (Basis 10)
  const handleDecimalChange = (e) => {
    setValue(e.target.value);
  };

  // Binary (Basis 2)
  const handleBinaryChange = (e) => {
    // Validasi angka 0 atau 1
    if (/^[0-1]*$/.test(e.target.value)) {
      setValue(e.target.value === "" ? "" : parseInt(e.target.value, 2));
    }
  };

  // Hexadecimal (Basis 16)
  const handleHexChange = (e) => {
    const val = e.target.value;
    if (val === "") {
      setValue("");
      return;
    }

    const dec = parseInt(val, 16);
    if (!isNaN(dec)) setValue(dec);
  };

  const displayDecimal = value;
  const displayBinary =
    value === "" || isNaN(value) ? "" : Number(value).toString(2);
  const displayHex =
    value === "" || isNaN(value)
      ? ""
      : Number(value).toString(16).toUpperCase();

  return (
    <div className="main-container">
      <h1 className="title">Binary to Decimal to Hex Converter</h1>

      <div className="converter-card">
        <div className="input-group">
          <label className="label-binary">Binary:</label>
          <input
            type="text"
            className="input-field input-binary"
            value={displayBinary}
            onChange={handleBinaryChange}
            placeholder="ex: 1010"
          />
        </div>

        <div className="input-group">
          <label className="label-decimal">Decimal:</label>
          <input
            type="number"
            className="input-field input-decimal"
            value={displayDecimal}
            onChange={handleDecimalChange}
            placeholder="ex: 10"
          />
        </div>

        <div className="input-group">
          <label className="label-hex">Hexadecimal:</label>
          <input
            type="text"
            className="input-field input-hex"
            value={displayHex}
            onChange={handleHexChange}
            placeholder="ex: A"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
