import React, { useEffect, useState, useRef } from 'react';
import './Visualizer.css';
import Instruction from './Instruction';

function Visualizer({ technique,isPaused }) {
  const [phase, setPhase] = useState('inhale');
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(technique.inhale);
  const phaseStartRef = useRef(Date.now());
  const phaseDurationRef = useRef(technique.inhale);
  const phaseRef = useRef('inhale');
  const rafRef = useRef();

  const getTextScale = () => {
    switch (phaseRef.current) {
      case 'inhale':
        return 0.8 + (progress * 0.4);   // grow
      case 'hold':
        return 1.2;                      // stay
      case 'exhale':
        return 1.2 - (progress * 0.4);   // shrink
      default:
        return 1;
    }
  };
  // Calculate scale based on phase and progress with smooth transitions
  const getScale = () => {
    switch (phaseRef.current) {
      case 'inhale':
        // Smooth scale from 1 to 1.5 during inhale
        return 1 + (progress * 0.5);
      case 'hold':
        // Stay at 1.5 during hold
        return 1.5;
      case 'exhale':
        // Smooth scale from 1.5 to 1 during exhale
        return 1.5 - (progress * 0.5);
      default:
        return 1;
    }
  };

useEffect(() => {
  if (isPaused) {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    return;
  }

  const updateTimer = () => {
    const now = Date.now();
    const elapsed = (now - phaseStartRef.current) / 1000;
    const newProgress = Math.min(elapsed / phaseDurationRef.current, 1);

    setProgress(newProgress);
    setTimeLeft(Math.max(0, phaseDurationRef.current - elapsed));

    if (elapsed >= phaseDurationRef.current) {
      if (phaseRef.current === 'inhale') {
        if (technique.hold > 0) {
          phaseRef.current = 'hold';
          setPhase('hold');
          phaseDurationRef.current = technique.hold;
        } else {
          phaseRef.current = 'exhale';
          setPhase('exhale');
          phaseDurationRef.current = technique.exhale;
        }
      } else if (phaseRef.current === 'hold') {
        phaseRef.current = 'exhale';
        setPhase('exhale');
        phaseDurationRef.current = technique.exhale;
      } else {
        phaseRef.current = 'inhale';
        setPhase('inhale');
        phaseDurationRef.current = technique.inhale;
      }

      phaseStartRef.current = now;
      setProgress(0);
    }

    rafRef.current = requestAnimationFrame(updateTimer);
  };

  rafRef.current = requestAnimationFrame(updateTimer);

  return () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  };
}, [technique, isPaused]);

  return (
    <div className="visualizer-container">
      <div className="circle-wrapper">
        <div
          className="breathing-circle"
          style={{
            transform: `scale(${getScale()})`,
            transition: 'transform 0.1s linear',
            background: phase === 'inhale'
              ? 'radial-gradient(circle, #A8D5FF, #7FB4D9)'
              : phase === 'hold'
                ? 'radial-gradient(circle, #B8E0D4, #8FC5B5)'
                : 'radial-gradient(circle, #D4B8E0, #B58FC5)'
          }}
        />
        <div
          className="phase-text"
          style={{
            transform: `scale(${getTextScale()})`,
            transition: 'transform 0.1s linear'
          }}
        >
          {phase}
        </div>
      </div>

      <div className="timer" >{Math.ceil(timeLeft)}s</div>
      <Instruction phase={phase} progress={progress} />
    </div>
  );
}

export default Visualizer;