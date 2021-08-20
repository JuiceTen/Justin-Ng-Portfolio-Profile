import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import {motion} from 'framer-motion'


function Home() {    
    
    const svgRef = useRef(null)
    let running = false;

    const playAnimation = (e) => {
        svgRef.current.classList.add('run')
        running = true;
    }

    const stopAnimation = (e) => {
        running = false;
    }

    const iteration = (e) => {
        if(!running) {
            svgRef.current.classList.remove("run");
        }
    }

  
    return(
        <section className='section background'>
        <motion.div id='container' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <svg id='logo' onMouseEnter={playAnimation} onMouseLeave={stopAnimation} onAnimationIteration={iteration}  ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="414" height="342" viewBox="0 0 414 342" fill="none">
        <rect width="414" height="342" fill="none"/>
        <g id="Frame 1">
        <rect width="414" height="342" fill="none"/>
        <motion.g id="circle" className='circle' initial={{transform: 'rotate(0deg)'}} animate={{transform: 'rotate(360deg)'}} transition={{duration: 2}}>
        <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="100.545" y="44.9068" width="242" height="242" fill="black">
        <rect fill="white" x="100.545" y="44.9068" width="242" height="242"/>
        <path d="M339.545 165.907C339.545 142.569 332.625 119.754 319.659 100.349C306.693 80.9445 288.264 65.8201 266.702 56.889C245.14 47.9578 221.414 45.621 198.525 50.1741C175.635 54.7271 154.609 65.9656 138.107 82.4682C121.604 98.9707 110.366 119.996 105.813 142.886C101.26 165.776 103.596 189.502 112.528 211.063C121.459 232.625 136.583 251.054 155.988 264.02C175.393 276.986 198.207 283.907 221.545 283.907V165.907H339.545Z"/>
        </mask>
        <path d="M339.545 165.907C339.545 142.569 332.625 119.754 319.659 100.349C306.693 80.9445 288.264 65.8201 266.702 56.889C245.14 47.9578 221.414 45.621 198.525 50.1741C175.635 54.7271 154.609 65.9656 138.107 82.4682C121.604 98.9707 110.366 119.996 105.813 142.886C101.26 165.776 103.596 189.502 112.528 211.063C121.459 232.625 136.583 251.054 155.988 264.02C175.393 276.986 198.207 283.907 221.545 283.907V165.907H339.545Z" stroke="black" strokeOpacity="0.09" strokeWidth="6" mask="url(#path-1-outside-1)"/>
        </motion.g>
        <motion.g id="Vector1" filter="url(#filter0_d)"
         initial={{strokeDasharray: '660px', strokeDashoffset: '660px'}}
         animate={{strokeDasharray: '660px', strokeDashoffset: '0px'}}
         transition={{duration: 1}}
          >
        <path d="M92.5453 81.3067C109.758 76.3551 126.999 72.6032 143.745 66.1068C159.321 60.0644 174.457 52.4339 188.812 43.8845C193.113 41.3228 204.849 32.1429 201.523 35.8845C197.261 40.6791 195.904 46.8705 194.501 52.9512C186.946 85.6894 179.328 117.564 165.701 148.418C152.077 179.263 138.449 212.399 116.501 238.462C103.248 254.2 88.0983 267.175 70.5453 277.707C60.0009 284.033 51.7059 282.106 53.1675 268.951C56.7128 237.043 83.2823 211.192 106.19 191.396C139.92 162.246 178.537 138.128 214.945 112.507" stroke="#0057FF" strokeWidth="8" shapeRendering="crispEdges"/>
        </motion.g>
        <motion.g id="Vector2" style={{mixBlendMode: 'darken'}} filter="url(#filter1_d)"
        initial={{strokeDasharray: '542px', strokeDashoffset: '542px'}}
        animate={{strokeDasharray: '542px', strokeDashoffset: '0px'}}
        transition={{duration: 1, delay: 0.9}}>
        

        <path d="M213.021 114.343C228.722 102.116 245.439 85.2748 265.288 80.4762C268.635 79.6669 277.258 77.2933 279.865 81.0985C283.132 85.8654 277.757 94.8299 275.688 98.9207C263.008 123.984 247.409 146.076 231.421 169.098C211.693 197.506 190.39 225.364 181.199 259.321C176.775 275.663 177.719 294.99 196.399 301.01C221.479 309.091 244.794 299.227 264.221 283.143C280.089 270.006 297.658 253.644 284.31 232.698C269.872 210.042 237.295 207.667 220.221 227.943" stroke="#FF9900" strokeWidth="8"/>
        </motion.g>
        </g>
        <defs>
        <filter id="filter0_d" x="45.0067" y="31.0005" width="176.241" height="262.191" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter1_d" x="171" y="74.9999" width="126.034" height="240.896" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
        </svg>

        <nav>
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/project'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/resume'>Resume</Link></li>

            </ul>
        </nav>
        </motion.div>
       
        </section>
    )
}

export default Home;

