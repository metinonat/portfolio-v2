import { Link, useLocation } from "react-router-dom";
import { NAVIGATION } from "../utils/constants";
import { classNames, isCurrent } from "../utils/helpers";

export default function Header(): JSX.Element {
  const { pathname } = useLocation();
  return (
    <>
      <header className="header justify-center bg-slate-50 sm:gap-x-4 border-b border-gray-200">
        <div className="flex justify-center items-center gap-x-4 lg:gap-x-6">
          <ul className="inline-flex text-gray-500 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer">
            {NAVIGATION.map((item) => (
              <Link
                to={item.href}
                className={classNames(
                  isCurrent(item.href, pathname)
                    ? "bg-gray-50 text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                )}
              >
                <item.icon
                  className={classNames(
                    isCurrent(item.href, pathname)
                      ? "text-indigo-600"
                      : "text-gray-400 group-hover:text-indigo-600",
                    "h-6 w-6 shrink-0"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
