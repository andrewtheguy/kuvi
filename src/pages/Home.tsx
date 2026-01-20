import { Link } from 'react-router-dom';
import { platforms } from '../data';

export default function Home() {
    return (
        <div className="home-container">
            <div className="hero">
                <h1 className="hero-title">kuvi.app</h1>
                <p className="hero-tagline">A collection of open source web apps and native utilities</p>
            </div>

            <div className="categories-grid">
                {platforms.map((platform) => (
                    <Link
                        key={platform.id}
                        to={`/platform/${platform.id}`}
                        className="category-card"
                    >
                        <div className="category-image-container">
                            <img src={platform.image} alt={platform.title} className="category-image" />
                            <div className="category-overlay"></div>
                        </div>
                        <div className="category-content">
                            <h2>{platform.title}</h2>
                            <p>{platform.description}</p>
                        </div>
                        <div className="category-arrow">→</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
