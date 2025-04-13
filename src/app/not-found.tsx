import Link from "next/link";

export default function NotFound() {
  return (
    <div className="size-full flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-4">
        Planet not found
      </h2>
      <p className="text-gray-500 mt-2 max-w-md">
        The planet you are looking for seems to have deviated from its orbit.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Back to Solar System
      </Link>
    </div>
  );
}
