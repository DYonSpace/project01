import './css/shop.css';
import {useState} from 'react';
import {Container, Row, Button, Spinner} from 'react-bootstrap';
import axios from 'axios';
import ShopItem from './shopItem';

function Shop({items, setItems}){

    let [showMore, setShowMore] = useState(true);
    let [showSpinner, setShowSpinner] = useState(false);
    let [getIndex, setGetIndex] = useState(3);

    let temp = [...items];
    let temp1 = temp.filter((elem, index, arr)=>{
        return index < getIndex
    })

    return(
        <div className="shop">
            
            <header className="shopHeader">
                <h3>ToU. store</h3>
                <h5>태블릿을 좋은 자기개발 도구로 만들어 줄 디지털 제품</h5>
            </header>

            <section className="shopSection">
                <div className='shopContainer'>
                    <Container>
                    <Row sm={1} md={3}>
                        
                    {
                    temp1.map((data, i)=>{
                        return(
                        <ShopItem key={data.id} items={items} item={data} i={i}/>
                        )
                    })}
                    </Row>
                    </Container>
                </div>

                <div className='buttons'>
                    {
                    showSpinner === true ? (
                    <div>
                        <Spinner animation="border" variant="Dark">
                            <span>Loading</span>
                        </Spinner>
                    </div>) : null
                    }

                    {
                    showMore === true ?
                    <div className='button'>
                    <Button variant="outline-dark" onClick={()=>{
                        console.log(temp1)
                        setGetIndex(getIndex+3); 
                        if(getIndex === 6) {
                            setShowMore(false);
                        }
                    }}>더보기</Button> </div> : null                      
                    }
                </div>
            </section>

        </div>
    );
} export default Shop;