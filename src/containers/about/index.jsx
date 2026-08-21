// // import React from 'react';
// // import {BsInfoCircle, BsInfoCircleFill} from 'react-icons/bs'
// // import PageHeaderContent from '../../components/pageHeaderContent';
// // import{Animate} from "react-simple-animate";
// // import './styles.scss';

// // const personalDetails = [
// //     {
// //         label: "Name",
// //         value: "Dev Raj",
// //     },
// //     {
// //         label: "Age",
// //         value: 21,
// //     },
// //     {
// //         label: "Address",
// //         value: "India",
// //     },
// //     {
// //         label: "Email",
// //         value: "devrj2402@gmail.com",
// //     },
// //     {
// //         label: "Contact",
// //         value: "+917007188747",
// //     },
// // ];

// // const jobsumarry='Python Developer with hands-on experience in Python, Django, Django REST Framework, Flask, SQL, and backend development. Skilled in building REST APIs, developing database-driven web applications, and integrating backend services with modern front-end technologies. Strong foundation in DSA, MySQL/PostgreSQL, Git, HTML, CSS, JavaScript, and React.js, with a focus on writing clean, scalable, and maintainable code. Currently building full-stack projects and continuously improving backend development and problem-solving skills.'


// // const About = () => {
// //     return (
// //         <section id="about" className="about">
// //             <PageHeaderContent
// //             headerText="About Me"
// //             icon={<BsInfoCircleFill size={40}/>}
// //             />

// //             <div className='about__content'>
// //                 <div className='about__content__personalWrapper'>
// //                     <Animate  
// //                     play 
// //                     duration={1.5}
// //                     delay={1}
// //                     start={{
// //                         transform: "translateY(-900px)",
// //                     }}

// //                     end={{
// //                         transform: "translateX(0px)",
// //                     }}
// //                     >
                   
                

// //                 <h3>Python Developer</h3>
// //                 <p>{jobsumarry}</p>

// //                   </Animate>
                  
// //                 </div>

// //                 <div className='about__content__serviceWrapper'>Services wrapper</div>


// //                 <Animate  
// //                     play 
// //                     duration={1.5}
// //                     delay={1}
// //                     start={{
// //                         transform: "translateY(-900px)",
// //                     }}

// //                     end={{
// //                         transform: "translateX(0px)",
// //                     }}
// //                     >
                   
                

// //                 <h3>Python Developer</h3>
// //                 <p>{jobsumarry}</p>

// //                   </Animate>

// //                  <Animate  
// //                     play 
// //                     duration={1.5}
// //                     delay={1}
// //                     start={{
// //                         transform: "translateY(5000px)",
// //                     }}

// //                     end={{
// //                         transform: "translateX(0px)",
// //                     }}
// //                     >
                    
// //                   <h3>Personal Details</h3>
// //                   <ul>
// //                      {
// //         personalDetails.map((item, i) => (
// //             <li key={i}>
// //                 <span className="title">{item.label}</span>
// //                 <span className="value">{item.value}</span>
// //             </li>
// //         ))
// //     }
// //                   </ul>
// // </Animate>
// //             </div>

// //         </section>
// //     );
// // }

// // export default About;



// import React from 'react';
// import { BsInfoCircleFill } from 'react-icons/bs';
// import PageHeaderContent from '../../components/pageHeaderContent';
// import { Animate } from 'react-simple-animate';
// import './styles.scss';

// const personalDetails = [
//     {
//         label: "Name",
//         value: "Dev Raj",
//     },
//     {
//         label: "Age",
//         value: 21,
//     },
//     {
//         label: "Address",
//         value: "India",
//     },
//     {
//         label: "Email",
//         value: "devrj2402@gmail.com",
//     },
//     {
//         label: "Contact",
//         value: "+917007188747",
//     },
// ];

// const jobsumarry =
//     'Python Developer with hands-on experience in Python, Django, Django REST Framework, Flask, SQL, and backend development. Skilled in building REST APIs, developing database-driven web applications, and integrating backend services with modern front-end technologies. Strong foundation in DSA, MySQL/PostgreSQL, Git, HTML, CSS, JavaScript, and React.js, with a focus on writing clean, scalable, and maintainable code. Currently building full-stack projects and continuously improving backend development and problem-solving skills.';

// const About = () => {
//     return (
//         <section id="about" className="about">

//             <PageHeaderContent
//                 headerText="About Me"
//                 icon={<BsInfoCircleFill size={40} />}
//             />

//             <div className="about__content">

//                 {/* LEFT SIDE */}
//                 <div className="about__content__personalWrapper">

//                     <Animate
//                         play
//                         duration={1.5}
//                         delay={1}
//                         start={{
//                             transform: "translateY(-900px)",
//                         }}
//                         end={{
//                             transform: "translateY(0px)",
//                         }}
//                     >
//                         <h3>Python Developer</h3>

//                         <p>{jobsumarry}</p>
//                     </Animate>

//                 </div>

//                 {/* MIDDLE */}
//                 <div className="about__content__serviceWrapper">
//                     Services wrapper
//                 </div>

//                 {/* RIGHT SIDE */}
//                 <div className="about__content__personalDetails">

//                     <Animate
//                         play
//                         duration={1.5}
//                         delay={1}
//                         start={{
//                             transform: "translateY(500px)",
//                         }}
//                         end={{
//                             transform: "translateY(0px)",
//                         }}
//                     >
//                         <h3>Personal Details</h3>

//                         <ul>
//                             {personalDetails.map((item, i) => (
//                                 <li key={i}>
//                                     <span className="title">
//                                         {item.label}
//                                     </span>

//                                     <span className="value">
//                                         {item.value}
//                                     </span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </Animate>

//                 </div>

//             </div>

//         </section>
//     );
// };

// export default About;



import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import {DiPython} from 'react-icons/di'
import {DiMysql} from 'react-icons/di'
import {FaDev} from 'react-icons/fa'
import {DiReact} from 'react-icons/di'

const personalDetails = [
    {
        label: "Name",
        value: "Dev Raj",
    },
    {
        label: "Age",
        value: 21,
    },
    {
        label: "Address",
        value: "India",
    },
    {
        label: "Email",
        value: "devrj2402@gmail.com",
    },
    {
        label: "Contact",
        value: "+917007188747",
    },
];

const jobsumarry =
    'Python Developer with hands-on experience in Python, Django, Django REST Framework, Flask, SQL, and backend development. Skilled in building REST APIs, developing database-driven web applications, and integrating backend services with modern front-end technologies. Strong foundation in DSA, MySQL/PostgreSQL, Git, HTML, CSS, JavaScript, and React.js, with a focus on writing clean, scalable, and maintainable code. Currently building full-stack projects and continuously improving backend development and problem-solving skills.';

const About = () => {
    return (
        <section id="about" className="about">

            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about__content">

                {/* LEFT SIDE */}
                <div className="about__content__personalWrapper">

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateY(-900px)",
                        }}
                        end={{
                            transform: "translateY(0px)",
                        }}
                    >

                        <h3>Python Developer</h3>

                        <p>{jobsumarry}</p>

                        <h3 className='personalInformationHeaderText'>Personal Information</h3>

                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">
                                        {item.label}
                                    </span>

                                    <span className="value">
                                        {item.value}
                                    </span>
                                </li>
                            ))}
                        </ul>

                    </Animate>

                </div>

                {/* MIDDLE / RIGHT SIDE */}
                <div className="about__content__serviceWrapper">
                    <div className='about__content__serviceWrapper__innerContent'><div>
                        <FaDev size={60} color="var(--yellow-theme-main-color)"/>
                    </div>

                    <div>
                        <DiPython size={60} color="var(--yellow-theme-main-color)"/>
                    </div>

                    <div>
                        <DiMysql size={60} color="var(--yellow-theme-main-color)"/>
                    </div>

                    <div>
                        <DiReact size={60} color="var(--yellow-theme-main-color)"/>
                    </div>
                    </div>
                    
                </div>

            </div>

        </section>
    );
};

export default About;