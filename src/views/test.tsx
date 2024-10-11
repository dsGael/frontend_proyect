import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/userAddservice.ts';
import { responseUser } from '../services/userAddservice.ts'


// interface userProps{
//     user_id:number,
//     name:string,
//     last_name: string,
//     access_email: string,
//     password: string,
//     role_id: number,
//     phone_number: string
// }

  export function UserInfo(){
    const [mensaje, setMensaje] = useState<responseUser[]>([]);
    const [error, setError] = useState<string>(''); 
  
    useEffect(() => {
       const fetchDatos = async () => {
        try {
          const data: responseUser = await getAllUsers();
          setMensaje(data);
        } catch (err) {
          setError('Error al obtener datos del backend.');
        }
      };
  
      fetchDatos();
    }, []);
  
    // const handleEnviar = async () => {
    //   const datosEnviar: EnviarEjemploRequest = { clave: 'valor' };
    //   try {
    //     const respuesta: EnviarEjemploResponse = await enviarEjemplo(datosEnviar);
    //     alert(respuesta.mensaje);
    //   } catch (err) {
    //     alert('Error al enviar datos al backend.');
    //   }
    // };
  
    return (
      <div>
        <h1>Mensaje del Backend: {mensaje}</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {/* <button onClick={handleEnviar}>Enviar Datos</button> */}
      </div>
    );
  };
