import Image from 'next/image';
import './board-game.css'


export default function BoardGame({handleVote, handleShowVotes, handleNewVote, handleOpenModal, canVote}) {
    return(
       <div className="d-flex justify-content-center position-absolute top-75 start-50 translate-middle w-75 mt--5 pt-10">
        <div className="row  w-100 h-100 bg-white br">
            <div className="col-12 col-md-10 row mb-2">
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-danger text-white" onClick={()=>handleVote(-2)}>
                    ☕
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-danger text-white" onClick={()=>handleVote(0)}>
                        0
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card btn-card bg-dark text-white" onClick={()=>handleVote(1)}>
                        1
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2  d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-danger text-white" onClick={()=>handleVote(2)}>
                        2
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-dark text-white" onClick={()=>handleVote(3)}>
                        3
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-danger text-white" onClick={()=>handleVote(5)}>
                        5
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-dark text-white" onClick={()=>handleVote(8)}>
                        8
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-danger text-white" onClick={()=>handleVote(13)}>
                        13
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-dark text-white" onClick={()=>handleVote(999)}>
                        ∞
                    </button>
                </div>
                
            </div>
            <div className="col-12 col-md-2">
                <div className="col-12 row d-flex justify-content-center align-items-center">
                    <button className=" col-12 btn bg-danger mb-2 text-white" disabled={!canVote} onClick={()=>handleShowVotes()}>
                        Show votes
                    </button>
                </div>
                <div className="col-12 row d-flex justify-content-center align-items-center">
                    <button className=" col-12 btn bg-danger mb-2 text-white"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>handleOpenModal()}>
                        See Analytic
                    </button>
                </div>
                <div className="col-12 row d-flex justify-content-center align-items-center">
                    <button className="col-12 btn bg-dark text-white" onClick={()=>handleNewVote()}>
                        New vote
                    </button>
                </div>
            </div>
        </div>
       </div>
    );
}