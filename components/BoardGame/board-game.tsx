import Image from 'next/image';


export default function BoardGame({handleVote, handleShowVotes, handleNewVote, handleOpenModal, canVote}) {
    return(
       <div className=" d-flex justify-content-center position-absolute top-100 start-50 translate-middle w-75 mt-5">
        <div className="row  w-100 h-100">
            <div className="col-12 col-md-10 row mb-2">
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button  type="button" className="btn bg-danger text-white" onClick={()=>handleVote(-2)}>
                        <Image className="" src="../images/poker3.svg" alt="poker" width={20} height={20} />
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button  type="button" className="btn bg-danger text-white" onClick={()=>handleVote(0)}>
                        0
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn bg-dark text-white" onClick={()=>handleVote(1)}>
                        1
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2  d-flex justify-content-center align-items-center">
                    <button className="btn bg-danger text-white" onClick={()=>handleVote(2)}>
                        2
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn bg-dark text-white" onClick={()=>handleVote(3)}>
                        3
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn bg-danger text-white" onClick={()=>handleVote(5)}>
                        5
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn bg-dark text-white" onClick={()=>handleVote(8)}>
                        8
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn bg-danger text-white" onClick={()=>handleVote(13)}>
                        13
                    </button>
                </div>
                <div className="col-2 col-md-1 m-2 d-flex justify-content-center align-items-center">
                    <button className="btn bg-dark text-white" onClick={()=>handleVote(999)}>
                        ∞
                    </button>
                </div>
                
            </div>
            <div className="col-12 col-md-2">
                <div className="col-12 row d-flex justify-content-center align-items-center">
                    <button className=" col-12 btn bg-danger mb-3 text-white" disabled={!canVote} onClick={()=>handleShowVotes()}>
                        Show votes
                    </button>
                </div>
                <div className="col-12 row d-flex justify-content-center align-items-center">
                    <button className=" col-12 btn bg-danger mb-3 text-white"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>handleOpenModal()}>
                        See Analytic
                    </button>
                </div>
                <div className="col-12 row d-flex justify-content-center align-items-center">
                    <button className="col-12 btn bg-dark text-white" onClick={()=>handleNewVote()}>
                        Restart Games
                    </button>
                </div>
            </div>
        </div>
       </div>
    );
}