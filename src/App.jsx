import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header className="hero-section">
        <div className="logo-group">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </div>

        <img src={heroImg} className="hero-image" alt="Hero" />

        <h1>
          Build Amazing Apps with <span>React + Vite</span>
        </h1>

        <p>
          Belajar membuat aplikasi modern dengan performa cepat,
          tampilan keren, dan pengalaman coding yang menyenangkan.
        </p>

        <div className="button-group">
          <button
            className="primary-btn"
            onClick={() => setCount(count + 1)}
          >
            🚀 Klik Aku ({count})
          </button>

          <a
            href="https://react.dev/"
            target="_blank"
            className="secondary-btn"
          >
            📘 Learn React
          </a>
        </div>
      </header>

      <section className="features">
        <div className="card">
          <h2>⚡ Super Fast</h2>
          <p>
            Vite memberikan proses development yang sangat cepat.
          </p>
        </div>

        <div className="card">
          <h2>🎨 Modern UI</h2>
          <p>
            Desain aplikasi lebih menarik dan responsif di semua device.
          </p>
        </div>

        <div className="card">
          <h2>📱 Mobile Ready</h2>
          <p>
            Cocok digunakan untuk web maupun pengembangan mobile app.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>Made with ❤️ using React & Vite</p>
      </footer>
    </div>
  )
}

export default App