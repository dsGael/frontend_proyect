export interface responseUser{
    user_id:number,
    name:string,
    last_name: string,
    access_email: string,
    password: string,
    role_id: number,
    phone_number: string
}

const API_URL = import.meta.env.VITE_API_URL as string;

/**
 * Función para obtener datos de ejemplo desde el backend.
 */
export const getAllUsers = async ():Promise<responseUser> => {
  try {
    const respuesta = await fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!respuesta.ok) {
      console.log(respuesta)
      throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
    }

    const datos: responseUser = await respuesta.json();
    console.log(datos)
    return datos;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};

/**
 * Función para enviar datos de ejemplo al backend.
 * @param datos Datos a enviar.
 */
// export const enviarEjemplo = async (
//   datos: EnviarEjemploRequest
// ): Promise<EnviarEjemploResponse> => {
//   try {
//     const respuesta = await fetch(`${API_URL}/ejemplo`, {
//       method: 'POST',
//       credentials: 'include', // Incluye credenciales si es necesario
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(datos),
//     });

//     if (!respuesta.ok) {
//       throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
//     }

//     const respuestaDatos: EnviarEjemploResponse = await respuesta.json();
//     return respuestaDatos;
//   } catch (error) {
//     console.error('Error al enviar datos:', error);
//     throw error;
//   }
// };