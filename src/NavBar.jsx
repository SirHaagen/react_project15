
export const NavBar = ({ routing }) => {

  const handlePage1 = () => routing("page 1");
  const handlePage2 = () => routing("page 2");

  return (
    <div className="navbar">
      <p>My App</p>
      <div className="navbar__links">
        <div id="page1" onClick={handlePage1}>page-1</div>
        <div id="page2" onClick={handlePage2}>page-2</div>
      </div>
    </div>
  )
}