export const Alumnos = () => {
    interface Alumno {
        name: string;
        edad: number;
        calificacion: number;
    }
    const alumnos:Alumno [] = [
        {
            name: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            name: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            name: 'Gerson',
            edad: 18,
            calificacion: 7,
        }
    ];
    const promedio=
    alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0) / alumnos.length;
  return (
    <>
      <h1>Alumnos</h1>
      {/* <code>
        <pre>
            {JSON.stringify(alumnos,null, 5)}
        </pre>
      </code> */}
      <p>Promedio de calificaciones: {promedio} </p>
    </>
  );
};

