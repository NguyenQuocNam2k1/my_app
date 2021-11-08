import React ,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAccount } from '../../redux/actions/accountAction';
import Success from '../notification/Success';
import Error from '../notification/Error';


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statusRegister, setStatusRegister] = useState(false);
    const dispatch = useDispatch();
    
    const Register  = useSelector((state) => state.accounts.StatusRegister);

    const onChangeData = (event) =>{
        if(event.target.name === 'name'){
            setName(event.target.value);
        } else if(event.target.name === "email"){
            setEmail(event.target.value);
        } else if(event.target.name === "password"){
            setPassword(event.target.value);
        }
    }
    // var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //         return regex.test(value) ? undefined :  message || 'Trường này phải là email';
    const onClickRegister = (e) =>{
        e.preventDefault();
        if(name === "" || email === "" || password === "" ){
            Error("Account registration failed 😭")
        } else{
            dispatch(registerAccount(name , email , password));
            setStatusRegister(!statusRegister)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if(Register === 1){
                return Register === 1 ? Success("Successful account registration 😜") : Error("Account registration failed 😭")
            }
        }, [300]);
    }, [Register || statusRegister])
    return (
        <>
            <div className="login-box">
                <form>
                    <div className="user-box">
                        <input type="text" name = "name" required onChange= {(event)=>onChangeData(event)} />
                        <label>USERNAME *</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name ="email" required onChange= {(event)=>onChangeData(event)} />
                        <label>EMAIL ADDRESS *</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" required onChange= {(event)=>onChangeData(event)} />
                        <label>PASSWORD</label>
                    </div>
                    <button class="button_login" onClick={(e) => onClickRegister(e)}>REGISTERED</button>
                </form>
            </div>
        </>
    )
}


export default Register;

