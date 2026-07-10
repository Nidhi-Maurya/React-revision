import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();

  return (
    <main className="page-shell">
      <div className="state-panel">
        <span className="state-icon">!</span>
        <h1>OOPS! Something went wrong.</h1>
        <p>Please try again later.</p>
        {(err?.status || err?.statusText) && (
          <p>
            {err.status} : {err.statusText}
          </p>
        )}
      </div>
    </main>
  );
}
