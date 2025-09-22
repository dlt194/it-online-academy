const PropsComponent = ({ name, age }: { name: string; age: number }) => {
  return (
    <div className="border border-gray-300 p-4">
      <h2 className="font-semibold underline">Props Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default PropsComponent;
