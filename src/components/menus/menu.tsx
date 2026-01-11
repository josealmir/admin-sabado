

export const Menu = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
    );
}   