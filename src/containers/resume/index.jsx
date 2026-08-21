import React from "react";
import { BsInfoCircleFill, BsBriefcaseFill, BsMortarboardFill } from "react-icons/bs";

import PageHeaderContent from "../../components/pageHeaderContent";

import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import "./styles.scss";


const Resume = () => {

    const experienceData = [
        {
            title: "Frontend Developer",
            subTitle: "React.js Developer",
            description:
                "Developing responsive and interactive web applications using HTML, CSS, JavaScript and React.js."
        },
        {
            title: "Python Developer",
            subTitle: "Backend Development",
            description:
                "Working with Python, Django, Django REST Framework and MySQL to build backend applications and REST APIs."
        }
    ];


    const educationData = [
        {
            title: "B.Tech in Computer Science & Engineering",
            subTitle: "BBDNIIT, Lucknow",
            description:
                "Bachelor of Technology in Computer Science and Engineering."
        },
        {
            title: "12th Grade",
            subTitle: "Senior Secondary Education",
            description:
                "Completed higher secondary education with a focus on science and mathematics."
        },
        {
            title: "10th Grade",
            subTitle: "Secondary Education",
            description:
                "Completed secondary school education."
        }
    ];


    return (
        <section id="resume" className="resume">

            {/* PAGE HEADER */}
            <PageHeaderContent
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />}
            />


            {/* MAIN RESUME CONTENT */}
            <div className="resume__content">


                {/* ================= EXPERIENCE ================= */}

                <div className="resume__column">

                    <h3 className="resume__column__heading">
                        Experience
                    </h3>


                    <VerticalTimeline
                        layout="1-column"
                        lineColor="var(--yellow-theme-main-color)"
                    >

                        {experienceData.map((item, index) => (

                            <VerticalTimelineElement
                                key={index}
                                className="resume__timeline-element"
                                contentStyle={{
                                    background: "transparent",
                                    color: "#fff",
                                    boxShadow: "none",
                                    padding: "0"
                                }}
                                contentArrowStyle={{
                                    borderRight: "7px solid var(--yellow-theme-main-color)"
                                }}
                                date=""
                                icon={
                                    <BsBriefcaseFill
                                        color="#ffffff"
                                        size={20}
                                    />
                                }
                                iconStyle={{
                                    background:
                                        "var(--yellow-theme-main-color)",
                                    color: "#ffffff"
                                }}
                            >

                                <div className="resume__card">

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <h4>
                                        {item.subTitle}
                                    </h4>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </VerticalTimelineElement>

                        ))}

                    </VerticalTimeline>

                </div>


                {/* ================= EDUCATION ================= */}

                <div className="resume__column">

                    <h3 className="resume__column__heading">
                        Education
                    </h3>


                    <VerticalTimeline
                        layout="1-column"
                        lineColor="var(--yellow-theme-main-color)"
                    >

                        {educationData.map((item, index) => (

                            <VerticalTimelineElement
                                key={index}
                                className="resume__timeline-element"
                                contentStyle={{
                                    background: "transparent",
                                    color: "#fff",
                                    boxShadow: "none",
                                    padding: "0"
                                }}
                                contentArrowStyle={{
                                    borderRight: "7px solid var(--yellow-theme-main-color)"
                                }}
                                date=""
                                icon={
                                    <BsMortarboardFill
                                        color="#ffffff"
                                        size={20}
                                    />
                                }
                                iconStyle={{
                                    background:
                                        "var(--yellow-theme-main-color)",
                                    color: "#ffffff"
                                }}
                            >

                                <div className="resume__card">

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <h4>
                                        {item.subTitle}
                                    </h4>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </VerticalTimelineElement>

                        ))}

                    </VerticalTimeline>

                </div>


                {/* ================= RESUME BUTTON ================= */}

                <div className="resume__button-wrapper">

                    <a
                        href="/DevRaj_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume__download-btn"
                    >
                        View My Resume
                    </a>

                </div>


            </div>

        </section>
    );
};


export default Resume;