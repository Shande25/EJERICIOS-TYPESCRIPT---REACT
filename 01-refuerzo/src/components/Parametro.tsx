export const Parametro = () => {
    const numeros: number[] = [1, 2, 3, 4,5];
    const sumaNumeros = numeros.reduce((total, num) => total + num);

    return (
        <>
            <h3>Sumar parametros</h3>
            <span>Numeros: {numeros.join('+')} la suma es : {sumaNumeros}</span>
        </>
    );
};