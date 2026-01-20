import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="portal">
            <header className="header">
                <Link to="/" className="branding-link">
                    <h1>kuvi.app</h1>
                </Link>
                <p className="tagline">Open source web apps and native utilities built for privacy and performance</p>
            </header>

            <main className="content">
                <Outlet />
            </main>

            <footer className="footer">
                <p>Static sites powered by your browser and free public services. Open source.</p>
            </footer>
        </div>
    );
}
