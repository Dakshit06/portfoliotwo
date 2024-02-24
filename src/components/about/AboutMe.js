import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Dakshit Vardekar</h2>
          <p className="text-base leading-6 ">
            Web designer from Nashik, India. I have rich experience in web
            site design and building, also I am good at wordpress. I love to
            talk with you about our unique.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            23
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Nashik
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
           Nashik,India
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
