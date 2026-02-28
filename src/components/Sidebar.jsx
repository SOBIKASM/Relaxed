import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

const MENU_DATA = {
  techniques: {
    label: 'Techniques',
    subCategories: {
      calm: { label: 'To Calm', items: ['4-7-8', 'box'] },
      sleep: { label: 'To Sleep', items: ['extended', 'slow'] },
      energy: { label: 'To Focus', items: ['bellows', 'equal'] },
      lung: { label: 'For lungs', items: ['deep', 'pursed', 'segmented'] }
    }
  }
};

const THEMES = ['Buddha', 'Lotus', 'Ocean', 'Mountain', 'Forest'];

function Sidebar() {
  const [openSection, setOpenSection] = useState('techniques');
  const [openSub, setOpenSub] = useState(null);
  const [activeTheme, setActiveTheme] = useState('Buddha'); // Default to Buddha

  return (
    <div className='sidebar'>
      <p className='title'>Relaxed</p>
      <nav className='nav'>
        
        <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''} end>
          Start
        </NavLink>
        {/* Techniques Section */}
        <div className='nav-group'>
          <button 
            className={`link-btn ${openSection === 'techniques' ? 'active' : ''}`}
            onClick={() => setOpenSection(openSection === 'techniques' ? null : 'techniques')}
          >
            Techniques <span>{openSection === 'techniques' ? '▴' : '▾'}</span>
          </button>

          {openSection === 'techniques' && (
            <div className='sub-nav'>
              {Object.entries(MENU_DATA.techniques.subCategories).map(([key, value]) => (
                <div key={key}>
                  <button 
                    className={`sub-link-btn ${openSub === key ? 'active' : ''}`}
                    onClick={() => setOpenSub(openSub === key ? null : key)}
                  >
                    {value.label} <span>{openSub === key ? '▴' : '▾'}</span>
                  </button>
                  
                  {openSub === key && (
                    <div className='sub-sub-nav'>
                      {value.items.map(type => (
                        <NavLink 
                          key={type} 
                          to={`/detail/${type}`}
                          className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                          {type.replace(/-/g, ' ')} Breathing
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <NavLink to='/more' className={({ isActive }) => isActive ? 'active-link' : ''} end>
          More
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;