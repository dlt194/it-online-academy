import { useState, useCallback, useEffect } from "react";

export default function usePasswordGenerator() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [strength, setStrength] = useState(0);

  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const calculateStrength = (pass: string) => {
    let score = 0;

    if (pass.length >= 12) score += 25;
    if (/[0-9]/.test(pass)) score += 25;
    if (/[^A-Za-z0-9]/.test(pass)) score += 25;
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score += 25;

    setStrength(score);
  };

  const passwordGenerator = useCallback(() => {
    setError("");

    if (length < 12) {
      setError("Password length must be at least 12 characters.");
      setPassword("");
      setStrength(0);
      return;
    }

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
    calculateStrength(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return {
    password,
    error,
    strength,
    length,
    setLength,
    numberAllowed,
    setNumberAllowed,
    characterAllowed,
    setCharacterAllowed,
    regenerate: passwordGenerator,
  };
}
