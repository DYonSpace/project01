import './css/club.css'
import { Container, Row, Col, Card, } from "react-bootstrap";
import {Outlet, useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Club(){


    let [toUclubs, setToUclubs] = useState([
        {
            id:"club01",
            clubName:"[10.3시작]2U 독서 클럽: 독서기록장으로 기억에 남는 독서 하기 beta",
            clubPrice:30000,
            imgPath:"http://172.30.1.29:8898/images/nelnabook00.png"
        },
        {
            id:"club02",
            clubName:"[10.3시작]2U 건강 클럽: 럽.마.바로 건강한 변화 기록하기 beta",
            clubPrice:20000,
            imgPath:"http://172.30.1.29:8898/images/luvma00.png"
        },
        {
            id:"club03",
            clubName:"[10.3시작]2U 계획 클럽: 슬대생으로 알찬 한 학기 준비하기 beta",
            clubPrice:20000,
            imgPath:"http://172.30.1.29:8898/images/myuniv00.png"
        },
        {
            id:"club04",
            clubName:"[10.3시작]2U 계획 클럽: 낼나 플래너로 멋진 한 달 계획 세우기 beta",
            clubPrice:20000,
            imgPath:"http://172.30.1.29:8898/images/nelnada00.png"
        }
    ])

    return(
        <div className="club">
            <header className="clubHeader">
                <h3>To.U CLUB beta</h3>
                <h5>스마트하게 성장하는 투유러의 자발적 성장모임 투유 클럽</h5>
            </header>
            <section className='clubSection'>
                <div className='clubSection1'>
                <h3>2U클럽</h3>
                <h5>스마트하게 성장하는 투유 클럽의 첫 클럽멤버가 되어줘!</h5>
                <p>투유클럽은 내가 원하는 나, 더 나은 내일의 나를 위해<br/>
                    오늘 하루도 최선을 다하는 멋진 사람들을 위한 커뮤니티야.<br/>
                    더 멋진 나를 발견하고, 내가 원하는 내일을 살고 싶은 투유러들,<br/>
                    모두 투유클럽에서 만나!
                </p>
                </div>
                <div className='clubSection2'>

                <Container>
                <Row sm={1} md={4}>
                {toUclubs.map((data, i)=>{
                    return(
                        <ClubItem key={data.id} toUclubs={toUclubs} toUclub={data} i={i}/>
                    )
                })}    
                </Row>
                </Container>
                </div>
            </section>
        </div>
    );
} export default Club;


function ClubItem({toUclubs, toUclub, i}){

    let navigate = useNavigate();

    return(
        <Col>
        <Card style={{ width: '18rem', cursor:"pointer", marginTop: "30px"}}  onClick={()=>{navigate("./"+toUclub.id) }}>
        <Card.Img variant="top" src={toUclubs[i].imgPath} />
        <Card.Body>
            <Card.Title>{toUclub.clubName}</Card.Title>
            <Card.Text>
            {"가격: "}{toUclub.clubPrice}{"원"}
            </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    );
}