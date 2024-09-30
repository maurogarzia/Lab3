import { useState } from "react";

const ComponenteAddList = () =>{

    const[elementsList, setElementsList] = useState<string[]>([]); //Estado para la actualizacion de la lita
    const [lista, setLista] = useState('');
    
    const addElements = (element : React.FormEvent<HTMLElement>) =>{
        element.preventDefault();
        const e = lista;
        ;
        
        if(e.trim() === ''){
            alert("Pero agrega algo infeliz")
        }else{
            setElementsList([...elementsList, e]);
            setLista(''); //Limpio el input
        }
    }

    const mostrarLista = () => {
        if(elementsList.length == 0){
            return `Lista vacia`
        }else {
            return `La lista actual: [${elementsList}]`;
        }
    }

    const borrarLista = () =>{
        setElementsList([])
    }

    return(
        <div
            style={{
                border: 'solid',
                height: '40vh',
                width : '20vw',
                boxShadow: '5px 5px 25px',
                backgroundColor: 'red',
                alignItems: 'center'}}>
            
            <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>

                <h2 style={{color : "white" }}>Formulario</h2>    
            </div>
            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap : '2vh',
                alignItems: 'center'}}>

                <input type="text" 
                placeholder="Ingresa algo"
                value={lista}
                onChange={(element) => setLista(element.target.value)}
                />
                <button onClick={addElements}>subir</button>
                <button onClick={borrarLista}>Borrar</button>
            </div>

            <div style={{
                display : 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white'
            }}>
                <p>{mostrarLista()}</p>
            </div>
            

        </div>
    )
}


export default ComponenteAddList;