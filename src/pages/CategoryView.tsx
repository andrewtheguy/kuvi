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
