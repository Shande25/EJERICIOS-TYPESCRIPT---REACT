export const Cuadrado = () => {
  const lado = 12; 
  const calcular = (lado: number) => {
    if (lado <= 0) {
      return 0;
    }
    return lado * lado;
  };
  return (
    <>
      <h3>Calcular el area del cuadrado</h3>
      <span>
        El area del cuadrado con lado {lado} es {calcular(lado)}.
      </span>
    </>
  );
};