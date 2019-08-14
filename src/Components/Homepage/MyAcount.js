import React from "react";
import { connect } from "react-redux";
import { reset } from "../Actions/Index";
const MyAcount = props => {
  return (
    <div class="wrap">
      <div class="card-container">
        <div class="top-card" />

        <div class="circle" />
        <img
          class="image-class"
          src="https://image.flaticon.com/icons/svg/149/149071.svg"
          alt="avatar"
        />
        <p class="title-text">{props.email}</p>
      </div>
      <div className="button-section">
        <input
          type="button"
          className="btn-log-out"
          value="Log Out"
          onClick={props.reset}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    email: state.newUser.email
  };
};

export default connect(
  mapStateToProps,
  { reset }
)(MyAcount);
