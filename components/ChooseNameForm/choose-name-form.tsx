import "./choose-name.css"

export default function ChooseNameForm({handleJoinRoom, handleInput}) {
    return(
        <form className="form w-25 p-3 border rounded">
            <h1>Choose a name</h1>
            <input type="text" name="name" onChange={handleInput}/>
            <button className="border border-1 rounded"onClick={handleJoinRoom}>Join</button>
        </form>
    );
}