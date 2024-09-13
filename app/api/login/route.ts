import { cookies } from "next/headers";

export default function LoginCooKies(token){
    return cookies().set("accessToken", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60,
        sameSite: "strict"
      });
}