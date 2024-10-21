import { useEffect, useState } from "react";

export default function App() {
  
  const [DadosUsuario,setDadosUsuario] = useState([]);

  useEffect(() => { 

    const  buscardados  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setDadosUsuario(dados); //complete o código
    }
   buscardados(); //complete o código
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {DadosUsuario.map(dados =>(
          <li key={dados.id}>
          <h2>{dados.title}</h2>
          <p>{dados.description}</p>
          </li>
          ))
            //complete o código
        }
      </ul>
    </>
  );
}
