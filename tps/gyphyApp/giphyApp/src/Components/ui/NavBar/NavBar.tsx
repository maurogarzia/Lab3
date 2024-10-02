import { FormEvent, useState } from "react";
import {Button, Form, Col, Navbar, Row } from "react-bootstrap"
import { useAppDispatch } from "../../../hooks/redux";
import { setGifts } from "../../../redux/slices/gift";
const API_KEY = import.meta.env.VITE_API_KEY //Api de donde saco la query



const NavBar = () => {
  const disaptch = useAppDispatch()  
  //Obtener la informacion de la api mediante fetch
  const fetchGift = async (query : string ) =>{
    try{
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12`
        );

        //Con los datos que recibo de la api lo que hago es guardarlos en un array con .map(), y mostrarlos por consola
        //En este caso son las imagenes del gif y el titulo
        const data = await response.json() ;
        const parseData = data.data.map((element : any) =>({
          urlGift : element.images.fixed_height.url, 
          title: element.title,
        }))
        
        disaptch(setGifts(parseData)); //Seteo el parseData 

    }catch (error){
      console.warn(error);
    }
  }

  const [queryInput, setQueryInput] = useState('');

  //Funcion que cuando toque el boton llame a fetchGift con la info de la api
  const submit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    fetchGift(queryInput)
  }

    return(
        <Navbar className="bg-body-tertiary justify-content-center">
      
      {/* Utilizo onSubmit para poder mandar lo que se pone en el form */}
      <Form onSubmit={submit}> 
        <Row>
          <Col xs="auto">
            <Form.Control
            //Hacer el onChange
              onChange={(e)=>{
                setQueryInput(() => e.target.value) //Actualiza el estado de la query obteniendo un valor que le doy al input 
              }}
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    )
} 

export default NavBar