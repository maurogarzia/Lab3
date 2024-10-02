import { FC } from "react";
import { Card } from "react-bootstrap";

interface IGift {
    urlGift : string;
    title : string;
}

interface IPpropsCardGift{
    gift: IGift;
}


const CardGift : FC<IPpropsCardGift> = ({gift}) =>{

    return(
        <>
            <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={gift.urlGift} />
            <Card.Body>
                <Card.Title>C{gift.title}</Card.Title>
            </Card.Body>
            </Card>
        </>
    );
}

export default CardGift