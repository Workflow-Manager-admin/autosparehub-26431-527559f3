import React from 'react';
import './App.css';
import ProductCatalog from './components/ProductCatalog';
import AppReview from './components/AppReview';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      {/* Header / Top Navigation */}
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <div className="logo" style={{ gap: '10px' }}>
              <span className="logo-symbol" style={{ fontSize: '2rem' }}>🚗</span>
              <span>AutoSpareHub</span>
            </div>
            {/* In a full app, account/cart links would go here */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" className="btn" style={{ backgroundColor: 'var(--accent)' }}>Sign In</a>
              <a href="#" className="btn" style={{ backgroundColor: 'var(--primary)' }}>Cart</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Section */}
      <main style={{ flex: 1, paddingTop: 90, paddingBottom: 40 }}>
        <div className="container">
          <section className="hero" style={{ paddingTop: '50px' }}>
            <div className="subtitle">Your Trusted Car Spare Parts Store</div>
            <h1 className="title">Welcome to AutoSpareHub</h1>
            <div className="description">
              Discover, search, and purchase quality car spares with confidence. Fast shipping and expert support – always at your service.
            </div>
            <form style={{ width: '100%', maxWidth: 430, margin: '0 auto', marginTop: 16, display: 'flex', gap: 0, background: '#fff', borderRadius: 6, boxShadow: '0 1px 4px 0 rgba(26,35,126,0.06)', border: '1px solid var(--border-color)' }}>
              <input
                type="text"
                placeholder="Search for car spares…"
                style={{
                  flex: 1,
                  border: 'none',
                  borderRadius: '6px 0 0 6px',
                  padding: '14px',
                  fontSize: '1rem',
                  outline: 'none',
                  background: 'transparent',
                  color: 'var(--text-color)',
                }}
              />
              <button type="submit" className="btn btn-large" style={{ borderRadius: '0 6px 6px 0', margin: 0 }}>
                Search
              </button>
            </form>
            {/* Call to Action Button */}
            <a href="#" className="btn btn-large" style={{ marginTop: 24, backgroundColor: 'var(--accent)' }}>
              Shop Featured Spares
            </a>
          </section>
          {/* Product Catalog Section */}
          <ProductCatalog />
          {/* App-Level Reviews Section */}
          <AppReview />
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        marginTop: 'auto',
        background: 'var(--navbar-bg)',
        borderTop: '1px solid var(--navbar-border)',
        padding: '24px 0',
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        textAlign: 'center',
      }}>
        <div className="container">
          <span>
            &copy; {new Date().getFullYear()} AutoSpareHub &middot; Crafted with <span style={{ color: 'var(--accent)', fontWeight: 700 }}>passion</span> for car enthusiasts.
          </span>
        </div>
      </footer>
    </div>
  );
}

// PUBLIC_INTERFACE
export default App;