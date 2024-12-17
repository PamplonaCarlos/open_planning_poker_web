import "./choose-name.css"

export default function ChooseNameForm({handleJoinRoom, handleInput, isFull}) {

    return(
        <>
        {
            !isFull? 
            <form className="form border rounded align-self-center">
                <h1>Choose a name</h1>
                <input type="text" placeholder="Pokerson" name="name" onChange={handleInput}/>
                <button className="border border-1 rounded"onClick={handleJoinRoom}> Join </button>
            </form> 
        : <h1 className="w-50 p-3 border rounded text-center text-white align-self-center">Room is full</h1>
        }
        </>
    );
}