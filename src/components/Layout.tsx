import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <>
            <header>
                <Link to="/">Hem</Link>
            </header>
                <Outlet />
        </>
    )
}