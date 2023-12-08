import { useState, useEffect } from "react";

const Formulario = () => {
    const [MateriaA, setMateriaA] = useState(0);
    const [MateriaB, setMateriaB] = useState(0);
    const [MateriaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O  Componente iniciou')

        return () => {
            console.log('O componete finalizou')
        }
    }, []);

    useEffect(() => {
        console.log('o estado nome mudou')
    }, [nome]);

    useEffect(() => {
        console.log('materia mudou para: ' + MateriaA)
    }), [MateriaA, MateriaB, MateriaC];
    
    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = MateriaA + MateriaB + MateriaC;
        const media = soma /3;

        console.log(media)

        if (media >= 7){
            return(
                <p>
                    Você foi aprovado
                </p>
            )
        }else {
            return (
                <p>Você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={({target}) => setMateriaB(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={({target}) => setMateriaC(parseInt(target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario