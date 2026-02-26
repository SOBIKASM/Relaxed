import './More.css';
// If you want to use icons for the footer, I recommend: npm install lucide-react
import { Instagram, Linkedin, Mail } from 'lucide-react'; 

function More() {
  return (
    <div className='home-container'>
      {/* Hero Section */}
      <header className='hero'>
        <h1>Relaxed</h1>
        <p id='subheading'>Come here and breathe</p> 
      </header>

      {/* Key Message */}
      <section className='take-away'>
        <p>Breathing techniques can reduce stress, improve sleep and performance, and ease anxiety by bringing awareness to your breath.</p>
      </section>

      {/* About Us */}
      <section className='intro'>
        <h2>Who are we?</h2>
        <p>
          Anxiety is a journey many of us walk—you aren't alone. 
          We built this because we’ve been there too, and we believe everyone 
          deserves accessible tools to find their calm.
        </p>
      </section>

      {/* Benefits List */}
      <section className='why'>
        <h2>Why it matters?</h2>
        <ol>
          <li>Regulates heart rate variability (HRV)</li>
          <li>Supports healthy blood pressure levels</li>
          <li>Improves oxygen-carbon dioxide balance</li>
          <li>Reduces cortisol and stress hormone activation</li>
          <li>Activates the parasympathetic nervous system</li>
        </ol>
      </section>

      {/* Breathing Types */}
      <section className='types'>
        <h2>Breathing Techniques</h2>
        
        <div className="technique-group">
          <h3>For Stress & Anxiety</h3>
          <ul>
            <li>Diaphragmatic breathing</li>
            <li>Box breathing</li>
            <li>4-7-8 breathing</li>
          </ul>
        </div>

        <div className="technique-group">
          <h3>For Sleep and Balance</h3>
          <ul>
            <li>Extended exhale breathing</li>
            <li>Slow breathing</li>
          </ul>
        </div>

        <div className="technique-group">
          <h3>For Energy</h3>
          <ul>
            <li>Kapalbhati</li>
            <li>Wim Hof-style breathing</li>
          </ul>
        </div>
        <div className="technique-group">
          <h3>For Lung capacity</h3>
          <ul>
            <li>Deep Lungs</li>
            <li>Pursed lip breathing</li>
            <li>Segmented Breathing</li>
          </ul>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className='benefits'>
        <h2>Benefits</h2>
        <div className="benefit-card">
          <h3>On the Body</h3>
          <p>The benefits of breathwork extend to every body system. Regular practice improves the autonomic nervous system and increases cognitive functioning through better oxygen supply.</p>
        </div>
        <div className="benefit-card">
          <h3>On Emotions</h3>
          <p>A 2023 review showed breathwork has a greater impact on calming stress than non-breathwork techniques, making it a powerful tool for coping with intense emotions.</p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className='disclaimer'>
        <h2>Disclaimer</h2>
        
        <p>Consult a professional if you have:</p>
        <ul>
          <li>Severe asthma</li>
          <li>Cardiac conditions</li>
          <li>Pregnancy</li>
          <li>Panic disorder</li>
          <p>Not suitable for medical care.</p>
        </ul>
      </section>

      {/* Quote */}
      <div className='end-away'>
        <blockquote>“Your breath is your most accessible therapy. Learn to use it.”</blockquote>
      </div>

      {/* Footer */}
      <footer className='footer'>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
          <a href="mailto:sobikasm@gmail.com"><Mail size={20} /></a>
        </div>
        <p>© 2026 Relaxed. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default More;