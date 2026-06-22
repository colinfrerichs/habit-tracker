import { useState } from "react";

import "./GlobalStreak.css";

const GlobalStreak = ({ streak }: { streak: number }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="global-streak-container">
      <h2>Streak {streak} days</h2>
      <div className="streak-info">
        <span
          className="global-streak-hint"
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
        >
          <button
            type="button"
            aria-describedby="streak-hint-text"
            onFocus={() => setIsTooltipVisible(true)}
            onBlur={() => setIsTooltipVisible(false)}
          >
            ?
          </button>
          <span
            role="tooltip"
            id="streak-hint-text"
            className="streak-popover"
            hidden={!isTooltipVisible}
          >
            Counts days where at least one habit was completed.
          </span>
        </span>
      </div>
    </div>
  );
};

export default GlobalStreak;
