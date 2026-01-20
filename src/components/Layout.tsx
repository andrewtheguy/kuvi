import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="portal">
            <header className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-brand">
                        <img src="/kuvi.svg" alt="Kuvi" className="navbar-logo" />
                        <span className="navbar-title">kuvi.app</span>
                    </Link>

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
                </div>
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
