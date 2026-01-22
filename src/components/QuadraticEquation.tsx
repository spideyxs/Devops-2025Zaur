function QuadraticEquation() {
  const calculateY = (a: number, x: number, b: number, c: number) => {
    return a * (x ** 2) + b * x + c;
  };

  return (
    <li>
      Квадратное уравнение:
      <span className="formula">y = ax<sup>2</sup> + bx + c</span>
    </li>
  );
}

export default QuadraticEquation;
