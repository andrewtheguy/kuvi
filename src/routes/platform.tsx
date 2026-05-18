import { Globe } from "lucide-react";
import {
  projects,
  categories,
  type PlatformId,
} from "../data";
import type { Route } from "./+types/platform";

const SITE_URL = "https://kuvi.app";
const OG_IMAGE = `${SITE_URL}/kuvi.svg`;

type PlatformCopy = {
  title: string;
  pageTitle: string;
  description: string;
};

function getPlatformCopy(type: string): PlatformCopy | null {
  if (type === "web") {
    const sample = projects
      .filter((p) => p.platform === "web")
      .map((p) => p.name)
      .slice(0, 4)
      .join(", ");
    return {
      title: "Web Applications",
      pageTitle: "Web Applications — kuvi.app",
      description: `Browser-based open-source tools that run instantly. Includes ${sample}.`,
    };
  }
  if (type === "standalone") {
    const sample = projects
      .filter((p) => p.platform === "standalone")
      .map((p) => p.name)
      .slice(0, 4)
      .join(", ");
    return {
      title: "Standalone Utilities",
      pageTitle: "Standalone Utilities — kuvi.app",
      description: `Native CLI tools and desktop applications for power users. Includes ${sample}.`,
    };
  }
  return null;
}

export function loader({ params }: Route.LoaderArgs) {
  const copy = getPlatformCopy(params.type);
  if (!copy) {
    throw new Response("Not Found", { status: 404 });
  }
  return { type: params.type as PlatformId, copy };
}

export const meta: Route.MetaFunction = ({ data, params }) => {
  const copy = data?.copy ?? getPlatformCopy(params.type);
  if (!copy) {
    return [{ title: "Not Found — kuvi.app" }];
  }
  const url = `${SITE_URL}/platform/${params.type}`;
  return [
    { title: copy.pageTitle },
    { name: "description", content: copy.description },
    { property: "og:title", content: copy.pageTitle },
    { property: "og:description", content: copy.description },
    { property: "og:url", content: url },
    { property: "og:image", content: OG_IMAGE },
    { name: "twitter:title", content: copy.pageTitle },
    { name: "twitter:description", content: copy.description },
    { name: "twitter:image", content: OG_IMAGE },
    { tagName: "link", rel: "canonical", href: url },
  ];
};

export default function PlatformView({ loaderData }: Route.ComponentProps) {
  const { type, copy } = loaderData;

  const activeProjects = projects.filter((p) => p.platform === type);
  const activeCategoryIds = Array.from(
    new Set(activeProjects.map((p) => p.category)),
  );
  const displayCategories = categories.filter((c) =>
    activeCategoryIds.includes(c.id),
  );

  return (
    <div>
      <div className="section-header">
        <h2>{copy.title}</h2>
        <p>
          {type === "web"
            ? "Browser-based tools that run instantly."
            : "Native CLI tools and desktop applications for power users."}
        </p>
      </div>

      {displayCategories.map((category) => {
        const categoryProjects = activeProjects.filter(
          (p) => p.category === category.id,
        );

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
                        <Globe size={16} style={{ marginLeft: "8px" }} />
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
