import './css/shop.css';
import './css/toU.css';
import {Button, Card, ListGroup} from 'react-bootstrap';
import { Outlet, useParams } from 'react-router-dom';

function ShopItemDetail({items}){

    let {id} = useParams();
    let itemInfo = items.find((data)=>{
        return data.id === id;
    })

    return(
        <div className="shopItemDetail">
            <div>
            <Card style={{ width: '60%', margin:"50px auto" }}>
                <Card.Img variant="top" src={itemInfo.imgPathB} />
                <Card.Body>
                    <Card.Title className='detailTitle'>{itemInfo.itemName}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{itemInfo.content}</ListGroup.Item>
                    <ListGroup.Item>{"가격 : "}{itemInfo.price}{"원"}</ListGroup.Item>
                </ListGroup>
                <div className='detailButton'>
                <Card.Body>
                    <Button variant="outline-dark">담기</Button>
                </Card.Body>
                </div>
            </Card>
            </div>
            <Outlet/>
        </div>
    );
}

export default ShopItemDetail;