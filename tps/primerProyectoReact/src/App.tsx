//import ComponentCounter from "./components/ComponentCounter/ComponentCounter";
//import MiPrimerComponente from "./components/MiPrimerComponente";

import ComponenteAddList from "./components/ComponenteAddList/ComponenteAddList";
import ComponenteAleatorio from "./components/ComponenteAleatorio/ComponenteAleatorio";
import ComponenteBackground from "./components/ComponenteBackground/ComponenteBackground";
import ComponenteTemporizador from "./components/ComponenteTemporizador/ComponenteTemporizador";

const App = () => {


    return(
        <div style={{
            display: 'flex',
            gap: '4vw'
        }}>
            <ComponenteBackground/>
            
            <ComponenteAleatorio/>

            <ComponenteAddList/>

            <ComponenteTemporizador/>
        </div>
        
    )
}

export default App;