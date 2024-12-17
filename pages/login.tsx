import React, { useState, ChangeEvent } from "react";
import { setCookie } from 'nookies';
import nookies from 'nookies';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Warning from "../contents/Warning/warning";
import HomePoker from "../contents/HomePoker/home-poker";
import LoginForm from "../components/LoginForm/login-form";
import SpinningButton from "../components/SpinnerButton/spinner-button";
import ForgotPassword from "../components/forgot-password/forgot-password";
import LoginButton from "../components/LoginButtons/login-button";
import { v4 as uuidv4 } from 'uuid';

const uuid = uuidv4();

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const token = cookies.token;

  if (token) {
    
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
