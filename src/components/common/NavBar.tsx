import "../../scss/components/NavBar.css";

export default function NavBar() {
    return (
        <>
            <nav className="navbar bg-info bg-gradient navbar-expand-lg py-4 lh">
                <div className="container-fluid">
                    <a className="navbar-brand fs-3 fw-semibold" href="#">Movie List</a>
                    <div className="collapse navbar-collapse px-3">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link fs-5">Genres</a></li>
                            <li className="nav-item"><a className="nav-link fs-5">Other</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}