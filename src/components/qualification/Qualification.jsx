import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">

          <div className={toggleState === 1 ? "qualification__button  qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
          </div>

          <div className={toggleState === 2 ? "qualification__button  qualification__active button--flex" : "qualification__button button--flex"}
           onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
          </div>
        </div>

        <div className="qualification__section">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Udemy</h3>
                <span className="qualification__subtitle">React JS Practical course</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">IT Academy</h3>
                <span className="qualification__subtitle">Developing web apps using JavaScript</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - 2021
                </div>
              </div>


            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IT Academy</h3>
                <span className="qualification__subtitle">Developing web pages using HTML, CSS, JavaScript</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front-end Developer</h3>
                <span className="qualification__subtitle">ASBIS Belarus</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Trainee</h3>
                <span className="qualification__subtitle">IT Academy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>


            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Programmer Technician</h3>
                <span className="qualification__subtitle">A1 Belarus</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2016 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Pets projects</h3>
                <span className="qualification__subtitle">Belarus/Poland</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>
              

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            

          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Qualification