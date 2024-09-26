import React, { useState } from 'react'
import './Home.css'
import useWindowSize from './windowWidth/WindowWidth'
import { allSmoothies } from '../../utils/smoothiesData'

const Home = () => {
    const { width } = useWindowSize();
    console.log(width)
    const windowWidth = useState(window.innerWidth);
    console.log(windowWidth[0]);

    const [isNav, setIsNav] = useState(false);
    const displayNavF=()=>{
        setIsNav(true);
    }
    const [targetSmoothie, setTargetSmoothie] = useState(allSmoothies[0]);
    const smoothieF = (id) => {
        const requiredSmoothie = allSmoothies.find((smoothie) => {
            return smoothie.id === id
        })
        setTargetSmoothie(requiredSmoothie);
    }
    return (
        <div className='Home' style={{ backgroundImage: `url(${targetSmoothie.bg_image})` }}>
            {/* =============== header ================ */}
            <div className='Header'>
                <div className="logo">
                    <img src="/asset/images/logo.png" alt="" />
                </div>

                <div className={`anchors ${isNav && "displayNav"}`} style={{backgroundColor:`${width<600 ? targetSmoothie.color : 'transparent'}`}}>
                    <a style={{ fontWeight: '900' }} href="">Home</a>
                    <a href="">Specialities</a>
                    <a href="">About</a>
                    <a href="">Contact us</a>
                </div>
                <div className="menuBars" onClick={()=>setIsNav(!isNav)} style={{color:`${ targetSmoothie.color}`}}>
                    <i className='fa-solid fa-bars'></i>
                </div>
            </div>

            {/* =============== hero section ============ */}
            <div className='HeroIntro'>
                <div className="leftContent">
                    <div className="content">
                        <img src='/asset/images/content.png' alt="" />
                        <p>Smoothies are so healthy, refreshing and the perfect way to pack some extra fruit and veggies into your diet.</p>
                        <button style={{backgroundColor:`${targetSmoothie.color}`}}>Order Now</button>
                    </div>
                    <div className="itemChoices">
                        {allSmoothies.map((smoothie) => {
                            return (
                                <div>
                                    <img onClick={() => smoothieF(smoothie.id)} key={smoothie.id} src={smoothie.image} alt="" />
                                    <div className={targetSmoothie.id === smoothie.id ? 'activeLine' : 'inactive'}></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="rightContent">
                    <img src='/asset/images/bowl_group2.png' className={targetSmoothie.rotate} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home