import React from "react";
import { Link } from "react-router-dom";
import MyAcount from "./MyAcount";
import "./homepage.css";
class HomeHeader extends React.Component {
  state = { isVisible: false, flag: 0 };

  showSubMenu = () => {
    if (this.state.flag === 0) {
      this.setState({ isVisible: true });
      this.setState({ flag: 1 });
    } else {
      this.setState({ isVisible: false });
      this.setState({ flag: 0 });
    }
  };
  render() {
    return (
      <>
        <div id="navbar">
          <Link to="#">Logo</Link>
          <Link to="#" onClick={this.showSubMenu}>
            My Account
          </Link>
        </div>
        {this.state.isVisible ? <MyAcount /> : null}
      </>
    );
  }
}

export default HomeHeader;
