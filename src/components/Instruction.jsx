import React, { useEffect, useState } from 'react';
import './Instruction.css';

const BREATH_PHASES = {
  inhale: {
    start: "Breathe in deeply",
    mid: "Fill your lungs...",
    end: "Almost full",
    color: "#4A90E2"
  },
  hold: {
    start: "Hold that breath",
    mid: "Find the stillness",
    end: "Just a moment more",
    color: "#F5A623"
  },
  exhale: {
    start: "Let it all out",
    mid: "Releasing tension...",
    end: "Good...",
    color: "#50E3C2"
  }
};

function Instruction({phase, progress}) {
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
      <h2 className="instruction-text">{text}</h2>
    </div>
  )
}

export default Instruction;