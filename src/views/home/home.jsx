import React from "react";

const Home = () => {
  return (
    <section id="#home" className="home">
      <div className="container">
        <div className="character">
          <div className="character__description">
            <h1>Front-End React Developer &#9996;</h1>
            <p>
              Hi, &#128075; I'm Khawaja Faizan, an enthusiastic Front-End React
              Developer based in Lahore, Pakistan &#128205;, dedicated to
              creating engaging web experiences.
            </p>
            <span>
              <a
                href="https://www.linkedin.com/in/khawaja-faizan-101/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin " aria-hidden="true" />
              </a>
              <a
                href="https://github.com/khawaja-Faizan"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-github " aria-hidden="true" />
              </a>
            </span>
          </div>

          <div className="character__img">
            <div className="animated-bubble"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
