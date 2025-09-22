function VariableDisplayComponent() {
  const myVar1 = "Variable in JSX";
  const myVar2 = [1, 2, 3];
  const myVar3 = {
    name: "Dan Thomas",
    age: 30,
    skills: ["JavaScript", "React", "Node.js"],
  };

  return (
    <div>
      <p>{myVar1}</p>
      <p>{myVar2.join(", ")}</p>
      <p>{myVar3.name}</p>
    </div>
  );
}

export default VariableDisplayComponent;
