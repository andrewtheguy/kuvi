import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import type { Route } from "./+types/root";
import indexStylesheet from "./index.css?url";
import appStylesheet from "./App.css?url";
import { SITE_URL } from "../site.config.mjs";

const SITE_NAME = "kuvi.dev";
const DEFAULT_TITLE = "kuvi.dev — open-source web apps and native utilities";
const DEFAULT_DESCRIPTION =
  "A collection of open source web apps and native utilities. Secure transfer, audio tooling, and productivity utilities.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/kuvi.svg`;

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/kuvi.svg" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap",
  },
  { rel: "stylesheet", href: indexStylesheet },
  { rel: "stylesheet", href: appStylesheet },
];

export const meta: Route.MetaFunction = () => [
  { title: DEFAULT_TITLE },
  { name: "description", content: DEFAULT_DESCRIPTION },
  { property: "og:site_name", content: SITE_NAME },
  { property: "og:type", content: "website" },
  { property: "og:title", content: DEFAULT_TITLE },
  { property: "og:description", content: DEFAULT_DESCRIPTION },
  { property: "og:url", content: `${SITE_URL}/` },
  { property: "og:image", content: DEFAULT_OG_IMAGE },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: DEFAULT_TITLE },
  { name: "twitter:description", content: DEFAULT_DESCRIPTION },
  { name: "twitter:image", content: DEFAULT_OG_IMAGE },
  { tagName: "link", rel: "canonical", href: `${SITE_URL}/` },
];

function navLinkClass(currentPath: string, target: string, exact = false) {
  const active = exact ? currentPath === target : currentPath.startsWith(target);
  return `nav-link${active ? " active" : ""}`;
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="portal">
          <header className="navbar">
            <div className="navbar-container">
              <a href="/" className="navbar-brand">
                <img src="/kuvi.svg" alt="Kuvi" className="navbar-logo" />
                <span className="navbar-title">kuvi.dev</span>
              </a>

              <nav className="nav-menu">
                <a href="/" className={navLinkClass(pathname, "/", true)}>
                  Home
                </a>
                <a href="/platform/web" className={navLinkClass(pathname, "/platform/web")}>
                  Web Apps
                </a>
                <a href="/platform/standalone" className={navLinkClass(pathname, "/platform/standalone")}>
                  Standalone
                </a>
              </nav>
            </div>
          </header>

          <main className="content">{children}</main>

          <footer className="footer">
            <p>All tools mentioned on the website are open source.</p>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
