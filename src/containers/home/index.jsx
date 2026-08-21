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
></Animate>

            </div>

            <div className="home__contact-me">
                <button>Hire Me</button>
            </div>

        </section>
    );
};

export default Home;
