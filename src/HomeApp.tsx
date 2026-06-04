import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const HomeApp: React.FC = () => {
  return (
    <div className="container">
      <Header showIntro={true} currentPage="home" />
      
      <hr className="divider" />

      {/* Projects Section */}
      <section className="projects">
        <div className="project-grid">
          {/* Card 1: Loan Note */}
          <div className="project-card">
            <a href="https://myloannote.net" className="project-img-link" aria-label="View Loan Note Project">
              <img 
                src="images/loannote.png" 
                alt="Loan Note - Web app for tracking money you lend or borrow" 
                className="project-card-img" 
                width="495" 
                height="260" 
                loading="lazy" 
              />
            </a>
            <h3>Loan Note</h3>
            <p>
              Loan Note is a web app for tracking money you lend or borrow. Create loans, add amounts and labels, and see totals per loan and overall. Mark items as paid, set your currency, and use optional premium features and in-app contact for support. It works in the browser on any device.
            </p>
          </div>

          {/* Card 2: Steam */}
          <div className="project-card">
            <a href="https://steamcommunity.com/id/athomft/" className="project-img-link" aria-label="View Steam Profile">
              <img 
                src="images/gamer-in-action.png" 
                alt="Casual gaming profile - Dota 2 Herald ranked player" 
                className="project-card-img" 
                width="495" 
                height="260" 
                loading="lazy" 
              />
            </a>
            <h3>Steam Gaming</h3>
            <p>
              I’m just a casual gamer who plays purely for fun, not for trophies or pro-level glory, and most of my time is happily spent in Dota 2 grinding away in the Herald ranks, where every match is a mix of chaos, laughs, clutch moments, and learning from my mistakes, enjoying the game for what it is rather than stressing over wins and losses.
            </p>
          </div>

          {/* Card 3: Reelgood */}
          <div className="project-card">
            <a href="https://reelgood.com/profile/athomft" className="project-img-link" aria-label="View Movie Profile">
              <img 
                src="images/movie-enthusiast.png" 
                alt="Movie and TV show ratings and reviews profile" 
                className="project-card-img" 
                width="495" 
                height="260" 
                loading="lazy" 
              />
            </a>
            <h3>Reelgood Profile</h3>
            <p>
              I’m really into movies and TV shows—I love finding a good series to binge or a great film to get lost in. Whether it’s something exciting, funny, or just easy to watch, I enjoy discovering new stories and talking about them after. It’s just one of my favorite ways to relax and have fun.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider divider--align-social" />

      {/* Social Accounts Section */}
      <section className="social-section">
        <div className="social-accounts-inner">
          <h2>Active social accounts</h2>
          <p>
            These are my official social media and contact accounts. I may not be equally active on every platform, 
            but these links represent the channels I use to share updates and connect. Email remains the most reliable 
            way to contact me directly.
          </p>
        </div>

        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-facebook-f"></i>
              </span>{' '}
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-instagram"></i>
              </span>{' '}
              Instagram
            </a>
          </li>
          <li>
            <a href="contact.html">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-solid fa-envelope"></i>
              </span>{' '}
              Email
            </a>
          </li>
          <li>
            <a href="https://bsky.app/profile/athomft.bsky.social">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-bluesky"></i>
              </span>{' '}
              Bluesky
            </a>
          </li>
          <li>
            <a href="https://mastodon.social/@athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-mastodon"></i>
              </span>{' '}
              Mastodon
            </a>
          </li>
          <li>
            <a href="https://www.threads.com/@athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-threads"></i>
              </span>{' '}
              Threads
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-tiktok"></i>
              </span>{' '}
              TikTok
            </a>
          </li>
          <li>
            <a href="https://twitter.com/athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-x-twitter"></i>
              </span>{' '}
              X (formerly Twitter)
            </a>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};
