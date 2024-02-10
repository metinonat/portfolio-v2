import { useState } from "react";
import PROFILE from "@/utils/profile";
import { Project } from "@/types/profile";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const numberOfItems =
    showMore && PROFILE.projects.length ? PROFILE.projects.length : 6;
  return (
    <>
      <div className="content-wrapper">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {PROFILE.projects?.slice(0, numberOfItems).map((project: Project) => (
            <div className="my-5">
              <div className="max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <img
                  className="h-36 object-cover mx-auto my-auto"
                  src={project.image ?? "/images/default.jpg"}
                  alt={project.title}
                  onClick={() =>
                    project.url ? window.open(project.url, "_blank") : null
                  }
                />
                <div className="h-45 px-6 py-4">
                  <div
                    className="font-bold text-xl mb-2 hover:text-sky-700"
                    onClick={() =>
                      project.url ? window.open(project.url, "_blank") : null
                    }
                  >
                    {project.title}
                  </div>
                  <div className="text-gray-700 ">{project.description}</div>
                </div>
                <div className="flex justify-center gap-6">
                  {project.url && (
                    <button
                      onClick={() => window.open(project.url, "_blank")}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      View
                    </button>
                  )}
                  {project.source && (
                    <button
                      onClick={() => window.open(project.source, "_blank")}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Source
                    </button>
                  )}
                </div>
                <div className="px-6 pt-4 pb-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showMore && PROFILE.projects.length > 6 && (
          <div className="flex justify-center my-12">
            <button
              onClick={() => setShowMore(true)}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
