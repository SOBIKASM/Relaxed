import './Sidebar.css'
import { useState } from 'react';

function Sidebar() {
  const [showTechniques, setShowTechniques] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const [showCalm, setShowCalm] = useState(false);
  const [showSleep, setShowSleep] = useState(false);
  const [showEnergy, setShowEnergy] = useState(false);
  const [showLung, setShowLung] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className='sidebar'>
      <p className='title'>Relaxed</p>
      <div className='nav'>
        <a href='home'>Home</a>
        <a href="techniques"
          onClick={(e) => {
            e.preventDefault();
            setShowTechniques(!showTechniques);
          }}
          className={showTechniques ? 'active-link' : 'link'}>
          Techniques {showTechniques ? '▴' : '▾'}
        </a>
        {showTechniques && (
          <div className='sub-nav'>
            <a href='calm'
              onClick={(e) => {
                e.preventDefault();
                setShowCalm(!showCalm);
              }} className={showCalm ? 'active-sub-link' : 'sub-link'}>To calm{showCalm ? '▴' : '▾'}</a>
            {showCalm && (
              <div className='sub-sub-nav'>
                <a href='4-7-8'>4-7-8</a>
                <a href='box'>Box Breathing</a>
              </div>
            )}
            <a href='sleep'
              onClick={(e) => {
                e.preventDefault();
                setShowSleep(!showSleep);
              }} className={showSleep ? 'active-sub-link' : 'sub-link'}>Sleep support{showSleep ? '▴' : '▾'}</a>
            {showSleep && (
              <div className='sub-sub-nav'>
                <a href='extended'>Extended Breathing</a>
                <a href='slow'>Slow Breathing</a>
              </div>
            )}
            <a href='energy'
              onClick={(e) => {
                e.preventDefault();
                setShowEnergy(!showEnergy);
              }} className={showEnergy ? 'active-sub-link' : 'sub-link'}>Energy and focus{showEnergy ? '▴' : '▾'}</a>
            {showEnergy && (
              <div className='sub-sub-nav'>
                <a href='bellows'>Bellows</a>
                <a href='equal'>Equal Breathing</a>
              </div>
            )}
            <a href='lung'
              onClick={(e) => {
                e.preventDefault();
                setShowLung(!showLung);
              }} className={showLung ? 'active-sub-link' : 'sub-link'}>Lung capacity{showLung ? '▴' : '▾'}</a>
            {showLung && (
              <div className='sub-sub-nav'>
                <a href='deep'>Deep lungs</a>
                <a href="pursed">Pursed lip breathing</a>
                <a href='segmented'>Segmented Breathing</a>
              </div>
            )}
          </div>)}

        <a href='color'>Color</a>
        <a href="color" onClick={(e) => {
          e.preventDefault();
          setShowThemes(!showThemes);
        }} className={showTechniques ? 'active-link' : 'link'}>Themes{showThemes ? '▴' : '▾'}</a>
        {showThemes && (
          <div className='sub-nav'>
            <a href="#">Ocean</a>
            <a href="#">Budha</a>
            <a href="#">Lotus</a>
            <a href="#">Garden</a>
          </div>
        )}

      </div>

    </div>
  )
}

export default Sidebar