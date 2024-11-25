import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import Sathish from "../assets/Sathish.webp";

const Hero = () => {
    const heroRef = useRef(null);
    const elementsRef = useRef([]);

    useEffect(() => {
        const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

        timeline
            .fromTo(
                elementsRef.current[0],
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0 }
            )
            .fromTo(
                elementsRef.current[1],
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1 },
                "-=0.6"
            )
            .fromTo(
                elementsRef.current[2],
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0 },
                "-=0.4"
            )
            .fromTo(
                elementsRef.current[3],
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0 },
                "-=0.4"
            )
            .fromTo(
                elementsRef.current[4],
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1 },
                "-=0.4"
            );
    }, []);

    return (
        <section
            className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6"
            ref={heroRef}
        >
            <div className="mt-12 lg:mt-20">
                <h1
                    className="hero-title text-4xl uppercase lg:text-7xl"
                    ref={(el) => (elementsRef.current[0] = el)}
                >
                    {PROFILE.name}
                </h1>
                <h2
                    className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent"
                    ref={(el) => (elementsRef.current[1] = el)}
                >
                    {PROFILE.role}
                </h2>
            </div>
            <p
                className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl"
                ref={(el) => (elementsRef.current[2] = el)}
            >
                {PROFILE.subheading}
            </p>
            <a
                href="/Sathish-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="hero-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter"
                ref={(el) => (elementsRef.current[3] = el)}
            >
                <span>Download Resume</span>
                <RiArrowRightUpLine />
            </a>
            <img
                src={Sathish}
                alt={PROFILE.name}
                width={300}
                height={300}
                className="hero-img rounded-3xl border border-purple-300/20 p-1"
                ref={(el) => (elementsRef.current[4] = el)}
            />
        </section>
    );
};

export default Hero;
