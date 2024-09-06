
export default function Warning({warning}) {
    return(<>
        {
            warning.state ? ( <div className="container mt-3">
                <div className={`alert alert-${warning.color} alert-dismissible fade show`} role="alert">
                  <strong>Aviso!</strong> {warning.name}
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>) : (<></>)
        }
        </>
       
    );
}