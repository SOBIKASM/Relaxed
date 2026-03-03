import React, { useEffect, useState, useRef } from 'react';
import './Visualizer.css';
import Instruction from './Instruction';
import { useTheme } from '../context/ThemeContext';

function Visualizer({ technique, isPaused }) {
  const { theme } = useTheme();
  const [phase, setPhase] = useState('inhale');
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(technique.inhale);

  const phaseStartRef = useRef(Date.now());
  const phaseDurationRef = useRef(technique.inhale);
  const phaseRef = useRef('inhale');
  const rafRef = useRef();
useEffect(() => {
  console.log("PHASE STATE:", phase);
}, [phase]);
  const getTextScale = () => {
    switch (phaseRef.current) {
      case 'inhale':
        return 0.8 + (progress * 0.4);
      case 'hold':
        return 1.2;
      case 'exhale':
        return 1.2 - (progress * 0.4);
      default:
        return 1;
    }
  };

  const getScale = () => {
    switch (phaseRef.current) {
      case 'inhale':
        return 1 + (progress * 0.5);
      case 'hold':
        return 1.5;
      case 'exhale':
        return 1.5 - (progress * 0.5);
      default:
        return 1;
    }
  };

  useEffect(() => {
    if (isPaused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
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
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [technique, isPaused]);

  return (
    <div className="visualizer-container">
      <div className="circle-wrapper">
        <div
          className={`breathing-circle ${phase}`}
          style={{
            transform: `scale(${getScale()})`,
            transition: 'transform 0.1s linear'
          }}
        />

        <div
          className="phase-text"
          style={{
            transform: `translate(-50%, -50%) scale(${getTextScale()})`,
            transition: 'transform 0.1s linear',
            background: theme === 'dark'
              ? 'none'
              : 'var(--phase-text-gradient)',

            backgroundClip: theme === 'dark' ? 'initial' : 'text',
            WebkitBackgroundClip: theme === 'dark' ? 'initial' : 'text',
            WebkitTextFillColor: theme === 'dark'
              ? 'var(--phase-text-color)'
              : 'transparent',
            color: theme === 'dark'
              ? 'var(--phase-text-color)'
              : 'transparent'
          }}
        >
          {phase}
        </div>
      </div>

      <div
        className="timer"
        style={{
          background: theme === 'dark'
            ? 'none'
            : 'var(--phase-text-gradient)',

          backgroundClip: theme === 'dark' ? 'initial' : 'text',
          WebkitBackgroundClip: theme === 'dark' ? 'initial' : 'text',
          WebkitTextFillColor: theme === 'dark'
            ? 'var(--timer-color)'
            : 'transparent',
          color: theme === 'dark'
            ? 'var(--timer-color)'
            : 'transparent'
        }}
      >
        {Math.ceil(timeLeft)}s
      </div>

      <Instruction phase={phase} progress={progress} />
    </div>
  );
}

export default Visualizer;