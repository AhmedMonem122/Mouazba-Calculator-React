import { useState } from "react";

const MouazbaForm = () => {
  const [numbers, setNumbers] = useState(Array(12).fill(0)); // Initialize with 12 zeros
  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalNumbers = numbers.reduce((acc, num) => acc + +num, 0); // Calculate total
    setTotal(totalNumbers);
  };

  const handleChange = (index, value) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Mouazba Calculator</h1>
        {numbers.map((number, index) => (
          <div key={index}>
            <input
              type="number"
              placeholder={`Enter number ${index + 1}`}
              value={number}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <br />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <p>Real Total: {total / 12}</p>
      <p>Total Approximated: {(total / 12).toFixed(2)}</p>
    </>
  );
};

export default MouazbaForm;
