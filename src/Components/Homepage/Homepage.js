import React from "react";
import History from "../History/History";
import { connect } from "react-redux";
import MovieList from '../MovieList/MovieList';
class Homepage extends React.Component {
  componentDidMount() {
    !this.props.isLogin
      ? History.push("/login")
      : History.push("/Homepage/Homepage");
  }
  render() {
    return <>
      <MovieList/>
    </>;
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
