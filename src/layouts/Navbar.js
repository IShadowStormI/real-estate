import { HashLink as Link } from "react-router-hash-link"

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/"> Home </Link>
            <Link to=""> Contact </Link>
            <Link to=""> Browse Homes </Link>
            <Link to="/sale-house"> Sale House </Link>
        </div>
    )
}