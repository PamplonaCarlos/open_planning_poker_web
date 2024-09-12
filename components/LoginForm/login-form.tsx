// import "./login-form.css"
import "../RegisterForm/register-form.css"



export default function LoginForm({handleInput, children}) {
    return(
        <form className="form">
            <h1>Welcome to OpenPP</h1>
            <label>Mail</label>
            <input type="mail" name="mail" onChange={handleInput}/>
            <label>Password</label>
            <input type="password" name="password" onChange={handleInput}/>
            {
                children
            }
        </form>
    );
}