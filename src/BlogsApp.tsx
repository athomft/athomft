import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import postsData from '../blogs/posts.json';

interface Post {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  body: string;
}

const posts = postsData as Post[];

const formatDate = (iso: string) => {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  const m = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return m[d.getUTCMonth()] + ' ' + d.getUTCDate() + ', ' + d.getUTCFullYear();
};

export const BlogsApp: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash.replace(/^#/, ''));

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.replace(/^#/, ''));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activePostIndex = posts.findIndex(p => p.slug === hash);
  const activePost = activePostIndex >= 0 ? posts[activePostIndex] : null;

  useEffect(() => {
    if (activePost) {
      document.title = `${activePost.title} « Atho' O Atho'`;
    } else {
      document.title = "Blogs « Atho' O Atho'";
    }
  }, [activePost]);

  const renderContent = () => {
    if (activePost) {
      const prev = activePostIndex > 0 ? posts[activePostIndex - 1] : null;
      const next = activePostIndex < posts.length - 1 ? posts[activePostIndex + 1] : null;

      const bodyParagraphs = activePost.body.split(/\n\n/);

      return (
        <div style={{ marginTop: '24px' }}>
          {/* Navigation Bar */}
          <div className="blog-post-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', fontSize: '0.95rem' }}>
            <span>
              {prev ? (
                <a href={`blogs.html#${prev.slug}`}>Previous</a>
              ) : (
                <span style={{ color: 'var(--text-muted)' }}>Previous</span>
              )}
            </span>
            <span>
              <a href="blogs.html">Index</a>
            </span>
            <span>
              {next ? (
                <a href={`blogs.html#${next.slug}`}>Next</a>
              ) : (
                <span style={{ color: 'var(--text-muted)' }}>Next</span>
              )}
            </span>
          </div>

          <h1 className="contact-page-title">{activePost.title}</h1>
          <p className="contact-page-intro" style={{ marginBottom: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            {formatDate(activePost.date)}
          </p>

          <div style={{ marginTop: '20px' }}>
            {bodyParagraphs.map((p, idx) => (
              <p key={idx} className="contact-page-intro">
                {p}
              </p>
            ))}
          </div>

          <p className="contact-page-intro" style={{ marginTop: '28px' }}>
            <a href="blogs.html">← Back to Blogs</a>
          </p>
        </div>
      );
    }

    // Default Index view
    return (
      <>
        <h1 className="contact-page-title">Blogs</h1>
        <p className="contact-page-intro">
          Good things I find online — videos, links, writing, and experiments.
        </p>

        <ul className="post-list">
          {posts.map((p) => (
            <li key={p.slug}>
              <p className="contact-page-intro" style={{ fontWeight: 500, marginBottom: '4px' }}>
                <a href={`blogs.html#${p.slug}`}>
                  {formatDate(p.date)}: {p.title}
                </a>
              </p>
              <p className="contact-page-intro" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '4px', marginBottom: '16px' }}>
                {p.excerpt}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="container">
      <Header currentPage="blogs" />
      <hr className="divider" />
      <section className="contact-page">
        <div id="blogsContent">
          {renderContent()}
        </div>
      </section>
      <Footer />
    </div>
  );
};
