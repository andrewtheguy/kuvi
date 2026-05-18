import { platforms } from "../data";
import type { Route } from "./+types/home";

const SITE_URL = "https://kuvi.app";
const TITLE = "kuvi.app — open-source web apps and native utilities";
const DESCRIPTION =
  "A collection of open source web apps and native utilities for secure transfer, audio, and productivity.";
const OG_IMAGE = `${SITE_URL}/kuvi.svg`;

export const meta: Route.MetaFunction = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: `${SITE_URL}/` },
  { property: "og:image", content: OG_IMAGE },
  { name: "twitter:title", content: TITLE },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:image", content: OG_IMAGE },
  { tagName: "link", rel: "canonical", href: `${SITE_URL}/` },
];

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="hero-title">kuvi.app</h1>
        <p className="hero-tagline">
          A collection of open source web apps and native utilities
        </p>
      </div>

      <div className="categories-grid">
        {platforms.map((platform) => (
          <a
            key={platform.id}
            href={`/platform/${platform.id}`}
            className="category-card"
          >
            <div className="category-image-container">
              <img
                src={platform.image}
                alt={platform.title}
                className="category-image"
              />
              <div className="category-overlay"></div>
            </div>
            <div className="category-content">
              <h2>{platform.title}</h2>
              <p>{platform.description}</p>
            </div>
            <div className="category-arrow">→</div>
          </a>
        ))}
      </div>
    </div>
  );
}
