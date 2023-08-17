import { Link,useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const navigateToCharacter =()=>{
        navigate('/BhagNarutoBhag/chooseCharacter')
    }
  return (
    <>
      <div className="game">
        <div className="home">
          <Link className="home_start-game " to="/BhagNarutoBhag/game">
            Start Game
          </Link>
          <div onClick={navigateToCharacter}>Choose your Character</div>
          <Link to="/BhagNarutoBhag/aboutUs">
            About Us 
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
