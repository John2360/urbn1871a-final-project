import React, { useRef } from 'react';
import './App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import PageFive from './components/PageFive';
import PageSix from './components/PageSix';
import PageSeven from './components/PageSeven';
import PageEight from './components/PageEight';

import useScrollSnap from "react-use-scroll-snap";


function App() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 5, delay: 10 });

    return (
        <div className="App" ref={scrollRef}>
            <PageOne />
            <PageTwo />
            <PageThree />
            <PageFour />
            <PageFive />
            <PageSix />
            <PageSeven />
            <PageEight />
        </div>
    );
}

export default App;
