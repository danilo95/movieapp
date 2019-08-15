import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { emailValidation, required } from "../../Validation";
import { loginUser,defaultError,loading } from "../Actions/Index";
import Loading from "../Loading/Loading";
import History from "../History/History";
import Modal from "../Modal/Modal";
import "./login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { showModal: false };
  }
  componentDidMount() {
    
    !this.props.isLogin
      ? History.push("/login")
      : History.push("/Homepage/Homepage");
  }
  handlerModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.props.defaultError();
    this.setState({ showModal: false });
  };
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div className="error_alert">
            <i className="fa fa-exclamation-triangle" aria-hidden="true">
              -
            </i>
            {error}
          </div>
        </div>
      );
    }
  }

  renderInput = ({ input, meta, label, type, className }) => {
    return (
      <div className="field">
        <input
          {...input}
          placeholder={label}
          type={type}
          className={className}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log('loading',this.props.loadingState)
    this.props.loading()
    this.props.loginUser(formValues.email, formValues.passwordSing);
    
  }
  render() {
    return (
      <>
        <div className="login-wrap">
          <div className="login-html">
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form"
            >
              <input type="radio" name="tab" className="sign-in" checked />
              <label htmlFor="tab-1" className="tab">
                Log In
              </label>
              <input type="radio" name="tab" className="sign-up" />
              <label htmlFor="tab-2" className="tab" />
              <div className="login-form">
                <div className="sign-in-htm">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Username
                    </label>
                    <Field
                      name="email"
                      type="email"
                      label="example@gmail.com"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <Field
                      name="passwordSing"
                      type="password"
                      label="*******"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>

                  <div className="group">
                    <input type="submit" className="button" value="Sign In" />
                  </div>
                  <div className="hr" />
                  {this.props.loadingState?<Loading/>:null}
                </div>
              </div>
            </form>
          </div>
        </div>
        {this.props.loginError.message
          ? (this.handlerModal,
            (
              <Modal
                title="Ups Something Goes Wrong!!"
                content={this.props.loginError.message}
                onDismiss={() => this.closeModal}
              />
            ))
          : null}
        }
      </>
    );
  }
}

const validate = ({ email, passwordSing }) => {
  const errors = {};
  errors.email = emailValidation(email);
  errors.passwordSing = required(passwordSing);
  return errors;
};

const mapStateToProps = state => {
  return {
    loginError: state.newUser.loginError,
    isLogin: state.newUser.isLogin,
    loadingState: state.newUser.loading
  };
};
export default connect(
  mapStateToProps,
  { loginUser,defaultError,loading }
)(
  reduxForm({
    form: "loginForm",
    validate
  })(Login)
);
