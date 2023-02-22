import React from 'react'
import DownloadAds from './DownloadAds'

function hero() {
  return (
    <div className="wrapper z-[-90] bg-[url('./img/bg-food-2.jpg')] bg-cover bg-no-repeat flex items-center justify-between px-[5rem] w-[100%] h-[100vh] relative">
        {/* left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[2.5rem]">
            
            <div className='flex w-[90px]'>
            <img src= {require("../img/foodjoint-logo.png")} alt=""/>
            </div>
            <span>
            
                Discover The</span>{" "} 
            <span>
                Best Dishes On
            </span>
            <span className='text-[6rem]'>
            <b>FoodJoint</b></span>

            <span className='text-[15px] text-[#dde6f3] text-left'>
                To make the best of your day, order your favorite meal from your favorite chef with our app.
            <br/>
            We have the best food deals, and we deliver 24/7.
            </span>

            {/* download ads */}
            <div>
                <span className='text-[13px] text-left'> Download now on IOS and Android</span>
                <DownloadAds/>
            </div>
        </div>
        {/* right side */}
        <div className="images w-[250px]">
        <img
                src={require("../img/app-ui4.png")}
                alt=""
                className="absolute w-[40vw] top-[7rem] left-[53rem]"
            />
           
        </div>
    </div>
  )
}

export default hero