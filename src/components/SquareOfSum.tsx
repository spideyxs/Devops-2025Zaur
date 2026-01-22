function SquareOfSum() {
  const expandSquare = (a: number, b: number) => {
    return (a + b) ** 2;
  };

  const expandFormula = (a: number, b: number) => {
    return a ** 2 + 2 * a * b + b ** 2;
  };

  return (
    <li>
      Квадрат суммы:
      <span className="formula">(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></span>
    </li>
  );
}

export default SquareOfSum;
