import React,{useState,useEffect} from "react"
import "./App.css"
import axios from "axios"
import { Container,Row,Col } from 'react-bootstrap';
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"

/* const App = ()=>{   

    return(
        <Container>
            <Row>
                <Col>1</Col>
            </Row>
            <Button variant="primary">Teste</Button>
        </Container>
    )
} */























const App = ()=>{
    const [dados,setDados]= useState([])
    useEffect(()=>{
        axios.get('https://nodejs-app-web.herokuapp.com/')
          .then(function (response) {
            // DEU TUDO CERTO
            setDados(response.data)
            console.log(response.data)
          })
    },[])
    

    return(
        <>
        
        <Container>
            <Row>
                <Col md={{span:6,offset:3}}>
                    <Navbar />
                </Col>
            </Row>
            <Row>
                <Col md={{span:6,offset:3}}>
                {dados.map((dado,key)=>{
                    return <Profile key={key} dados={dado}/> 
                })}
                </Col>
            </Row>
            
        </Container>
        </>
    )
}

export default App