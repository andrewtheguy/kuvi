import { useParams, Navigate } from 'react-router-dom';
import { projects, categories, type PlatformId } from '../data';
import { Globe } from 'lucide-react';

export default function PlatformView() {
    const { type } = useParams<{ type: string }>();

    if (type !== 'web' && type !== 'standalone') {
        return <Navigate to="/" replace />;
    }

    const platform = type as PlatformId;
    const platformName = platform === 'web' ? 'Web Applications' : 'Standalone Utilities';
    const platformDescription = platform === 'web'
        ? 'Browser-based tools that run instantly.'
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
                                                <Globe size={16} style={{ marginLeft: '8px' }} />
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
