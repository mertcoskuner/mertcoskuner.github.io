import React, { useState, useEffect } from "react";
import {
    Main,
    Timeline,
    Expertise,
    Project,
    Navigation,
    Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('light');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if (mode === 'dark') {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [mode]);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
                <Main />
                <Expertise mode={mode} />
                <Timeline mode={mode} />
                <Project mode={mode} />
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;