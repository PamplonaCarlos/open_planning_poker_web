import React, { useState, ChangeEvent } from "react";
import { useRouter } from 'next/router';
import Warning from "../contents/Warning/warning";
import HomePoker from "../contents/HomePoker/home-poker";
import LoginForm from "../components/LoginForm/login-form";
import SpinningButton from "../components/SpinnerButton/spinner-button";
import ForgotPassword from "../components/forgot-password/forgot-password";
import LoginButton from "../components/LoginButtons/login-button";
import LoginCooKies from "../app/api/login/route";

export default function Login() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState({
        state: false,
        name: "",
        color: "",
    });
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue
        }));
      }

      const submitForm =  async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/v1/login`, {
          method: "POST",
          body: JSON.stringify(formData),
      
          headers: {
            'Content-Type': 'application/json'
          },
        });
        
        
        
        let {token} = await res.json()
        //TODO: save JWT cookies
        // LoginCooKies(token)

        if (res.status == 200) {
          setLoading(false);
          setWarning({
            state: true,
            name: "Login efetuado com sucesso",
            color: "success",
          });
          setTimeout(()=>{}, 7000);
          router.push("/");
        } else {
          setLoading(false);
          setWarning({
            state: true,
            name: res.statusText,
            color: "danger",
          });
          setTimeout(()=>{
            setWarning({state: false, name: "", color: "",});
          }, 10000)
        }
      }

      return (
        <HomePoker>
          <Warning warning={warning}/>
          <LoginForm handleInput={handleInput} >
            <SpinningButton name="Join" onClick={submitForm} setLoading={setLoading} loading={loading} id="join-button"/>
            <ForgotPassword />
            <LoginButton name="Create an account" onClick={submitForm} setLoading={setLoading} loading={loading} url={"/create-account"} color={"black"} id="create-account-button"/>
            <LoginButton name="Create a room without login" onClick={submitForm} setLoading={setLoading} loading={loading} url={"/create-account"} color={"white"}  id="create-room-button"/>
          </LoginForm>
        </HomePoker>
      );
}