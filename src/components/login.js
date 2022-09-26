import { Outlet, useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import BackMovie from './backMovie';

function Login({userData, userName, setUserName}){

    let navigate = useNavigate();

    let [loginId, setLoginId] = useState("");
    let [loginPw, setLoginPw] = useState("");

    const loginSubmit = () => {
        console.log('로그인버튼눌러서userData확인');
        console.log(userData);
        if(loginId.trim()!=="" && loginPw.trim()!==""){
        let temp1 = [...userData]
        let tempdata1 = temp1.filter((data)=>{
            return data.id===loginId
            })
        
        if(tempdata1.length > 0) {
            console.log(tempdata1[0].name);
            if(tempdata1[0].id===loginId && tempdata1[0].pw === loginPw){
                setUserName(tempdata1[0].name);
                console.log('이름확인')
                console.log(userName)
                navigate("/toU");
                alert("로그인 성공. \""+userName+"\"님 환영합니다!")
            } else {
                alert('PW를 확인하세요.')            
            }
        } else {
            alert('가입되지 않은 ID입니다.')
        }
    } else{
        alert("ID 혹은 PW가 입력되지 않았습니다.")
    };


}
    return(
        <div className="bgV">
            <BackMovie/>
            <div className="loginBox">
            <Form onClick={()=>{
                console.log('로그인박스눌러서userData다시확인')
                console.log(userData);
                }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control controlId="email" type="email" placeholder="Enter email"
                onChange={(e)=>{
                    setLoginId(e.target.value);
                    console.log(loginId);
                }} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword"
                onChange={(e)=>{
                    setLoginPw(e.target.value);
                }}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                <Button variant="success" type="submit" onClick={(e)=>{
                    e.preventDefault();
                    loginSubmit(e);
                }} style={{margin:"20px"}}>Login</Button>
                <Button variant="warning" type="submit" onClick={(e)=>{
                    e.preventDefault();
                    navigate("/join");
                }} style={{margin:"20px"}}>Join</Button>
                </Form.Group>
            </Form>
        </div>
        <Outlet/>
    </div>

);}export default Login;