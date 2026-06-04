import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        Made with{' '}
        <span className="footer-heart" aria-hidden="true">
          <i className="fa-solid fa-heart"></i>
        </span>{' '}
        from{' '}
        <span className="footer-flag" aria-hidden="true">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 14" 
            width="20" 
            height="14" 
            role="img" 
            aria-label="Indonesia"
          >
            <rect width="20" height="7" fill="#E70011" />
            <rect y="7" width="20" height="7" fill="#fff" />
          </svg>
        </span>
      </p>
    </footer>
  );
};
