// import React from 'react';
// import './styles.scss';

// const Home = () => {
//     return (
//         <section id="home" className='home'>
//             <div className="home__text-wrapper">
                
//                     <h1>Hello, I'm Dev Raj
//                     <br/>
//                     Python Developer                 
//                 </h1>
//                 <div className="home__contact-me">
//                     <button>Hire Me</button>

//                 </div>

//             </div>

//         </section>
//     );
// }

// export default Home;



import React from 'react';
import './styles.scss';
import { Animate } from 'react-simple-animate';

import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const Home = () => {
    return (
        <section id="home" className="home">

            <div className="home__text-wrapper">

                <h1>
                    Hello, I'm Dev Raj
                    <br />
                    Python Developer
                </h1>

                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: "translateY(550px)",
                    }}
                    end={{
                        transform: "translateY(0px)",
                    }}
                >
                </Animate>

            </div>

            <div className="home__contact-me">

                <button>Hire Me</button>

                <div className="home__social-icons">

                    <a
                        href="https://www.linkedin.com/in/dev-raj-57b968255/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/DevRaj-2405"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://leetcode.com/u/DevRaj_2405/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LeetCode"
                    >
                        <SiLeetcode />
                    </a>

                    <a
                        href="https://x.com/ElonMusk"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter/X"
                    >
                        <FaXTwitter />
                    </a>

                </div>

            </div>

        </section>
    );
};

export default Home;