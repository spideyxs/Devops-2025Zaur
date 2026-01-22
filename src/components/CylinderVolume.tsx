function CylinderVolume() {
  const calculateVolume = (radius: number, height: number) => {
    return Math.PI * (radius ** 2) * height;
  };

  return (
    <li>
      Объём цилиндра:
      <span className="formula">V = πr<sup>2</sup>h</span>
    </li>
  );
}

export default CylinderVolume;
