// import './App.scss';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import particlesOptions from './utils.js/particles';
// import Navbar from './components/navbar';
// import Home from './containers/home';
// import Resume from './containers/resume';
// import Skills from './containers/skills';
// import Portfolio from './containers/portfolio';
// import Contact from './containers/contact';
// import About from './containers/about';

// function App() {

//   const location= useLocation();
//   console.log(location);

//   const handleInit = async (main) => {
//     await loadFull(main);
//   };

//   const renderParticleJsInHomePage=location.pathname === "/";

//   return (
//     <div className="App">

//       {/* particles js */}

//      {
//       renderParticleJsInHomePage && ( <Particles
//         id="particles"
//         init={handleInit}
//         options={particlesOptions}
//       />
//     ) }

      
//       {/* navbar */}
//       <Navbar />

//       {/* main page content */}
// <div className='App__main-page-content'>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
// </div>
//     </div>
//   );
// }

// export default App;


// import './App.scss';

// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';

// import particlesOptions from './utils.js/particles';

// import Navbar from './components/navbar';
// import Home from './containers/home';

// function App() {

//     const handleInit = async (main) => {
//         await loadFull(main);
//     };

//     return (
//         <div className="App">

//             <Particles
//                 id="particles"
//                 init={handleInit}
//                 options={particlesOptions}
//             />

//             <Navbar />

//             <Home />

//         </div>
//     );
// }

// export default App;

import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesOptions from './utils.js/particles';

import Navbar from './components/navbar';
import Home from './containers/home';

function App() {
    const location = useLocation();

    const handleInit = async (main) => {
        await loadFull(main);
    };

    const renderParticleJsInHomePage = location.pathname === "/";

    return (
        <div className="App">

            {renderParticleJsInHomePage && (
                <Particles
                    id="particles"
                    init={handleInit}
                    options={particlesOptions}
                />
            )}

            <Navbar />

            <div className="App__main-page-content">
      </div>
       <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
</Routes>

        </div>
    );
}

export default App;