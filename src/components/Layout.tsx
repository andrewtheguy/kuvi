import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="portal">
            <header className="header">
                <Link to="/" className="branding-link">
                    <h1>kuvi.app</h1>
                </Link>
                <p className="tagline">A collection of open source web apps and native utilities</p>

                <nav className="nav-menu">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/platform/web"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Web Apps
                    </NavLink>
                    <NavLink
                        to="/platform/standalone"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Standalone
                    </NavLink>
                </nav>
            </header>

            <main className="content">
                <Outlet />
            </main>

            <footer className="footer">
                <p>All tools mentioned on the website are open source.</p>
            </footer>
        </div>
    );
}
