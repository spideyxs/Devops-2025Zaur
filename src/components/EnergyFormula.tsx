function EnergyFormula() {
  const calculateEnergy = (mass: number, speedOfLight: number) => {
    return mass * (speedOfLight ** 2);
  };

  return (
    <li>
      Формула энергии:
      <span className="formula">E = mc<sup>2</sup></span>
    </li>
  );
}

export default EnergyFormula;
