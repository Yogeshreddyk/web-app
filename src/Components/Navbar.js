import React from 'react';
import logo from '../assests/logo.png';
// import { Link } from 'react-router-dom';
import '../Components/styles/Navbar.css';
// import { Envelope } from 'bootstrap-icons-react';

const Navbar = () => {
  //   const [showLinks, setShowLinks] = useState(false);
  //   const click = () => {
  //     setShowLinks(!showLinks);
  //   };
  return (
    <div className="navbar">
      <div
        className="leftSide"
        //   id={showLinks ? 'open' : 'close'}
      >
        <img src={logo} alt="" />
        {/* <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About us </Link>
          <Link to="/contact"> Contact </Link>
        </div> */}
      </div>
      <div className="rightSide">
        <div>Home</div>
        <div>Products&Services</div>
        <div>Abous us</div>
        <div>Support</div>
        <div>Contact us</div>
        <i class="bi bi-envelope"></i>
        {/* <Envelope color="blue" size={32} /> */}
        {/* <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About us </Link>
        <Link to="/contact"> Contact </Link> */}
        {/* <button>
          <ReorderIcon onClick={() => click()} />
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
