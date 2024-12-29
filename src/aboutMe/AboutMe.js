import React from 'react';

function AboutMe() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="display-4">Hello! I'm Dawit Endashaw</h1>
                    <p className="lead">A passionate Web Developer & Problem Solver</p>
                    <p>
                        I specialize in creating dynamic and user-friendly web applications. With expertise in both front-end and back-end technologies, I am committed to delivering high-quality, responsive, and scalable digital solutions.
                    </p>
                    <p>
                        I believe that good development is not just about writing clean code, but also about understanding user needs and solving problems in the most efficient and elegant way.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img
                        src="https://avatars.githubusercontent.com/u/168543476?v=4"
                        alt="Dawit Endashaw"
                        className="img-fluid rounded-circle"
                    />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h2>My Skills & Expertise</h2>
                    <ul className="list-group">
                        <li className="list-group-item">HTML, CSS, JavaScript, React</li>
                        <li className="list-group-item">Node.js, Express.js</li>
                        <li className="list-group-item">Database Management (MongoDB, PostgreSQL)</li>
                        <li className="list-group-item">Responsive Design (Bootstrap, Tailwind CSS)</li>
                        <li className="list-group-item">Version Control with Git and GitHub</li>
                        <li className="list-group-item">API Development & Integration (RESTful, GraphQL)</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h2>Why I Love What I Do</h2>
                    <p>
                        Web development is more than just writing code—it's about solving problems, improving user experiences, and continuously learning new technologies. I enjoy the challenges that come with each project and love turning ideas into reality through code.
                    </p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h2>Let’s Connect</h2>
                    <p>If you’re looking for a developer who is passionate about building innovative digital products, let’s work together!</p>
                    <a href="mailto:dawitendashaw74@gmail.com" className="btn btn-primary">Contact Me</a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
