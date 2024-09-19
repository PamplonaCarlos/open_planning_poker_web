import React, { useState, ChangeEvent } from "react";
import { useRouter } from 'next/router';

import HomePoker from "../contents/HomePoker/home-poker";
import Warning from "../contents/Warning/warning";
import RegisterForm from "../components/RegisterForm/register-form";
import LoginForm from "../components/LoginForm/login-form";
import SpinningButton from "../components/SpinnerButton/spinner-button";
import LoginButton from "../components/LoginButtons/login-button";
import ForgotPassword from "../components/forgot-password/forgot-password";

export default function CreateAccount() {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState({
    state: false,
    name: "",
    color: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
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
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/v1/register`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (res.status == 201) {
      setLoading(false);
      setWarning({
        state: true,
        name: "Cadastro feito com sucesso",
        color: "success",
      });
      setTimeout(()=>{}, 7000);
      router.push("/login");
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
      <RegisterForm handleInput={handleInput}>
        <SpinningButton name="Register" onClick={submitForm} setLoading={setLoading} loading={loading} id="join-button"/>
      </RegisterForm>
      {/* <LoginForm handleInput={handleInput} >
        <SpinningButton name="Join" onClick={submitForm} setLoading={setLoading} loading={loading} id="join-button"/>
        <ForgotPassword />
        <LoginButton name="Create an account" onClick={submitForm} setLoading={setLoading} loading={loading} url={"/create-account"} color={"black"} id="create-account-button"/>
        <LoginButton name="Create a room without login" onClick={submitForm} setLoading={setLoading} loading={loading} url={"/create-account"} color={"white"}  id="create-room-button"/>
      </LoginForm> */}
    </HomePoker>
  );
}