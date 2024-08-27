import React from "react";

function AboutPage() {
  return (
    <div className="w-full ">
      <div className="flex justify-center items-center min-h-svh">
        About
        <span>
          <a href="about">Us</a>
        </span>
      </div>
      <div className=" container mx-auto flex items-center justify-center gap-10 flex-row">
        <div className="bg-primary w-80 h-80 rounded-lg"></div>
        <div className="flex flex-col items-center max-w-96 text-center gap-5 mb-10">
          <h2 className="text-3xl font-semibold">BuBro Farm</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            officiis error ipsa ratione delectus dolores exercitationem
            repudiandae molestiae eligendi, esse modi accusamus incidunt soluta
            odio beatae perspiciatis quasi voluptatum. Quam sequi recusandae
            vero totam vel, ipsam delectus corporis harum blanditiis odio itaque
            voluptatem aut quia, nemo alias illo? Incidunt culpa rerum unde
          </p>
          <a href="contact">
            <button className="bg-primary rounded-lg px-5 py-2">Hubungi</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
