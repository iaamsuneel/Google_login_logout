const Navbar = () => {
    return (<> <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">CRUD-REACT-REDUX</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Login</a>

                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/adddata">AddData</a>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>)
}
export default Navbar