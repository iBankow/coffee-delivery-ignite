import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Skeleton } from "../components/Skeleton";
import { Home } from "../pages/home";

function Routes() {
    return (
        <ReactRoutes>
            <Route element={<Skeleton />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
            </Route>
        </ReactRoutes>
    );
}

export { Routes };
