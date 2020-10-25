const NavBar = () => {
  return (
    <div style={{ backgroundColor: '#EBEBEB' }}>
      <ul className="nav d-flex justify-content-between border">
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">
            &lt; Back
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
