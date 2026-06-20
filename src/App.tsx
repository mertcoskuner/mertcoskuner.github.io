import React, { useState, useEffect } from "react";
import {
    Main,
    About,
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
    const [progress, setProgress] = useState<number>(0);

    const handleModeChange = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', mode === 'dark');
        document.body.classList.toggle('light-mode', mode !== 'dark');
        localStorage.setItem('theme', mode);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', mode === 'dark' ? '#060a0d' : '#f6f7fb');
    }, [mode]);

    // Scroll progress bar
    useEffect(() => {
        const onScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

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

    // Spotlight (mouse-follow glow) on cards
    useEffect(() => {
        const cards = Array.from(document.querySelectorAll<HTMLElement>('.spotlight'));
        const handlers: Array<[HTMLElement, (e: MouseEvent) => void]> = [];
        cards.forEach((card) => {
            const onMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                card.style.setProperty('--my', `${e.clientY - rect.top}px`);
            };
            card.addEventListener('mousemove', onMove);
            handlers.push([card, onMove]);
        });
        return () => handlers.forEach(([card, fn]) => card.removeEventListener('mousemove', fn));
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <Main />
            <About />
            <Expertise mode={mode} />
            <Timeline mode={mode} />
            <Project mode={mode} />
            <Footer />
            <button
                className={`scroll-top${progress > 0.15 ? ' visible' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
            >
                ↑
            </button>
        </div>
    );
}

export default App;
