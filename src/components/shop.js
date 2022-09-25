import './css/shop.css';
import {useState} from 'react';
import {Container, Row, Button, Spinner} from 'react-bootstrap';
import axios from 'axios';
import ShopItem from './shopItem';
import { Outlet } from 'react-router-dom';

function Shop(){

    let [getCnt, setGetCnt] = useState(2);
    let [showMore, setShowMore] = useState(true);
    let [showSpinner, setShowSpinner] = useState(false);

    let [items, setItems] = useState([
        {
            id: "pln001",
            itemName: "2022 낼나다이어리 (프로, 소프트레인보우)",
            content: "날짜형·프로·소프트레인보우",
            price: 12500,
            imgPath: "http://172.30.1.29:8898/images/planner-f1.png",
            imgPathB: "http://172.30.1.29:8898/images/planner-b1.png",
        },
        {
            id: "pln002",
            itemName: "2022 낼나다이어리 (프로, 크림그레이)",
            content: "날짜형·프로·크림그레이",
            price: 12500,
            imgPath: "http://172.30.1.29:8898/images/planner-f2.png",
            imgPathB: "http://172.30.1.29:8898/images/planner-b2.png",
        },
        {
            id: "pln003",
            itemName: "2022 낼나다이어리 (프로, 네온블랙)",
            content: "날짜형·프로·네온블랙",
            price: 12500,
            imgPath: "http://172.30.1.29:8898/images/planner-f3.png",
            imgPathB: "http://172.30.1.29:8898/images/planner-b3.png",
        },
    ]);

    return(
        <div className="Shop">
            <header className="shopHeader">
                <h3>ToU. store</h3>
                <h5>태블릿을 좋은 자기개발 도구로 만들어 줄 디지털 제품</h5>
            </header>

            <section className="shopSection">
            <Container>
                <Row sm={1} md={3}>
                {items.map((data, i)=>{
                    return(
                        <ShopItem key={data.id} items={items} item={data} i={i}/>
                    )
                })}    
                </Row>
            </Container>

                <div className='buttons'>
            {
            showSpinner === true ? (
                <div>
                    <Spinner animation="border" variant="Dark">
                        <span>Loading</span>
                    </Spinner>
                </div>
            ) : null
            }

            {
                showMore === true ?
                <div className='button'>
                <Button variant="Light" onClick={()=>{

                setShowSpinner(true);
            
                const urlPath = 'http://127.0.0.1:8898/itemData/list'+ getCnt+'.json';
                        
                axios.get(urlPath)
                .then((value)=>{
                // console.log(value.data[0]);
                    let temp = [...items];
                    for(let i=0; i<(value.data).length; i++)
                    {
                    temp.push(value.data[i]); //배열에 하나씩 넣어야하는 객체
                    }
                // setShowSpinner(false);
                setItems(temp);
                const tempCnt = getCnt+1;
                setGetCnt(tempCnt);
                //getCnt = 4가 되면 더이상 버튼이 보이면 안 됨
                if(tempCnt>3){
                setShowMore(false);
                }
                })
                .catch(()=>{
                // setShowSpinner(false);
                console.log('뭔가 잘못된 거');
                })
                .finally(()=>{  //다 돌고나서 성공을 하든 실패를 하든 무조건 스피너 사라지게!
                setShowSpinner(false);
                })
                }}>더보기...</Button></div> : null                      
            }
            </div>
            <div>
            <Outlet/>
            </div>
            </section>

        </div>
    );
} export default Shop;