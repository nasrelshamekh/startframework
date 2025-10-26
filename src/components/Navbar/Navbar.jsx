import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg nav-bg py-4 fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand fs-2 fw-bolder text-white" to="/home">START FRAMEWORK</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-white ms-auto">
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-white fs-6 fw-bolder" aria-current="page" to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-white fs-6 fw-bolder" to="/portfolio">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-white fs-6 fw-bolder" to="/contact">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
