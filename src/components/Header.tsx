import React from 'react';

interface HeaderProps {
  showIntro?: boolean;
  currentPage: 'home' | 'blogs' | 'contact';
}

export const Header: React.FC<HeaderProps> = ({ showIntro = false, currentPage }) => {
  const navigateToHome = () => {
    window.location.href = 'index.html';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigateToHome();
    }
  };

  return (
    <header className="header">
      <h1 
        className="name" 
        role="link" 
        tabIndex={0} 
        onClick={navigateToHome}
        onKeyDown={handleKeyDown}
      >
        Atho' O Atho'
      </h1>
      
      {showIntro && (
        <p className="intro">
          Hello, I'm Atho' O Atho'. These are some of the things I've made and done. 
          They mark different moments, and I'm okay letting them sit here for now.
        </p>
      )}

      <p className="contact">
        {currentPage === 'home' && (
          <>
            <a href="contact.html">Contact me</a>
            {' • '}
            <a href="blogs.html">Blogs</a>
          </>
        )}
        {currentPage === 'blogs' && (
          <>
            <a href="index.html">Home</a>
            {' • '}
            <a href="contact.html">Contact me</a>
            {' • '}
            <a href="blogs.html">Blogs</a>
          </>
        )}
        {currentPage === 'contact' && (
          <>
            <a href="index.html">Home</a>
            {' • '}
            <a href="blogs.html">Blogs</a>
          </>
        )}
      </p>
    </header>
  );
};
