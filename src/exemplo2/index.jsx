import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados = await resposta.json();
        setUsuario(dados);
    }
    buscarUsuario();
  }, []);//complete o código);

  return (
    <>
      <h1>Buscar Usuários</h1>
      <ul>
        {usuario.map(usuario => (
          <li key={usuario.userId}>
            <p>{usuario.id}</p>
            <h2>{usuario.title}</h2>
          </li>
        ))}
      </ul>
    </>
    )
}
