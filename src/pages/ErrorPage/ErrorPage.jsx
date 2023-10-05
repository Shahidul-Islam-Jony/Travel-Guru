import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div>
            <p className="text-3xl text-center mt-10 font-bold">{error.statusText || error.message}</p>
            {/* <p className="text-3xl text-center mt-10 font-bold">{error.message}</p> */}
            {
                error.status === 404 && <p className="text-3xl text-center mt-10 font-bold">Page Not Found</p>
            }

            <div className="text-center mt-8">
                <Link to="/" className="btn btn-secondary px-6">Go Back</Link>
            </div>

        </div>
    );
};

export default ErrorPage;