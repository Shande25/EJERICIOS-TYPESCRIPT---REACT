export const Dividido = () => {
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const dividir5 = arreglo.map(valor => valor / 5);
  return (
    <>
      <h3>Arreglo sin Dividir</h3>
      <p>{arreglo.join(', ')}</p>
      <h3>Arreglo Dividido por 5</h3>
      <p>{dividir5.join(', ')}</p>
    </>
  );
};