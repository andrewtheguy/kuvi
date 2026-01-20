import { webApps } from '../data';

export default function WebApps() {
    return (
        <div className="projects">
            {webApps.map((project) => (
                <div key={project.subdomain} className="card">
                    <a
                        href={`https://${project.subdomain}.kuvi.app`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-title"
                    >
                        <h2>{project.name}</h2>
                    </a>
                    <p>{project.description}</p>
                    <div className="card-links">
                        <a
                            href={`https://${project.subdomain}.kuvi.app`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                        >
                            {project.subdomain}.kuvi.app
                        </a>
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
