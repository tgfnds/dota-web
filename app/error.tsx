"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="self-center">
      <div className="card w-96 bg-error text-error-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Something went wrong!</h2>
          <p>{error.message}</p>
          <div className="mt-4 card-actions justify-end">
            <button onClick={reset} className="btn btn-neutral">
              Try again
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
