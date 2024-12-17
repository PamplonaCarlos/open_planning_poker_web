import Image from 'next/image';
import "./home-poker.css";

export default function HomePoker({ children }) {
    return(
      <>
    <main className="container-fluid">
     
      <div className="row">
        <section className="col-md-6 col-sm-12 ">
          <div className="row d-flex justify-content-center align-items-center">
            <Image className="ps-5 p-3 mt-5 w-100 h-50 d-inline-block logo-image" src="./images/openpp.svg" alt="logo" width={100} height={100} />
          </div>
        </section>
        <section className="col-md-6 col-sm-12 d-flex justify-content-center ">
        {
          children[0]
        }
          <div className="row mt-2">
          {
            children[1]
          }
          </div>
        </section>
      </div>
      <Image className="position-absolute w-50 h-50 bottom-0 left-0 fixed-image"  src="./images/poker.svg" alt="poker" width={100} height={100} />
    </main>
    </>
    );
}
