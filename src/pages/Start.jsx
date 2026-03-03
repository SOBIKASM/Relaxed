import React from "react";
import "./Start.css";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  const TECHNIQUES = {
    calm: ["4-7-8", "box"],
    sleep: ["extended", "slow"],
    energy: ["bellows", "equal"],
    lung: ["deep", "pursed", "segmented"],
  };

  const [category, setCategory] = React.useState("");
  const [type, setType] = React.useState("");
  const [duration, setDuration] = React.useState("");

  const handleStart = () => {
    if (!category || !type || !duration) {
      alert("Please select all fields");
      return;
    }

    navigate(`/breath/${category}/${type}/${duration}`);
  };

  return (
    <div className="start-container">
      <div className="start-card">
        <div className="logo-wrapper">
          <img
            src="/logo.png"
            alt="Meditation Buddha Logo"
            className="start-logo"
          />
        </div>
        <h1 className="title-start">Relaxed</h1>
        <p className="subtitle">Your journey to calm starts here.</p>

        <div className="input-group">
          <label>CATEGORY</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setType(""); // reset type when category changes
            }}
          >
            <option value="">Choose category</option>
            <option value="calm">To Calm</option>
            <option value="sleep">To Sleep</option>
            <option value="energy">To Focus</option>
            <option value="lung">For Lungs</option>
          </select>
        </div>

        <div className="input-group">
          <label>TYPE</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            disabled={!category}
          >
            <option value="">Choose type</option>
            {category &&
              TECHNIQUES[category].map((item, index) => (
                <option key={index} value={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)} Breathing
                </option>
              ))}
          </select>
        </div>

        <div className="input-group">
          <label>DURATION</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="">Choose duration</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
          </select>
        </div>
        <button className="start-btn" onClick={handleStart}>
          Start Session
        </button>
      </div>
    </div>
  );
}

export default Start;