import { useEffect, useState } from "react";
import Perfil from "./components/Perfil/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
  const [formularioEstaVisivel, setFormularioVisivel] = useState(true)
  const nome = 'Felipe'

  function retornaNome(){
    return nome;
  }

  const pessoa = {
    nome: 'Maria'
  }

  let estaDeDia = false;

  return (
    <>
    <Perfil nomeUsuario={'0Lipe'}/>
    
    <ReposList nomeUsuario={'0Lipe'}/>
    {/* {formularioEstaVisivel && (
      <Formulario/>
    )}
    <button onClick={() => setFormularioVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
