import { type JSX } from "react";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <div className="content-wrapper">
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 sm:pb-24 lg:px-8">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-12">
          <p className="text-base font-semibold leading-8 text-indigo-600">
            404
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            This page does not exist
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            You might be misled, try something else.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-indigo-600"
          >
            <span aria-hidden="true">&larr;</span>
            &nbsp;Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
