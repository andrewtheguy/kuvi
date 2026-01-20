import { useParams, Navigate } from 'react-router-dom';
import { projects, categories, type PlatformId } from '../data';

export default function PlatformView() {
    const { type } = useParams<{ type: string }>();

    if (type !== 'web' && type !== 'standalone') {
        return <Navigate to="/" replace />;
    }

    const platform = type as PlatformId;
    const platformName = platform === 'web' ? 'Web Applications' : 'Standalone Utilities';
    const platformDescription = platform === 'web'
        ? 'Browser-based privacy tools that run instantly.'
        : 'Native CLI tools and desktop applications for power users.';

    // Get only categories that have projects for this platform
    const activeProjects = projects.filter(p => p.platform === platform);
    const activeCategoryIds = Array.from(new Set(activeProjects.map(p => p.category)));

    const displayCategories = categories.filter(c => activeCategoryIds.includes(c.id));

    return (
        <div>
            <div className="section-header">
                <h2>{platformName}</h2>
                <p>{platformDescription}</p>
            </div>

            {displayCategories.map(category => {
                const categoryProjects = activeProjects.filter(p => p.category === category.id);

                return (
                    <div key={category.id} className="platform-category-section">
                        <h3 className="platform-category-title">{category.title}</h3>

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
                                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path>
                                                </svg>
                                            </a>
                                        ) : (
                                            <span />
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
                        <div className="platform-category-divider"></div>
                    </div>
                );
            })}
        </div>
    );
}
