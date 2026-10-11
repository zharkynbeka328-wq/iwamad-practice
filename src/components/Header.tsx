import { useLikes } from "../context/LikesContext";
import logo from "../assets/logo.svg";

type HeaderProps = {
  title: string;
  subtitle: string;
};

function Header({ title, subtitle }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <div className="header-brand">
        <img className="header-logo" src={logo} alt="Logo" />

        <div className="header-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <p className="header-likes">Likes: {likes}</p>
    </header>
  );
}

export default Header;