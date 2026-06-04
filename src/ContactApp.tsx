import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const ContactApp: React.FC = () => {
  return (
    <div className="container">
      <Header currentPage="contact" />
      
      <hr className="divider" />

      <section className="contact-page">
        <h1 className="contact-page-title">Contact</h1>
        <p className="contact-page-intro">
          Hello! Feel free to reach out with questions, work inquiries, or just to say hello.
        </p>
        <p className="contact-page-intro">
          You can find my social media accounts listed on{' '}
          <a href="index.html">my homepage</a>, though I only check messages there occasionally. 
          Email is always the best way to contact me.
        </p>
        <p className="contact-page-email">
          <a href="mailto:atho.mft@gmail.com">atho.mft@gmail.com</a>
        </p>
      </section>

      <Footer />
    </div>
  );
};
