import './css/shop.css';
import {Button, Card, ListGroup} from 'react-bootstrap';
import {Outlet, useParams} from 'react-router-dom';

function ShopItemDetail({items}){

    let {id} = useParams();
    let itemInfo = items.find((data)=>{
        return data.id === id;
    })

    return(
        <div className="ShopItemDetail">

            <Card style={{ width: '50%', margin:"0 auto" }}>

                <Card.Img variant="top" src={itemInfo.imgPath} />
                <Card.Body>
                    <Card.Title>{itemInfo.itemName}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{itemInfo.content}</ListGroup.Item>
                    <ListGroup.Item>{itemInfo.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant="Warning">담기</Button>
                </Card.Body>
            </Card>
            <Outlet/>
        </div>
    );
}

export default ShopItemDetail;