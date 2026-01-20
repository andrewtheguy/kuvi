import { utilities } from '../data';

export default function Utilities() {
    return (
        <div className="projects">
            {utilities.map((project) => (
                <div key={project.name} className="card">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-title"
                    >
                        <h2>{project.name}</h2>
                    </a>
                    <p>{project.description}</p>
                    <div className="card-links">
                        <span className="link-placeholder"></span>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
