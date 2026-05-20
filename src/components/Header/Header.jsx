function Header() {
  return (
    <header className="header">
      <h1>KWU LIKELION THEATER</h1>

      <div className="search-box">
        <input type="text" placeholder="검색어를 입력하세요" />
        <span>⌕</span>
      </div>

      <button className="menu-button">☰</button>
    </header>
  );
}

export default Header;