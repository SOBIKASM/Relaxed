import { useParams } from "react-router-dom";
import "./Detail.css";
export const TECHNIQUE_DATA = {
  "4-7-8": {
    name: "4-7-8 Breathing",
    category: "calm",
    timings: {
      inhale: 4,
      hold: 7,
      exhale: 8
    },
    steps: [
      "Sit comfortably with your back straight.",
      "Inhale quietly through your nose for 4 seconds.",
      "Hold your breath for 7 seconds.",
      "Exhale slowly through your mouth for 8 seconds.",
      "Repeat for 4 cycles."
    ],
    benefits: [
      "Reduces anxiety",
      "Helps with falling asleep",
      "Calms the nervous system"
    ],
    description: "A relaxing breathing pattern that reduces stress and prepares the body for rest."
  },

  "box": {
    name: "Box Breathing",
    category: "calm",
    timings: {
      inhale: 4,
      hold: 4,
      exhale: 4,
      holdAfterExhale: 4
    },
    steps: [
      "Inhale through your nose for 4 seconds.",
      "Hold your breath for 4 seconds.",
      "Exhale slowly for 4 seconds.",
      "Hold again for 4 seconds.",
      "Repeat for several rounds."
    ],
    benefits: [
      "Improves focus",
      "Reduces stress",
      "Stabilizes breathing rhythm"
    ],
    description: "A balanced breathing method used to regain control and calm the mind."
  },

  "extended": {
    name: "Extended Exhale Breathing",
    category: "sleep",
    timings: {
      inhale: 4,
      hold: 0,
      exhale: 6
    },
    steps: [
      "Inhale gently for 4 seconds.",
      "Exhale slowly for 6 seconds.",
      "Keep your breathing smooth and relaxed."
    ],
    benefits: [
      "Promotes relaxation",
      "Helps prepare for sleep",
      "Reduces heart rate"
    ],
    description: "Focuses on longer exhales to trigger deep relaxation."
  },

  "slow": {
    name: "Slow Breathing",
    category: "sleep",
    timings: {
      inhale: 5,
      hold: 0,
      exhale: 5
    },
    steps: [
      "Inhale slowly for 5 seconds.",
      "Exhale slowly for 5 seconds.",
      "Maintain steady rhythm."
    ],
    benefits: [
      "Improves sleep quality",
      "Reduces mental chatter",
      "Balances oxygen intake"
    ],
    description: "A slow and steady breathing pattern ideal before bedtime."
  },

  "bellows": {
    name: "Bellows Breath",
    category: "energy",
    timings: {
      inhale: 1,
      hold: 0,
      exhale: 1
    },
    steps: [
      "Sit upright.",
      "Inhale and exhale rapidly through your nose.",
      "Keep breaths equal and rhythmic.",
      "Continue for 15–30 seconds."
    ],
    benefits: [
      "Boosts energy",
      "Increases alertness",
      "Warms the body"
    ],
    description: "An energizing breathing technique to wake up your system."
  },

  "equal": {
    name: "Equal Breathing",
    category: "energy",
    timings: {
      inhale: 4,
      hold: 0,
      exhale: 4
    },
    steps: [
      "Inhale for 4 seconds.",
      "Exhale for 4 seconds.",
      "Keep both lengths equal."
    ],
    benefits: [
      "Improves concentration",
      "Balances mind and body",
      "Enhances focus"
    ],
    description: "Simple equal-length breathing to stabilize and focus."
  },

  "deep": {
    name: "Deep Diaphragmatic Breathing",
    category: "lung",
    timings: {
      inhale: 5,
      hold: 2,
      exhale: 6
    },
    steps: [
      "Place one hand on chest, one on belly.",
      "Inhale deeply so your belly rises.",
      "Hold briefly.",
      "Exhale slowly."
    ],
    benefits: [
      "Strengthens lungs",
      "Improves oxygen exchange",
      "Reduces shallow breathing"
    ],
    description: "A deep breathing technique to improve lung capacity."
  },

  "pursed": {
    name: "Pursed Lip Breathing",
    category: "lung",
    timings: {
      inhale: 2,
      hold: 0,
      exhale: 4
    },
    steps: [
      "Inhale through nose for 2 seconds.",
      "Purse your lips like blowing a candle.",
      "Exhale slowly for 4 seconds."
    ],
    benefits: [
      "Helps with shortness of breath",
      "Improves lung efficiency",
      "Supports COPD management"
    ],
    description: "A technique that keeps airways open longer for better airflow."
  },

  "segmented": {
    name: "Segmented Breathing",
    category: "lung",
    timings: {
      inhale: 4,
      hold: 4,
      exhale: 6
    },
    steps: [
      "Inhale in small segments.",
      "Hold briefly.",
      "Exhale slowly and fully."
    ],
    benefits: [
      "Improves breath awareness",
      "Enhances lung control",
      "Builds respiratory strength"
    ],
    description: "Breaks inhalation into segments to improve lung control."
  }
};
function Detail() {
  const { type } = useParams();
  const data = TECHNIQUE_DATA[type];

  if (!data) {
    return <div className="detail-container">Technique not found</div>;
  }

  return (
    <div className="detail-container">
      <div className="detail-card">

        <h1 className="detail-title">{data.name}</h1>
        <p className="detail-description">{data.description}</p>

        {/* Timings */}
        <div className="timing-box">
          <h3>Breathing Pattern</h3>
          <div className="timing-grid">
            <div>
              <span>Inhale</span>
              <strong>{data.timings.inhale}s</strong>
            </div>
            {data.timings.hold > 0 && (
              <div>
                <span>Hold</span>
                <strong>{data.timings.hold}s</strong>
              </div>
            )}
            <div>
              <span>Exhale</span>
              <strong>{data.timings.exhale}s</strong>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="section">
          <h3>How to Practice</h3>
          <ul>
            {data.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="section">
          <h3>Benefits</h3>
          <ul className="benefits">
            {data.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Detail;