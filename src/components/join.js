import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import HomeMovie from './homeMovie';

function Join({userData, setUserData, userName, setUserName}){

    let navigate = useNavigate();

    let [inputId, setInputId] = useState("");
    let [inputPw, setInputPw] = useState("");
    let [inputName, setInputName] = useState("");

    const joinSubmit= () => {
        if(inputId.trim()!=="" && inputPw.trim()!=="" && inputName.trim()!==""){
            if(inputId.includes('@')===true){
            let temp = [...userData]
            let tempdata = temp.filter((data)=>{
                return data.id===inputId})
                    console.log('회원가입 필터링한 tempdata')
                    console.log(tempdata);
                if(tempdata.length > 0){
                    alert('이미 등록된 ID입니다.')
                } else {                        
                    let copyData = [...userData]
                    copyData.push({id:inputId, pw:inputPw, name:inputName})
                    setUserData(copyData);
                    setUserName(inputName);
                    alert("등록 완료. 로그인하세요!");
                    navigate("/login");
                    setInputId("");
                    setInputPw("");
                    setInputName("");
                }
            }else{
                alert('이메일을 입력하세요.')
            }            
            } else {
                alert('빈 칸을 채워주세요.')
            }


        }


    return(
        <div className="homeV">
            <HomeMovie/>
            <div className="joinBox">            
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control controlId="email" type="email" placeholder="Enter email"
                    onChange={(e)=>{
                    console.log(inputId);
                    setInputId(e.target.value);
                    }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword"
                    onChange={(e)=>{
                    console.log(inputPw);
                    setInputPw(e.target.value);
                    }}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNickname"
                    onChange={(e)=>{
                    setInputName(e.target.value);
                    console.log(inputName)
                    }}>
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control type="text" placeholder="Nickname" />
                    </Form.Group>

                    <Button variant="warning" type="submit" onClick={(e)=>{
                    e.preventDefault();
                    joinSubmit(e);
                    console.log('join버튼눌렀으니userData확인')
                    console.log(userData);
                    }} style={{margin:"20px"}}>Join</Button>
                </Form>
            </div>
        </div>
    );

}export default Join;