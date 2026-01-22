function PythagoreanTheorem() {
  const calculateHypotenuse = (a: number, b: number) => {
    return Math.sqrt(a ** 2 + b ** 2);
  };

  return (
    <li>
      Теорема Пифагора:
      <span className="formula">a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></span>
    </li>
  );
}

export default PythagoreanTheorem;
