import React from 'react'
import { LocationCity,Event,AccountCircle,Work} from '@material-ui/icons';
import { Card,Button } from 'react-bootstrap';

const Profile = (props) => {
    const {name,city,age,profession} = props.dados
    return (
        <Card>
            <Card.Img variant="top" src="https://uploadexample20.s3.amazonaws.com/imagem-1617148515428.png" />
            <Card.Body>
                <Card.Text><AccountCircle />{name}</Card.Text>
                <Card.Text><LocationCity />{city}</Card.Text>
                <Card.Text><Event />{age}</Card.Text>
                <Card.Text><Work />{profession}</Card.Text>
                <Button>Teste</Button>
            </Card.Body>            
        </Card>
    )
}
export default Profile