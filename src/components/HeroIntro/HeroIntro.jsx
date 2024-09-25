import React, { useState } from 'react'
import './HeroIntro.css'
import { allSmoothies } from '../../utils/smoothiesData'


const HeroIntro = () => {
    const [targetSmoothie, setTargetSmoothie] = useState(allSmoothies[0]);
    const smoothieF = (id)=>{
        const requiredSmoothie = allSmoothies.find((smoothie)=>{
            return smoothie.id === id
        })
        setTargetSmoothie(requiredSmoothie);
        console.log(requiredSmoothie)
    }
    return (
        <div className='HeroIntro'>
            <div className="leftContent">
                <div className="content">
                    <img src='/asset/images/content.png' alt="" />
                </div>
                <div className="itemChoices">
                    {allSmoothies.map((smoothie)=>{
                        return <img onClick={()=> smoothieF(smoothie.id)} key={smoothie.id} src={smoothie.image} alt="" />
                    })}
                </div>
            </div>
            <div className="rightContent">
                <img src={targetSmoothie.image} alt="" />
            </div>
        </div>
    )
}

export default HeroIntro