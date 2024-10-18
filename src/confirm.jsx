import { Link } from "react-router-dom";

function Confirm() {
  const urlprop = new URLSearchParams(window.location.search).get("url");

  return (
    <div className="confirm-container">
      <style>{`
        .confirm-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
          font-family: Arial, sans-serif;
          color: #333;
        }
        .confirm-box {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 400px;
          width: 100%;
        }
        a {
          color: #007BFF;
          text-decoration: none;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
        .button-container {
          margin-top: 20px;
          display: flex;
          justify-content: space-around;
        }
        .button-container button, .button-container .link-button {
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .link-button {
          background-color: #28a745;
          color: white;
          text-decoration: none;
        }
        .link-button:hover {
          background-color: #218838;
        }
        button {
          background-color: #dc3545;
          color: white;
        }
        button:hover {
          background-color: #c82333;
        }
      `}</style>
      <div className="confirm-box">
        <div>This request wants you to route to </div>
        {urlprop ? (
          <a href={urlprop}>{urlprop}</a>
        ) : (
          <div>Null</div>
        )}
        <div>Do you agree?</div>
        <div className="button-container">
          <Link to={urlprop} className="link-button">
            Agree
          </Link>
          <button onClick={() => window.history.back()}>Deny</button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
