import './card.css'

export default function Card({ name, voted, number, show, proportion }) {

    const cardwidth = 500-(20*proportion) >= 100? 500-(50*proportion): 100
    const cardFont = 40-(3*proportion) >= 20? 40-(3*proportion) : 20

    const less6 = () => {
        return (
            <div className={` col-6 col-md-4 row`} >
                <div className={`col-12 d-flex justify-content-center align-items-center`}>
                    <div className={`card ${show ? "card-rotate": "card-image "}  ${ voted ? "border border-3 border-danger" : ""} w-75 h-100 d-flex justify-content-center align-items-center`} >
                        <span className='card-content text-danger'>
                        {
                            show ? number == 999? "∞" : number == -2? "chá": number : ""
                        }
                        </span>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                    {
                        <h3 className="text-white"> {name}</h3>
                    }
                </div>
            </div>
        );
    }

    const more6 = () => {
        return (
            <div className={`col-4 col-md-2  row`} >
                <div className={`col-12 d-flex justify-content-center align-items-center`}>
                    <div className={`card ${show ? "card-rotate": "card-image "}  ${ voted ? "border border-3 border-danger" : ""} w-75 h-100 d-flex justify-content-center align-items-center`} >
                        <span className='card-content text-danger'>
                        {
                            show ? number : ""
                        }
                        </span>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                    {
                        <h3 className="text-white name"> {name}</h3>
                    }
                </div>
            </div>
        );
    }

    const uncount = () => {
        return(<></>);
    }


    return (
        <>

        {
            proportion <= 6? less6():
            proportion > 6 && proportion <= 12? more6(): uncount()

        }
        </>
    );
}