import React from 'react';
import './Start.css';

function Start() {
  const TECHNIQUES = {
    calm: ['4-7-8', 'box'],
    sleep: ['extended', 'slow'],
    energy: ['bellows', 'equal'],
    lung: ['deep', 'pursed', 'segmented']
  };

  const [category, setCategory] = React.useState('');
  const [type, setType] = React.useState('');
  const [duration, setDuration] = React.useState('extended');
  const [theme, setTheme] = React.useState('buddha');

  return (
    <div className="start-container">
      <div className="start-card">
        <h1 className="title-start">Relaxed</h1>
        <p className="subtitle">Your journey to calm starts here.</p>
        
        <form className="start-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="category-select">CATEGORY</label>
            <select 
              id="category-select" 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose category</option>
              <option value="calm">To Calm</option>
              <option value="sleep">To Sleep</option>
              <option value="energy">To Focus</option>
              <option value="lung">For Lungs</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="type-select">TYPE</label>
            <select 
              id="type-select" 
              value={type}
              onChange={(e) => setType(e.target.value)}
              disabled={!category}
            >
              <option value="">Choose type</option>
              {TECHNIQUES[category] && TECHNIQUES[category].map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="duration-select">DURATION</label>
            <select 
              id="duration-select" 
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="extended">Extended</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
              <option value="20">20 minutes</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="theme-select">THEME</label>
            <select 
              id="theme-select" 
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="buddha">Buddha</option>
              <option value="lotus">Lotus</option>
              <option value="ocean">Ocean</option>
              <option value="mountain">Mountain</option>
              <option value="forest">Forest</option>
            </select>
          </div>

          <button type="submit" className="start-btn">Start Session</button>
        </form>
      </div>
    </div>
  );
}

export default Start;