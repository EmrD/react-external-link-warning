function Internal() {
    return (
      <div className="internal-container">
        <style>{`
          .internal-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #e0f7fa;
            font-family: 'Arial', sans-serif;
            color: #00695c;
            font-size: 24px;
            text-align: center;
          }
          .internal-container div {
            background-color: #ffffff;
            padding: 20px 40px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
        `}</style>
        <div>This is an internal page that came from redirection.</div>
      </div>
    );
  }
  
  export default Internal;
  