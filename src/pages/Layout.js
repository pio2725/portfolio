import { Outlet, Link } from "react-router-dom";
import "../css/layout.css";

const Layout = () => {
    return (
        <>
        <section id="header">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light">
                  <Link class="navbar-brand" to="/">Inno.</Link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navbar">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/study">Study</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/project">Project</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
          </div>
          </section>
        <Outlet />
        </>
    )
}

export default Layout;