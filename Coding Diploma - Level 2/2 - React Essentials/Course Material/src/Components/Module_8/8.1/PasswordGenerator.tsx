import { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(10);
  const [numAllow, setNumbAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="m-8 bg-gray-100 rounded-2xl">
      <h1 className="pt-6 pb-2 text-5xl text-center">Password Generator</h1>
    </div>
  );
};

export default PasswordGenerator;
