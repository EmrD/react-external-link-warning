import React from 'react';

const ExternalLinkWarning = () => {
  const currentOrigin = window.location.origin;

  const handleClick = (event, href) => {
    const linkOrigin = new URL(href).origin;

    if (linkOrigin !== currentOrigin) {
      const confirmation = window.confirm(
        'Bu siteyi terk ediyorsunuz. Devam etmek istiyor musunuz?'
      );

      if (!confirmation) {
        event.preventDefault();
      }
    }
  };

  return (
    <div>
      <a
        href="https://www.youtube.com"
        onClick={(event) => handleClick(event, 'https://www.youtube.com')}
      >
        External Link
      </a>
      <br />
      <a
        href="/internal-page"
        onClick={(event) => handleClick(event, '/internal-page')}
      >
        Internal Link
      </a>
    </div>
  );
};

export default ExternalLinkWarning;
