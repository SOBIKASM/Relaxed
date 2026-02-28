import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Visualizer from "../components/Visualizer";
import "./Breath.css";

const DATA = {
  "4-7-8": { inhale: 4, hold: 7, exhale: 8, text: "Relax deeply and drift off." },
  "box": { inhale: 4, hold: 4, exhale: 4, text: "Reset your nervous system." },
  "extended": { inhale: 4, hold: 0, exhale: 6, text: "Lower your heart rate." },
  "slow": { inhale: 6, hold: 0, exhale: 6, text: "Find your natural rhythm." },
  "bellows": { inhale: 1, hold: 0, exhale: 1, text: "A quick burst of morning energy." },
  "equal": { inhale: 5, hold: 0, exhale: 5, text: "Balance your focus." },
  "deep": { inhale: 5, hold: 5, exhale: 5, text: "Increase oxygen intake." },
  "pursed": { inhale: 2, hold: 0, exhale: 4, text: "Improve ventilation." },
  "segmented": { inhale: 4, hold: 4, exhale: 4, text: "Control your lung expansion." },
};

const BACKGROUNDS = {
  buddha: 'url("../buddha.jpg")',
  lotus: 'url("../lotus.jpg")',
  ocean: 'url("../ocean.jpg")',
  mountain: 'url("../mountain.jpg")',
  forest: 'url("../forest.jpg")',
};

function Breath() {
  const navigate = useNavigate();
  const { category, type, duration, theme } = useParams();
  const technique = DATA[type];

  if (!technique) {
    return <div>Invalid breathing technique</div>;
  }

  const totalSeconds = isNaN(parseInt(duration))
    ? 600
    : parseInt(duration) * 60;

  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isPaused, setIsPaused] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  // Calculate progress percentage
  useEffect(() => {
    const progressPercent = ((totalSeconds - timeLeft) / totalSeconds) * 100;
    setProgress(progressPercent);
  }, [timeLeft, totalSeconds]);

  // Handle timer completion
  useEffect(() => {
    if (timeLeft <= 0 && !sessionComplete) {
      setSessionComplete(true);
      setIsPaused(true); // Pause the visualizer
    }
  }, [timeLeft, sessionComplete]);

  useEffect(() => {
    if (timeLeft <= 0 || isPaused || sessionComplete) return;

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [isPaused, timeLeft, sessionComplete]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!BACKGROUNDS[theme] || !containerRef.current) return;

    const container = containerRef.current;

    container.style.background = `
      ${BACKGROUNDS[theme]},
      linear-gradient(135deg, #f5f7fa 0%, #e9ecf2 100%)
    `;
    container.style.backgroundSize = "cover";
    container.style.backgroundBlendMode = "overlay";
  }, [theme]);

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleNewSession = () => {
    // Reset everything for a new session
    setTimeLeft(totalSeconds);
    setSessionComplete(false);
    setIsPaused(false);
    setProgress(0);
  };

  const handleGoBack = () => {
    // Navigate back to the previous page (technique selection)
    navigate(-1);
  };

  return (
    <div className="breath-container" ref={containerRef}>
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="timer-controls">
        <div className="timer-text">{formatTime(timeLeft)}</div>
        {!sessionComplete && (
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="timer-btn"
          >
            {isPaused ? "▶" : "⏸️"}
          </button>
        )}
      </div>

      {/* Pause Overlay */}
      {isPaused && !sessionComplete && (
        <div className="pause-overlay" onClick={handleResume}>
          <div className="pause-content" onClick={(e) => e.stopPropagation()}>
            <h2>Session Paused</h2>
            <p>Take a moment to breathe naturally</p>
            <button className="resume-btn" onClick={handleResume}>
              Resume Session
            </button>
          </div>
        </div>
      )}

      {/* Session Complete Overlay */}
      {sessionComplete && (
        <div className="session-complete-overlay">
          <div className="session-complete-content">
            <h2>✨ Session Complete ✨</h2>
            <p>Great job! You've completed your breathing session.</p>
            <p className="completion-message">
              {technique.text} Feel refreshed and centered.
            </p>
            <div className="session-complete-actions">
              <button className="new-session-btn" onClick={handleNewSession}>
                Start New Session
              </button>
              <button className="go-back-btn" onClick={handleGoBack}>
                Choose Different Technique
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="breath-content">
        <header>
          <h1 className="technique-name">
            {type.replace(/-/g, " ")} Breathing
          </h1>
          <p className="description">{technique.text}</p>
        </header>

        <Visualizer 
          technique={technique}  
          isPaused={isPaused || sessionComplete}
        />
      </div>
    </div>
  );
}

export default Breath;