import { Link } from "react-router-dom";
import styles from "./index.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <span>BrainStorm</span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/diferente">Uso Diferente</Link>
        <Link to="/inviavel">Produto Inviável</Link>
        <Link to="/maluco">Produto Maluco</Link>
      </nav>
    </header>
  );
}

export default Header;
