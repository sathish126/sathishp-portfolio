import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="pt-16" id="projects">
            <div className="px-4">
                <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
                    Projects
                </h2>
                <motion.div
                    className="flex flex-wrap justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {PROJECTS.map((project) => (
                        <motion.div
                            key={project.id}
                            className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/2"
                            variants={cardVariants}
                        >
                            <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={project.imgSrc}
                                        alt={project.title}
                                        className="h-60 w-full object-cover"
                                    />
                                </a>
                                <div className="p-6">
                                    <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                                        {project.title}
                                    </h3>
                                    <p className="mb-4">{project.description}</p>
                                    <div className="mb-4">
                                        <strong>Tech Stack:</strong>
                                        <ul>
                                            {project.techStack.map((tech, index) => (
                                                <li
                                                    key={index}
                                                    className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
