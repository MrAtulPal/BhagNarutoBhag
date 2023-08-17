import React from 'react'

//svg
import leftArrow from '../assets/svg/leftArrow.svg'

//images
import naruto from '../assets/narutoImg/narutoStand.gif'
import hinata from '../assets/narutoImg/hinata.gif'
import kakashi from '../assets/narutoImg/kakashi.gif'

export default function ChooseCharacter(props) {
    const handleImageClick = (charterName) => {
        props.setSelectedCharter(charterName);
      };
  return (
    <>
            <div className='game'>
                <img src={leftArrow} onClick={()=>history.back()} alt="left_arrow" className='arrow'/>
                <div style={{color:"white",textAlign:"center"}}>Choose Your favourite Character!</div>
                <div className='character'>
                    <div className='charater_card' onClick={()=>handleImageClick("naruto")}>
                        <img src={naruto} alt=""  className='choose-card' style={{height:"35vh",transform:"translateY(-35px)"}}/>
                    </div>
                    <div className='charater_card' onClick={()=>handleImageClick("hinata")}>
                    <img src={hinata} alt="" className='choose-card' style={{height:"25vh"}}/>
                    </div>
                    <div className='charater_card' onClick={()=>handleImageClick("kakashi")}>
                    <img src={kakashi} alt="" className='choose-card' style={{height:"27vh"}}/>
                    </div>
                </div>
            </div>
    </>
  )
}
