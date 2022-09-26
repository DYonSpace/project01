import { Col, Card, } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


function ShopItem({items, item, i}){

    let navigate = useNavigate();

    return(
        <div className="ShopItem">
        <Col>
            <Card style={{ width: '18rem', cursor:"pointer", marginTop: "30px"}}  onClick={()=>{navigate("./product/"+item.id) }}>
                <Card.Img variant="top" src={items[i].imgPath} />
                <Card.Body>
                    <Card.Title>{item.itemName}</Card.Title>
                    <Card.Text>
                    {items[i].content}
                    </Card.Text>
                    <Card.Text>
                    {"가격: "}{item.price}{"원"}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>            
        </div>
    );
} export default ShopItem;

