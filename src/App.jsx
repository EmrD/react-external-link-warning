import React from 'react';

const ExternalLinkWarning = () => {
  const currentOrigin = window.location.origin;

  const handleClick = (event, href) => {
    const linkOrigin = new URL(href).origin;
  };

  return (
    <div>
      <style>{`
        .link-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        a {
          text-decoration: none;
          color: blue;
          font-weight: bold;
          padding: 10px 15px;
          border: 1px solid blue;
          border-radius: 5px;
          transition: background-color 0.3s, color 0.3s;
          margin-bottom: 20px;
        }
        a:hover {
          background-color: blue;
          color: white;
        }
        .external-link {
          background-color: lightcoral;
        }
        .internal-link {
          background-color: lightgreen;
        }
      `}</style>
      <div className="link-container">
        <a
          href="/confirm-redirection?url=https://www.youtube.com"
          onClick={(event) => handleClick(event, 'https://www.youtube.com')}
          className="external-link"
        >
          External Link
        </a>
        <a
          href="/internal-page"
          onClick={(event) => handleClick(event, '/internal-page')}
          className="internal-link"
        >
          Internal Link
        </a>
      </div>
    </div>
  );
};

export default ExternalLinkWarning;
