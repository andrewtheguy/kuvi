import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="portal">
            <header className="header">
                <h1>kuvi.app</h1>
                <p className="tagline">Open source web apps and native utilities built for privacy and performance</p>

                <nav className="nav-menu">
                    <NavLink
                        to="/web"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Web Apps
                    </NavLink>
                    <NavLink
                        to="/utilities"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Utilities
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
