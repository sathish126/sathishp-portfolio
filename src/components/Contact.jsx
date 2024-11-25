import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { RiLinkedinBoxFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

const Contact = () => {
    const contactRef = useRef(null);
    const iconRefs = useRef([]);

    useEffect(() => {
        const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

        timeline
            .fromTo(
                contactRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2 }
            )
            .fromTo(
                iconRefs.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, stagger: 0.2 },
                "-=0.8"
            );
    }, []);

    return (
        <section className="py-16" id="contact" ref={contactRef}>
            <div className="px-4 text-center">
                <h2 className="mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
                <p className="mb-4 text-lg lg:text-xl">
                    Feel free to reach out to me via email:{" "}
                    <a
                        className="border-b text-blue-500 hover:text-blue-700"
                        href="mailto:sathishpandiyan126@gmail.com"
                    >
                        sathishpandiyan126@gmail.com
                    </a>
                </p>
                <div className="mt-8 flex justify-center space-x-6">
                    {[{
                        href: "https://www.linkedin.com/in/sathishkumarp126/",
                        aria: "Visit my LinkedIn profile",
                        icon: <RiLinkedinBoxFill className="text-3xl" />,
                        className: "text-blue-600 hover:text-blue-800"
                    }, {
                        href: "https://github.com/sathish126",
                        aria: "Visit my GitHub profile",
                        icon: <RiGithubFill className="text-3xl" />,
                        className: "text-gray-700 hover:text-gray-900"
                    }, {
                        href: "https://www.instagram.com/sathish__126_/",
                        aria: "Visit my Instagram profile",
                        icon: <RiInstagramFill className="text-3xl" />,
                        className: "text-pink-500 hover:text-pink-700"
                    }].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.aria}
                            className={social.className}
                            ref={(el) => (iconRefs.current[index] = el)}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
