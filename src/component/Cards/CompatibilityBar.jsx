import React from "react";

function CompatibilityBar({ compatibility }) {
  return (
    <div className="compatibility-container">
      <h5 className="compatibility-title">
        Compatibilitate
        <br />
        <span className="compatibility-percentage">{compatibility}%</span>
      </h5>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${compatibility}%` }}
        ></div>
      </div>
    </div>
  );
}

export default CompatibilityBar;
