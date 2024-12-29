import React from 'react';
import AboutMe from '../aboutMe/AboutMe';
import Contact from '../contactMe/ContactMe';
import Skills from '../Skills/Skills';
function NavBar() {
    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                    >
                        Home
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="skills-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#skills-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="skills-tab-pane"
                        aria-selected="false"
                    >
                        Skills
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="false"
                    >
                        Contact Me
                    </button>
                </li>
            </ul>

            <div className="tab-content" id="myTabContent">
                <div
                    className="tab-pane fade show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex="0"
                >
                    < AboutMe />
                </div>
                <div
                    className="tab-pane fade"
                    id="skills-tab-pane"
                    role="tabpanel"
                    aria-labelledby="skills-tab"
                    tabIndex="0"
                >
                    <Skills />
                </div>
                <div className="tab-pane fade"
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabIndex="0"
                >
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
