import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="portal">
            <header className="header">
                <Link to="/" className="branding-link">
                    <h1>kuvi.app</h1>
                </Link>
                <p className="tagline">Open source web apps and native utilities built for privacy and performance</p>

                <nav className="nav-menu">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/category/transfer"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Transfer
                    </NavLink>
                    <NavLink
                        to="/category/audio"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Audio
                    </NavLink>
                    <NavLink
                        to="/category/tools"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        System
                    </NavLink>
                </nav>
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
