import { FC, useState } from "react";

const ComponenteBackground : FC = () =>{

    const [color, setColor] = useState('#ffffff');

    const cambiarColor = () =>{
        let colorNew = Math.trunc(Math.random() * 0xffffff).toString(16); //El numero random que genera lo trunco
        colorNew = colorNew.padStart(6,'0');
        setColor(colorNew);

    } 
    return(
        <div style={{
            height: '40vh',
            width : '20vw',
            display : 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            border: 'solid',
            gap: '2vh',
            backgroundColor: `#${color}`,
            boxShadow: "5px 5px 25px"
        }}>
            <h2>Color: #{color}</h2>
            <button onClick={cambiarColor} style={{
                backgroundColor : 'white',
                border : '3px, solid',
                borderRadius: '5px',
                borderColor : 'blue',
                color: 'blue',

            }}>Cambiar Color</button>
        </div>
    )

}

export default ComponenteBackground;

