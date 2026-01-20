import { useParams, Navigate } from 'react-router-dom';
import { projects, categories } from '../data';

export default function CategoryView() {
    const { id } = useParams<{ id: string }>();

    // Validate category
    const category = categories.find(c => c.id === id);
    if (!category) {
        return <Navigate to="/" replace />;
    }

    const categoryProjects = projects.filter(p => p.category === id);

    return (
        <div>
            <div className="section-header">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
            </div>

            <div className="projects">
                {categoryProjects.map((project) => (
                    <div key={project.name} className="card">
                        {project.subdomain ? (
                            <a
                                href={`https://${project.subdomain}.kuvi.app`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-title"
                            >
                                <h2>{project.name}</h2>
                            </a>
                        ) : (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-title"
                            >
                                <h2>{project.name}</h2>
                            </a>
                        )}

                        <p>{project.description}</p>

                        <div className="card-links">
                            {project.subdomain ? (
                                <a
                                    href={`https://${project.subdomain}.kuvi.app`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    Launch App
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                </a>
                            ) : (
                                <span /> // Spacer
                            )}

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
        </div>
    );
}
