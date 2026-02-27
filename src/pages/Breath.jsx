import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
  const containerRef = useRef(null);

  useEffect(() => {
    if (timeLeft <= 0 || isPaused) return;

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [isPaused, timeLeft]);

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

  return (
    <div className="breath-container" ref={containerRef}>
      <div className="timer-controls">
        <div className="timer-text">{formatTime(timeLeft)}</div>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="timer-btn"
        >
          {isPaused ? "▶" : "⏸️"}
        </button>
      </div>

      <div className="breath-content">
        <header>
          <h1 className="technique-name">
            {type.replace(/-/g, " ")} Breathing
          </h1>
          <p className="description">{technique.text}</p>
        </header>

        <Visualizer technique={technique}  isPaused={isPaused}/>
      </div>
    </div>
  );
}

export default Breath;