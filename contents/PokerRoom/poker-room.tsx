import "./poker-room.css";
import Image from 'next/image';

export default function PokerRoom({ children}) {
    return(
        <>
        {
            children[0]
        }
        <main className="container-fluid">
                <div className="row row-cols-4 justify-content-around align-self-start mt-5 vh-50">
                    {
                    children[1]
                    }
                </div>
        </main>
            {
                children[2]
            }
            <Image className="z-n1 position-absolute bottom-0 start-0 w-100 h-100 opacity-50" src="../images/poker3.svg" alt="poker" width={100} height={100} />
        </>
    );
}
