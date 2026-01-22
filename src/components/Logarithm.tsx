function Logarithm() {
  const calculateLog = (base: number, value: number) => {
    return Math.log(value) / Math.log(base);
  };

  return (
    <li>
      Логарифм:
      <span className="formula">log<sub>b</sub>a</span>
    </li>
  );
}

export default Logarithm;
