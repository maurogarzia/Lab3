import { useState } from "react";

const ComponenteAleatorio = () =>{
    const [number, setNumber] = useState(Math.trunc(Math.random() * 100)); //Almaceno en el estado inicial un numero random
    const [intentoUsuario, setIntento] = useState(''); //El intento del usuario
    


    //Funcion que verifica si el usuario adivina 
    const compararIntento = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const intento = parseInt(intentoUsuario);

        if(isNaN(intento)){
            alert("Ingrese algo valido");
        }else if(number > intento){
            alert("Prueba con un numero mas alto");
        
        }else if(number < intento){
            alert("Prueba con un numero mas bajo");
        }else{
            alert("Adivinaste!!!");
        }

    }

    //Funcion para reiniciar intento
    const reiniciarIntento = () =>{
        setNumber(Math.trunc(Math.random() * 100));
        setIntento('');
    }


    return(
        <div style={{
            border: 'solid',
            height: '40vh',
            width : '20vw',
            boxShadow: '5px 5px 25px',
            backgroundColor: 'aliceblue'
        }}>

            <h2>Vamos a adivinar el numero!!</h2>
            <form action="" onSubmit={compararIntento}>
                <input type="number" placeholder="Ingresa el numero"
                value={intentoUsuario}
                    onChange={(e) => setIntento(e.target.value)} //Recibo lo que el usuario ingresa en el input
                    style={{position: 'relative', left: '4vw'}}/>
                <div 
            
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin : '2vh',
                    
                }}>

                    <button type="submit">Comparar</button>
                </div>
            </form>

            

            {/* Boton para reiniciar */}
            <div style={{display : 'flex',flexDirection:'column', alignItems : 'center'}}>
                <button onClick={reiniciarIntento}>Comenzar de nuevo</button>
            </div>
            
            
        </div>
    )
}

export default ComponenteAleatorio;