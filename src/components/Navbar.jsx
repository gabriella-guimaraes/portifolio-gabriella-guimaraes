import '../style/Navbar.css';
import { Link } from "react-router-dom";
import logo from '../logo.jpg';
// import { useHistory } from "react-router-dom";

function Navbar(){
  // const history = useHistory();

  // const about = (event) => {
  //   event.preventDefault();
  //   history.push("/about");
  // }

  return(
    <div className="navbar">
      <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" className="chackbtn">
          <i className="fas fa-bars"></i>
        </label>
        <img src={logo} className="logo" alt="gabi logo" />
        <ul className="menuItens">
        <li>
          <Link className="active" to="/">Home</Link>
        </li>
        <li>
          <Link className="active" to="#about">About</Link>
        </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar