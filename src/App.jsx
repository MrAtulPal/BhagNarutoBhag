import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import "./App.css";

import hero from "./assets/narutoImg/hinata.gif";
import viallan from "./assets/villans/danzo.gif";
import Logo from "./assets/narutoImg/naruto.png"

function App() {

  // let potrait = window.matchMedia("(orientation:portrait)").matches
  // if(potrait){
  //   alert("Turn to landscape mode")
  // }

  let heroRef = useRef(null);
  let villanRef = useRef(null);
  let highScore = useRef(null);
  let Score=useRef(null);


  const [jump, setJump] = useState(false);
  const [ispause, setIspause] = useState(false);
  let [score,setScore] = useState(0);

  useEffect(() => {
    const handleGameLogic = () => {
      if(ispause === false){
        setScore(score)
      }else if(ispause===true){
        setScore(score++)
      }

      let Hero = heroRef.current;
      let Villan = villanRef.current;

      let Hero_top = parseInt(
        window.getComputedStyle(Hero).getPropertyValue("top")
      );
      let villan_left = parseInt(
        window.getComputedStyle(Villan).getPropertyValue("left")
      );

      if ( villan_left < 0 & villan_left > -50 &  Hero_top > 300) {
        Swal.fire("Game Over");
        // console.log("over")
        setScore(score)
        setIspause(false)
      }


    };
    
    const handleJumpTimeout = () => {
      if(jump === true){
        setJump(false);
      }
    };

    const gameInterval = setInterval(handleGameLogic, 20);

    setTimeout(handleJumpTimeout, 1000);

    window.addEventListener("keydown", jumpHero); // Attach keydown event listener

    return () => {
      clearInterval(gameInterval);
      // window.removeEventListener("keydown", jumpHero); // Remove the keydown event listener on component unmount
    };
  }, [jump,ispause]);

  const jumpHero = (e) => {
    if ( e.key === "ArrowUp") {
      if (jump === false) {
        setJump(!jump);
      }
    }
  };

  return (
    <>
      <div id="game" >
        <div className="top"> 
          <img src={Logo} alt="logo" />
          <button className="play" onClick={() => {setIspause(!ispause); setScore(0)}}>
            {ispause ? "Pause" : "Play"}
          </button>
          <div>
            {/* <div ref={highScore}>
            HighScore :{score}
            </div> */}
            <div ref={Score}>
            Score : {score}
            </div>
          </div>
        </div>

        <div
          id="hero"
          className={`${jump ? "jump-animation" : ""}`}
          ref={heroRef}
          onClick={()=>setJump(!jump)}
        >
          <img src={hero} alt="" />
        </div>
        <div
          id="villan"
          className={`${ispause ? "villan-animation" : ""}`}
          ref={villanRef}
        >
          <img src={viallan} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
