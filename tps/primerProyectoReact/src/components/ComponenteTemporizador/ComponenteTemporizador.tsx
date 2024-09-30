import { useEffect, useState } from "react";

const ComponenteTemporizador = () =>{

    const [seconds, setSeconds] = useState(0);
    const [on, setOn] = useState(false);
    const [entrada, setEntrada] = useState('')

    useEffect(()=>{
        let interval  = null;

        if(on && seconds > 0){
            interval = setInterval(() => {
                setSeconds(prevContador => prevContador - 1);
    
                if(seconds === 0){
                    setOn(false);
                }
            }, 1000)

            
        }else if(seconds === 0){
            setOn(false); //Detengo el temporizador cuando llegue a 0
        }

        return () => {
            if (interval){
                clearInterval(interval); //Limpiar el intervalo cuando termina el conteo o se desmonta el componente
            }
        }
        
            
        },[seconds, on])

    //Funcion para comenzar el conteo
    const comenzar = () => {
        let segundos = parseInt(entrada); //Paso a valor de segundos el input 
        
        if(on === true){
            alert("El contador ya esta en marcha")
        }else{
            if(isNaN(segundos) || segundos <= 0){
                alert("No sirve lo que pusiste salame")
            }else{
                setSeconds(segundos) //Incio el contador con el valor del input
                setOn(true); //Pongo en marcha el contador
            }
        }
    }

    //Funcion para parar el cronometro
    const parar = () =>{
        if(on === true){
            setOn(false);
        }else{

            setOn(true);
        }
    } 

    const reiniciar = () =>{
        setSeconds(0); //Reinicio los segundos
        setOn(false); //Paro el contador
        setEntrada(''); //Limpio la entrada
    }

    return(
        <div style={{
            border: 'solid',
                height: '40vh',
                width : '20vw',
                boxShadow: '5px 5px 25px',
                backgroundColor: 'coral',
                alignItems: 'center'
        }}>

            <div style={{
                display: 'flex', flexDirection: 'column', gap: '1vh', alignItems: 'center'
            }}>
                <h2>Temporizador</h2>
                <input type="number" placeholder="Ingrese los segundos"
                value={entrada}
                onChange={(event) =>setEntrada(event.target.value) }
                disabled = {on}/>   
                
                {/* Boton para comenzar */}
                <button onClick={comenzar}>Comenzar</button> 
                {/* Boton para parar */}
                
                <button onClick={parar}>{on ? 'Parar' : 'Continuar'}</button>
                {/*  */}
                <button onClick={reiniciar}>Reiniciar</button>

                <div>
                    <p>Conteo : {seconds}</p>
                </div>
            </div>

        </div>
    )

}

export default ComponenteTemporizador;