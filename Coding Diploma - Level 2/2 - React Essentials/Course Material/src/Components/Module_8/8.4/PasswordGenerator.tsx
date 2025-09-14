import { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [strength, setStrength] = useState(0);

  const passwordAsRef = useRef<HTMLInputElement>(null);

  const passwordGenerator = useCallback(() => {
    setError("");

    if (length < 12) {
      setError("Password length must be at least 12 characters.");
      setPassword("");
      return;
    }

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
    calculateStrength(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    if (!password) return;
    passwordAsRef.current?.select();
    window.navigator.clipboard.writeText(password);

    setMessage("Password copied to Clipboard");

    setTimeout(() => setMessage(""), 3000);
  }, [password]);

  const calculateStrength = (password: string) => {
    let score = 0;

    if (password.length >= 6) score += 20;
    if (password.length >= 12) score += 20;
    if (/[0-9]/.test(password)) score += 20;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 20;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 20;

    setStrength(score);
  };

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
          readOnly
          ref={passwordAsRef}
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
    </div>
  );
};

export default PasswordGenerator;
