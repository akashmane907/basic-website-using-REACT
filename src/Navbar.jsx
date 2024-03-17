/* import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Site-Name</Link>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} className={isActive ? "active-link" : ""}>
                {children}
            </Link>
        </li>
    );
}
 */

import { Link, useMatch,useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Site-Name</Link>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props} className={isActive ? "active-link" : ""}>
          {children}
        </Link>
      </li>
    );
  }
  