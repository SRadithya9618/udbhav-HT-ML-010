import { useEffect, useState } from 'react'
import './App.css'

const eventHighlights = [
  { label: 'Date', value: 'July 14-16, 2024' },
  { label: 'Location', value: 'HealthTech Hub · New York & virtual' },
  { label: 'Prizes', value: '$5,000+ & mentorship' }
]

function App() {
  const [status, setStatus] = useState('Checking backend…')

  useEffect(() => {
    fetch('http://localhost:5000/api/status')
      .then((res) => res.json())
      .then((data) => {
        if (data?.message) {
          setStatus(data.message)
        } else {
          setStatus('Backend reached but no payload received.')
        }
      })
      .catch(() => {
        setStatus('Unable to reach backend on port 5000.')
      })
  }, [])

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Cardio360 · Health AI</p>
        <h1>Heartbeat insights for everyone.</h1>
        <p className="lead">
          React on port 3000 talking to an Express backend on port 5000. The backend replies from <code>/api/status</code>.
        </p>
        <div className="status-chip">{status}</div>
        <div className="info-grid">
          <article>
            <h3>Hackathon mission</h3>
            <p>
              Build machine learning tools to predict and prevent heart attacks with explainable AI, healthcare data science feedback loops,
              and responsible, patient-first design.
            </p>
          </article>
          <article>
            <h3>Highlights</h3>
            <ul>
              {eventHighlights.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Next steps</h3>
            <p>Spin up the backend (`npm run dev`), then run the frontend (`npm start`). The status chip will turn green when both sides are live.</p>
          </article>
        </div>
        <form className="register-form" id="register">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Join the Cardio360 hackathon</button>
        </form>
      </section>
    </main>
  )
}

export default App
