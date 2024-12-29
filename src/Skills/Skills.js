import React from 'react';
import { ProgressBar } from 'react-bootstrap'; // Bootstrap progress bars

function Skills() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-5">My Skills</h2>

            <p className="text-center mb-5">
                Here are some of the skills and technologies I am proficient in. I continuously strive to improve and expand my knowledge.
            </p>
            <h3 className="mb-4">Web Development</h3>
            <div className="row">
                <div className="col-md-6">
                    <h5>HTML & CSS</h5>
                    <ProgressBar now={90} label="90%" variant="success" className="mb-4" />
                </div>
                <div className="col-md-6">
                    <h5>JavaScript</h5>
                    <ProgressBar now={85} label="85%" variant="info" className="mb-4" />
                </div>
                <div className="col-md-6">
                    <h5>React.js</h5>
                    <ProgressBar now={80} label="80%" variant="primary" className="mb-4" />
                </div>
                <div className="col-md-6">
                    <h5>Bootstrap</h5>
                    <ProgressBar now={85} label="85%" variant="warning" className="mb-4" />
                </div>
            </div>
            <h3 className="mb-4">Mobile Development</h3>
            <div className="row">
                <div className="col-md-6">
                    <h5>React Native</h5>
                    <ProgressBar now={75} label="75%" variant="danger" className="mb-4" />
                </div>
                <div className="col-md-6">
                    <h5>Flutter</h5>
                    <ProgressBar now={70} label="70%" variant="info" className="mb-4" />
                </div>
            </div>
            <h3 className="mb-4">Tools & Technologies</h3>
            <div className="row">
                <div className="col-md-6">
                    <h5>Git & GitHub</h5>
                    <ProgressBar now={90} label="90%" variant="dark" className="mb-4" />
                </div>
                <div className="col-md-6">
                    <h5>VS Code</h5>
                    <ProgressBar now={95} label="95%" variant="success" className="mb-4" />
                </div>
                <div className="col-md-6">
                    <h5>Figma</h5>
                    <ProgressBar now={70} label="70%" variant="info" className="mb-4" />
                </div>
                <div className="col-md-6">
                    <h5>Jest</h5>
                    <ProgressBar now={60} label="60%" variant="warning" className="mb-4" />
                </div>
            </div>
            <h3 className="mb-4">Soft Skills</h3>
            <div className="row">
                <div className="col-md-6">
                    <h5>Problem Solving</h5>
                    <ProgressBar now={90} label="90%" variant="success" className="mb-4" />
                </div>
                <div className="col-md-6">
                    <h5>Teamwork</h5>
                    <ProgressBar now={80} label="80%" variant="primary" className="mb-4" />
                </div>
                <div className="col-md-6">
                    <h5>Communication</h5>
                    <ProgressBar now={85} label="85%" variant="warning" className="mb-4" />
                </div>
            </div>
            <div className="text-center mt-5">
                <p className="lead">
                    I am always eager to learn new technologies and tools. I look forward to working on exciting projects and growing my skillset.
                </p>
            </div>
        </div>
    );
}

export default Skills;
