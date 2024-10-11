// import { useState } from "react";
import { Field } from "./components/Field";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

interface ButtonProps {
  text:string;
  type?: 'submit'
}

function Button({text,type}:ButtonProps){

  return(
    <div className="flex justify-center p-4">
      <button
        type={type}
        className="sm:w-60 w-fit bg-[#E90074] p-4 rounded-xl text-white text-xl hover:bg-red-950 transition-colors ease-in-out duration-[400ms]">
          {text}
      </button>
    </div>


  );
}


function App() {
  // const [count, setCount] = useState(0);

  // document
  //   .getElementById("loginForm")
  //   .addEventListener("submit", function (event) {
  //     event.preventDefault();

  //     const email = document.getElementById("correo").value;
  //     const password = document.getElementById("contraseña").value;


      // Cambiar la dirección IP por la de la computadora que esté corriendo el servidor
    //   fetch("http://10.10.160.240:3000/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email: email, password: password }),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data.success) {
    //         localStorage.setItem("success", data.success);
    //         window.location.assign("/templates/index.html");
    //       } else {
    //         alert("Credenciales incorrectas");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    // });

  return (
    <>
      <div className="bg-[#353232] overflow-hidden">
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col">
            <div className="w-full flex justify-center items-center mt-5">
              <img
                src="src/images/logoBueno.jpeg"
                className=""
                alt="Imagen del logo y titulo"
              />
            </div>

            <div className="w-3/5 h-4/6 mt-10 pt-10 mx-auto bg-white rounded-md">
              <div className="p-8 mx-8 mb-8">
                <h1 className="mb-10 md:text-4xl sm:text-3xl text-xl text-[#E90074] whitespace-nowrap">
                  Iniciar sesión
                </h1>
                <form id="loginForm" className="mt-8" action="POST">
                  <Field id={'correo'} />

                  <Field id={'contraseña'} type={'password'} />

                  <Button text={"Iniciar sesión"} type={'submit'} />
                  <a
                    className="flex justify-center sm:text-2xl text-lg whitespace-nowrap p-auto py-5 hover:underline"
                    href="/templates/loginAdmin.html"
                  >
                    Registrar nuevo usuario
                  </a>
                </form>
              </div>
            </div>
          </div>

          <div className="bg-black sm:block">
            <img
              src="src/images/peines.jpeg"
              className="h-screen w-full object-cover opacity-50 "
              alt="Imagen grandota"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
