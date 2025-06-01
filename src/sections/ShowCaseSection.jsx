import React from "react";

const ShowCaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left Side */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="First Project" />
            </div>
            <div classname="text-content">
              <h2>On-Demand i will think about some thing</h2>
              <p>then describe it more here okay Mr. me Mohammed</p>
            </div>
          </div>
          {/* Right Side */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Second Project" />
              </div>
              <h2>Then my other projects</h2>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#7aadff]">
                <img src="/images/project3.png" alt="Second Project" />
              </div>
              <h2>Then my other projects</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseSection;
