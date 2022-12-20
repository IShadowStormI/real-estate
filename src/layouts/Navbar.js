import { HashLink as Link } from "react-router-hash-link"
import { useNavigate } from "react-router-dom"
import "./navbar.css"
import logo from "../assets/svg/built-brand.svg"
import { Button } from "../components/Button"

export const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className="navbar container">
            <div className="built-logo">
                <img src={logo} alt="brand-logo" />
            </div>
            <div className="navbar-links">
                <Link to="/"> Home </Link>
                <Link to="/#contact"> Contact </Link>
                <Link to="/#browse-homes"> Browse Homes </Link>
                <Link to="/sale-house"> Sale House </Link>
            </div>
            <div className="navbar-buttons">
                <Button onClick={()=>navigate("/")} name="Sign Up"/>
            </div>
        </div>
    )
}