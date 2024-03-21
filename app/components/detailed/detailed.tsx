import React from "react";
import "@/app/components/detailed/detailed.css";
import Image from 'next/image'

const Detailed = () => {
  return (
    <main>
      <div className="detailed-main-div flex justify-center items-center">
        <div className="detailed-about-me flex flex-col items-center text-center m-8">
          <h1 className="detailed-about-me-title flex-col">
            About Me
          </h1>
          <h3 className="detailed-about-me-text">
              <br />
              A 16-years-old UI/UX designer and front-end web
              developer from Turkey. My goal is creating nice and clean
              websites. I mostly use React/Next.js with Tailwind CSS and
              TypeScript. I support Free and Open Source Software.
            </h3>
        </div>


        <div className="detailed-profile-image rounded-2xl m-8">
          <Image
            src="/akame_new.png"
            alt="Akame"
            className="detailed-picture-class rounded-xl shadow-2xl"
            width={280}
            height={280}
          />
        </div>
      </div>
    </main>
  );
};

export default Detailed;
