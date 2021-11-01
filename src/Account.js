import { useState } from 'react'
import UserService from './UserService';

export const Account = ({ setUser, setisLogin }) => {

    const [input, setInput] = useState({
        username: "",
        password: ""
    })

    const changeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const login = async () => {
        const token = await UserService.login(input);
        if (token === "error") {
            alert("login failed")
        } else {
            setUser({
                username: input.username,
                token: token
            })
            setisLogin(true)
        }
      };

    const register = async () => {
        const res = await UserService.register(input);
        if (res) {
          login()
        }else{
            alert("register failed")
        }
    };    

    return (
        <>
            <h2>Account</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <br />
                <input type="text" id="username" name="username" onChange={changeInput} />
                <br />
                <label htmlFor="pwd">Password:</label>
                <br />
                <input type="password" id="pwd" name="pwd" onChange={changeInput} />
                <br />
                <input type="button" value="Login" onClick={login} />
                <br />
                <input type="button" value="Register" onClick={register} />
            </form>
        </>
    )
}