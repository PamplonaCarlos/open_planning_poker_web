
export default function Warning({warning, setWarning}) {
    return(<>
        {
            warning.state ? ( 
                <div className={`alert alert-${warning.color} d-flex align-items-center alert-dismissible fade show position-absolute z-3 w-25`} role="alert">
                  <span><strong>Aviso!</strong>  {warning.name} </span>
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>setWarning({state: false, name: "", color: "",})}></button>
                </div>
              ) : (<></>)
        }
        </>
       
    );
}