import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <Link id="link" to="/">
        Home
      </Link>
      <Link id="link" to="/articles"> Articles</Link>
      <Link id="link" to="/topics"> Topics </Link>
    </nav>
  );
}
