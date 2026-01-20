import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
            <div className="categories-grid">
                <Link
                    to="/platform/web"
                    className="category-card"
                >
                    <div className="category-content">
                        <h2>Web Applications</h2>
                        <p>Instant-access tools running in your browser.</p>
                    </div>
                    <div className="category-arrow">→</div>
                </Link>

                <Link
                    to="/platform/standalone"
                    className="category-card"
                >
                    <div className="category-content">
                        <h2>Standalone Utilities</h2>
                        <p>Powerful CLI and desktop applications for advanced tasks.</p>
                    </div>
                    <div className="category-arrow">→</div>
                </Link>
            </div>
        </div>
    );
}
