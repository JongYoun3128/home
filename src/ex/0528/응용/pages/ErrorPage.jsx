import { useRouteError } from "react-router";

function ErrorPage() {
    const error = useRouteError()
    return (
        <div id="error-page">
            <h1>😃Oops!🙃</h1>
            <p>sorry, an unexpeted error has occurred.</p>
            <p>
                <i>{error.statusText || error.messge}</i>
            </p>
            
        </div>
    );
}

export default ErrorPage;