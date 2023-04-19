import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="grid w-screen h-screen gap-5 text-center place-content-center"
    >
      <h1 className="text-xl font-bold">404</h1>
      <p>This page doesn't exists.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
