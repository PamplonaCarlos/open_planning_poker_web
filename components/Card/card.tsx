import './card.css'

export default function Card({ name, voted, number, show, proportion }) {

    const less6 = () => {
        return (
            <div className={`col d-flex flex-column justify-content-center align-items-center`} >
                    <div className={`d-flex card ${show ? "card-rotate": "card-image "}  ${ voted ? "border border-3 border-danger" : ""} d-flex justify-content-center align-items-center`} >
                        <span className='card-content text-danger'>
                        {
                            show ? number === Number.POSITIVE_INFINITY? "∞" : number == -2? "☕": number : ""
                        }
                        </span>
                    </div>
                    <h3 className="text-white card-name">{name}</h3>
            </div>
        );
    }

    const more6 = () => {
        return (
            <div className={`col-3 col-sm-2 d-flex flex-column justify-content-center align-items-center`} >
                <div className={`d-flex flex-column justify-content-center align-items-center`}>
                    <div className={`card ${show ? "card-rotate": "card-image "}  ${ voted ? "border border-3 border-danger" : ""} d-flex justify-content-center align-items-center`} >
                        <span className='card-content text-danger'>
                        {
                            show ? number : ""
                        }
                        </span>
                    </div>
                </div>
                <h3 className="text-white card-name">{name}</h3>
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