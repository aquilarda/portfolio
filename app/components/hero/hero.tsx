import React from "react";
import "@/app/components/hero/hero.css";
import Image from 'next/image'

const Hero = () => {
  return (
    <main className="main">
      <div className="main-div flex justify-center items-center">
        
        <div className="profile-image rounded-2xl m-8">
          <Image
            src="/akame.png"
            alt="Profile Picture"
            className="picture-class rounded-xl shadow-2xl"
            width={280}
            height={280}
          />
        </div>

        <div className="about-me flex flex-col items-center text-center m-8">
          <h1 className="about-me-title">
            Front-end Web Developer
          </h1>
          <h3 className="about-me-text text-center"> <br />
              Hi! I’m Arda. A enthusiastic front-end web
              developer.
            </h3>
        </div>
      </div>
    </main>
  );
};

export default Hero;
