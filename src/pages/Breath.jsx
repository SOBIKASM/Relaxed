import { useParams } from "react-router-dom";
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

function Breath() {
  const {  type } = useParams();
  const technique = DATA[type];

  if (!technique) {
    return (
      <div className="error-container">
        <h2>Technique "{type}" not found</h2>
        <p>Please select a technique from the sidebar.</p>
      </div>
    );
  }

  return (
    <div className="breath-container">
      <div className="breath-content">
        <header>
          
          <h1 className="technique-name">
            {type.replace(/-/g, ' ')} Breathing
          </h1>
          <p className="description">{technique.text}</p>
        </header>

        <div className="stats-grid">
          <div>
            <strong>Inhale</strong>
            <p>{technique.inhale}s</p>
          </div>
          {technique.hold > 0 && (
            <div>
              <strong>Hold</strong>
              <p>{technique.hold}s</p>
            </div>
          )}
          <div>
            <strong>Exhale</strong>
            <p>{technique.exhale}s</p>
          </div>
        </div>

        <Visualizer technique={technique} />
      </div>
    </div>
  );
}

export default Breath;