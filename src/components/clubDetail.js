import './css/club.css'
import { Card, ListGroup, Button } from "react-bootstrap";
import { useParams} from 'react-router-dom';

function ClubDetail({toUclubs, setToUclubs}){

    let {id} = useParams();
    let clubInfo = toUclubs.find((data)=>{
        return data.id === id;
    })
    

    return(
        <div className="clubDetail">
            <Card style={{ width: '60%', margin:"40px auto" }}>            
                <Card.Img variant="top" src={clubInfo.imgPathB} />
                <Card.Body>
                    <Card.Title className="detailTitle">{clubInfo.clubName}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{clubInfo.content1}</ListGroup.Item>
                    <ListGroup.Item>{clubInfo.content2}</ListGroup.Item>
                    <ListGroup.Item>{"참가비 : "}{clubInfo.clubPrice}{"원"}</ListGroup.Item>
                </ListGroup>
                <div className="detailButton">
                <Card.Body>
                    <Button variant="outline-dark">담기</Button>
                </Card.Body>
                </div>
            </Card>
        </div>
    );
} export default ClubDetail;