import React from "react";
import History from "../History/History";
import { connect } from "react-redux";
class Homepage extends React.Component {
  componentDidMount() {
    !this.props.isLogin
      ? History.push("/login")
      : History.push("/Homepage/Homepage");
  }
  render() {
    return <div>Hola soy el home dude</div>;
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.newUser.isLogin
  };
};

export default connect(
  mapStateToProps,
  {}
)(Homepage);
