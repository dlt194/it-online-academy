import { useCallback, useRef, useState } from "react";
import usePasswordGenerator from "./hooks/usePasswordGenerator";

const PasswordGenerator = () => {
  {
    /**
     * Here we use a Custom Hook - this is benificial for the below reasons:
     * Encapsulates reusable logic so components stay clean and focused on rendering.
     * Reusable across multiple components
     * Keeps components simpler and easier to read
     * Encapsulates complex state & side effects
     * Makes business logic easier to test independently
     * Improves maintainability and consistency across the app
     */
  }
  const {
    password,
    error,
    strength,
    length,
    setLength,
    numberAllowed,
    setNumberAllowed,
    characterAllowed,
    setCharacterAllowed,
    regenerate,
  } = usePasswordGenerator();
  const [message, setMessage] = useState("");
  const passwordAsRef = useRef<HTMLInputElement>(null);

  const copyPasswordToClipboard = useCallback(() => {
    if (!password) return;
    passwordAsRef.current?.select();
    window.navigator.clipboard.writeText(password);

    setMessage("Password copied to Clipboard");

    setTimeout(() => setMessage(""), 3000);
  }, [password]);

  const getStrengthColor = () => {
    if (strength < 30) return "bg-red-500";
    if (strength < 60) return "bg-orange-500";
    if (strength < 80) return "bg-yellow-400";
    return "bg-green-500";
  };

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-6 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3 text-lg sm:text-xl">
        Password Generator
      </h1>

      <div className="flex flex-col sm:flex-row shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-sm sm:text-base"
          placeholder="Password"
          ref={passwordAsRef}
          readOnly
        />
        <button
          className="outline-none bg-blue-700 text-white px-4 py-2 hover:bg-blue-900 transition"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>

      <div className="w-full bg-gray-300 rounded h-3 mb-4 overflow-hidden">
        <div
          className={`h-3 ${getStrengthColor()} transition-all duration-500`}
          style={{ width: `${strength}%` }}
        />
      </div>

      {message && (
        <p className="text-center text-green-400 text-sm mb-4">{message}</p>
      )}
      {error && (
        <p className="text-center text-red-400 text-sm mb-2">{error}</p>
      )}

      <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-6 sm:items-center text-sm sm:text-base">
        {/* Length slider */}
        <div className="flex flex-col sm:flex-row items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer w-full sm:w-auto"
            onChange={(e) => setLength(e.target.valueAsNumber)}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={characterAllowed}
            id="characterInput"
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={regenerate}
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
        >
          Regenerate
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
