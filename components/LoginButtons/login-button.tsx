import './login-button.css'

const LoginButton = ({ name, onClick, setLoading, loading, url, color, id }) => {

    const handleClick = (e) => {
        setLoading(id); 
        onClick(e);
        window.location.href = url;
    }

    return (
        <button className={`login-button ${color}`} onClick={handleClick} disabled={loading === id}>
            {loading === id ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                name
            )}
        </button>
    );
};

export default LoginButton;
