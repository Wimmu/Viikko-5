import {Link, Outlet} from "react-router-dom";

const Layout = () => {
  return (
  <div>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/upload">Upload</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      Copyright 2024
    </footer>
  </div>
  );
}

export default Layout;
