import React, { useEffect, useState } from 'react';
import './Instruction.css';
import { useTheme } from '../context/ThemeContext';

const BREATH_PHASES = {
  inhale: {
    start: "Breathe in deeply",
    mid: "Fill your lungs...",
    end: "Almost full"
  },
  hold: {
    start: "Hold that breath",
    mid: "Find the stillness",
    end: "Just a moment more"
  },
  exhale: {
    start: "Let it all out",
    mid: "Releasing tension...",
    end: "Good..."
  }
};

function Instruction({ phase, progress }) {
  const { theme } = useTheme();
  const [text, setText] = useState("");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const current = BREATH_PHASES[phase] || BREATH_PHASES.inhale;
    if (progress < 0.3) {
      setText(current.start);
    } else if (progress < 0.8) {
      setText(current.mid);
    } else {
      setText(current.end);
    }
    
    setOpacity(progress > 0.95 ? 0 : 1);
  }, [phase, progress]);

  return (
    <div className="instruction-container" style={{ opacity, transition: 'opacity 0.4s ease-in-out' }}>
      <h2 
        className="instruction-text"
        style={{
          color: theme === 'dark' ? 'var(--instruction-color)' : 'var(--text-heading)'
        }}
      >
        {text}
      </h2>
    </div>
  );
}

export default Instruction;