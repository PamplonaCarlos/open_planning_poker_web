import './board-game.css'

export default function BoardGame({handleVote, handleShowVotes, handleNewVote, handleOpenModal, canVote, canAnalytic}) {
    return(
       <div className="d-flex justify-content-center position-absolute top-100 start-50 translate-middle w-75 bg-white rounded-1">
        <div className="row w-100 h-100 p-2 d-flex justify-content-center ">
            <div className="col-12 col-md-10 row align-items-center">
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-danger text-white d-flex justify-content-center align-items-center font-btn" onClick={()=>handleVote(-2)}>
                    ☕
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-danger text-white d-flex justify-content-center align-items-center font-btn" onClick={()=>handleVote(0)}>
                        0
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card btn-card bg-dark text-white  d-flex justify-content-center align-items-center font-btn" onClick={()=>handleVote(1)}>
                        1
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-danger text-white d-flex justify-content-center align-items-center font-btn" onClick={()=>handleVote(2)}>
                        2
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-dark text-white d-flex justify-content-center align-items-center font-btn" onClick={()=>handleVote(3)}>
                        3
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-danger text-white  d-flex justify-content-center align-items-center font-btn" onClick={()=>handleVote(5)}>
                        5
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-dark text-white d-flex justify-content-center align-items-center font-btn" onClick={()=>handleVote(8)}>
                        8
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-danger text-white d-flex justify-content-center align-items-center font-btn" onClick={()=>handleVote(13)}>
                        13
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn btn-card bg-dark text-white d-flex justify-content-center align-items-center font-btn" onClick={()=>handleVote(Number.POSITIVE_INFINITY)}>
                        ∞
                    </button>
                </div>
                
            </div>
            <div className="col-12 col-lg-2 row d-flex justify-content-center">
                <div className="col-12 row d-flex justify-content-center align-items-center">
                    <button className=" col-12 btn bg-danger mb-2 text-white" disabled={!canVote} onClick={()=>handleShowVotes()}>
                        Show votes
                    </button>
                </div>
                <div className="col-12 row d-flex justify-content-center align-items-center">
                    <button className=" col-12 btn bg-danger mb-2 text-white" disabled={!canAnalytic} onClick={()=>handleOpenModal()}>
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