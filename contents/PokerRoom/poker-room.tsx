import "./poker-room.css";
import Image from 'next/image';

export default function PokerRoom({ children}) {
    return(
        <>
        <main className="container-fluid ">
                {
                    children[0]
                }
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    {
                    children[1]
                    }
                </div>
                {
                    children[2]
                }
            <Image className="z-n1 position-absolute bottom-0 start-0 w-100 h-100 opacity-50" src="../images/poker3.svg" alt="poker" width={100} height={100} />
        </main>
        </>
    );
}
