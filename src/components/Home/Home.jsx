import React, { useState } from 'react'
import './Home.css'
import { allSmoothies } from '../../utils/smoothiesData'

const Home = () => {
    const [targetSmoothie, setTargetSmoothie] = useState(allSmoothies[0]);
    const smoothieF = (id)=>{
        const requiredSmoothie = allSmoothies.find((smoothie)=>{
            return smoothie.id === id
        })
        setTargetSmoothie(requiredSmoothie);
        console.log(requiredSmoothie)
    }
    return (
        <div className='Home' style={{backgroundImage:`url(${targetSmoothie.bg_image})`}}>
            {/* =============== header ================ */}
            <div className='Header'>
                <div className="logo">
                    <img src="/asset/images/logo.png" alt="" />
                </div>

                <div className="anchors">
                    <a style={{fontWeight:'900'}} href="">Home</a>
                    <a href="">Specialities</a>
                    <a href="">About</a>
                    <a href="">Contact us</a>
                </div>
            </div>

            {/* =============== hero section ============ */}
            <div className='HeroIntro'>
            <div className="leftContent">
                <div className="content">
                    <img src='/asset/images/content.png' alt="" />
                </div>
                <div className="itemChoices">
                    {allSmoothies.map((smoothie)=>{
                        return (
                        <div>
                            <img onClick={()=> smoothieF(smoothie.id)} key={smoothie.id} src={smoothie.image} alt="" />
                            <div className={targetSmoothie.id === smoothie.id ? 'activeLine' : 'inactive'}></div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="rightContent">
                <img src='/asset/images/bowl_group2.png'  /*targetSmoothie.image*/ style={{rotate:`${targetSmoothie.rotate}`}} alt="" />
            </div>
        </div>
        </div>
    )
}

export default Home