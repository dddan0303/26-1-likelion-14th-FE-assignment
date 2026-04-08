import SearchBar from "../common/SearchBar";
import HamburgerMenu from "../common/HamburgerMenu";

function Header() {
  return (
    <header>
      <h1>Movie App</h1>
      <SearchBar />
      <HamburgerMenu />
    </header>
  );
}

export default Header;