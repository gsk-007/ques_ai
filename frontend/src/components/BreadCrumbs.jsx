import { Link, useLocation, useParams } from "react-router";
import { HiSlash } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useProject } from "../contexts/ProjectContext";
import { usePodcast } from "../contexts/PodcastContext";

// Optional: Map for customizing labels or hiding certain segments
const labelMap = {
  projects: "Projects",
  create: "Create",
  widget: "Widget",
  upgrade: "Upgrade",
  myaccount: "Account Settings",
  podcast: "Edit Podcast",
  "": "Dashboard",
};

const Breadcrumbs = ({ className = "" }) => {
  const location = useLocation();
  const params = useParams();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const [projectName, setProjectName] = useState(null);
  const [podcastTitle, setPodcastTitle] = useState(null);

  const { projects } = useProject();
  const { podcasts } = usePodcast();

  useEffect(() => {
    if (params.projectId && params.projectId !== "undefined") {
      const project = projects.find(
        (project) => project._id === params.projectId
      );
      setProjectName(project.name);
    }
    if (params.podcastId && params.podcastId !== "undefined") {
      const podcast = podcasts.find(
        (podcast) => podcast._id === params.podcastId
      );
      setPodcastTitle(podcast.name);
    }
  }, [params.projectId, params.podcastId]);

  const getSegmentLabel = (segment) => {
    if (segment === params.projectId && projectName) return projectName;
    if (segment === params.podcastId && podcastTitle) return podcastTitle;
    return labelMap[segment] || decodeURIComponent(segment);
  };

  return (
    <nav
      className={`text-sm text-gray-600 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap items-center space-x-2">
        <li>
          <Link to="/" className="text-2xl text-gray-800  hover:underline">
            Home
          </Link>
        </li>

        {pathnames.map((segment, index) => {
          const fullPath = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          const label = getSegmentLabel(segment);

          return (
            <li key={fullPath} className="flex items-center">
              <HiSlash className="mx-1 h-4 w-4 text-gray-400" />
              {isLast ? (
                <span className="text-2xl text-blue-600 font-medium">
                  {label}
                </span>
              ) : (
                <Link
                  to={fullPath}
                  className="text-2xl text-gray-800 hover:underline"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
