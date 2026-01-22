function WaterFormula() {
  const molecularWeight = () => {
    const hydrogen = 1;
    const oxygen = 16;
    return 2 * hydrogen + oxygen;
  };

  return (
    <li>
      Химическая формула воды:
      <span className="formula">H<sub>2</sub>O</span>
    </li>
  );
}

export default WaterFormula;
