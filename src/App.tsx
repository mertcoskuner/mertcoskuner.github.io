import React, { useState, useEffect } from "react";
import {
    Main,
    Timeline,
    Expertise,
    Project,
    Navigation,
    Footer,
} from "./components";
import './index.scss';

function getInitialMode(): string {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
    const [mode, setMode] = useState<string>(getInitialMode);

    const handleModeChange = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', mode === 'dark');
        document.body.classList.toggle('light-mode', mode !== 'dark');
        localStorage.setItem('theme', mode);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', mode === 'dark' ? '#07070c' : '#f6f7fb');
    }, [mode]);

    // Reveal sections on scroll
    useEffect(() => {
        const els = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <Main />
            <Expertise mode={mode} />
            <Timeline mode={mode} />
            <Project mode={mode} />
            <Footer />
        </div>
    );
}

export default App;
