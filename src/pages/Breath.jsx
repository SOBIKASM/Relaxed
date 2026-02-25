import { useParams } from "react-router-dom";

function Breath() {
  const { category, type } = useParams();

  const techniques = {
    "4-7-8": { inhale: 4, hold: 7, exhale: 8, text: "Relax deeply" },
    box: { inhale: 4, hold: 4, exhale: 4, text: "Stay balanced" },
    extended: { inhale: 4, hold: 0, exhale: 6, text: "Slow your body" },
    bellows: { inhale: 1, hold: 0, exhale: 1, text: "Boost energy" },
    equal: { inhale: 5, hold: 0, exhale: 5, text: "Focus your mind" },
    deep: { inhale: 5, hold: 5, exhale: 5, text: "Expand lungs" },
  };

  const current = techniques[type];

  if (!current) return <h2>Technique not found</h2>;

  return (
    <div>
      <h1>{type.toUpperCase()}</h1>
      <p>{current.text}</p>
      <p>Inhale: {current.inhale}s</p>
      <p>Hold: {current.hold}s</p>
      <p>Exhale: {current.exhale}s</p>
    </div>
  );
}

export default Breath;