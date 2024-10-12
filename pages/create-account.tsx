import React, { useState, ChangeEvent } from "react";
import { useRouter } from 'next/router';
import { StatusCodes } from "http-status-codes"
import HomePoker from "../contents/HomePoker/home-poker";
import Warning from "../contents/Warning/warning";
import RegisterForm from "../components/RegisterForm/register-form";
import SpinningButton from "../components/SpinnerButton/spinner-button";

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

    console.log(res.status);

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
      <Warning warning={warning} setWarning={setWarning}/>
      <RegisterForm handleInput={handleInput}>
        <SpinningButton name="Register" onClick={submitForm} setLoading={setLoading} loading={loading} id="join-button"/>
      </RegisterForm>
    </HomePoker>
  );
}