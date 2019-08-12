//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [secondTens, setSecondTens] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [minuteTens, setMinuteTens] = useState(0);

  const teamIncrement = (team, amount) => {
    if (team === "LIONS") {
      setHomeScore(homeScore + amount);
    }
    else {
      setAwayScore(awayScore + amount);
    }
  };



  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds === 9) {
        if (secondTens === 5) {
          if (minutes === 9) {
            setMinuteTens(minuteTens + 1);
            setMinutes(0);
            setSeconds(0);
            setSecondTens(0);
            clearInterval(interval);
          }
          else {
            setMinutes(minutes + 1);
            setSeconds(0);
            setSecondTens(0);
            clearInterval(interval);
          }
        }
        else {
          setSecondTens(secondTens + 1);
          setSeconds(0);
          clearInterval(interval);
        }
      }
      else {
        setSeconds(seconds + 1);
        clearInterval(interval);
      }
    }, 1000);
  });

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{minuteTens}{minutes}:{secondTens}{seconds}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => teamIncrement("LIONS", 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => teamIncrement("LIONS", 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => teamIncrement("TIGERS", 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => teamIncrement("TIGERS", 3)}>Away Field Goal</button>
        </div>
      </section>
    </div >
  );
}

export default App;