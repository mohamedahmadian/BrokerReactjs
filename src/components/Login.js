import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FooterComponent from './Dashboard/Footer/footer.component';
import './../index.css';
import AuthService from './../utils/AuthService';
import iziToast from 'izitoast';
export default class Login extends Component {
  constructor() {
    super();
    this.state = { redirect: false, step: 1 };
    this.rederRedirect = this.rederRedirect.bind(this);
    this.mobile = React.createRef();
    this.password = React.createRef();
  }
  componentDidMount() {
    this.mobile.current.focus();
  }

  rederRedirect = () => {
    if (this.state.redirect) return <Redirect to="/" />;
  };

  loginStep1 = () => {
    AuthService.loginStep1(this.mobile.current.value).then(res => {
      debugger;
      if (res.success) {
        AuthService.setCustomerId(res.data.customerId);
        this.setState({ step: 2 });
      } else {
        iziToast.error({ message: 'اطلاعات وارد شده صحیح نمی باشد' });
      }
    });
  };

  loginStep2 = () => {
    AuthService.loginStep2(this.password.current.value).then(res => {
      debugger;
      if (res.success) {
        iziToast.success({ message: 'به سیستم خوش آمدید' });
        this.setState({ redirect: true });
      } else {
        iziToast.error({ message: 'اطلاعات وارد شده صحیح نمی باشد' });
      }
    });
  };
  handleIt = e => {
    if (e.key == 'Enter') {
      e.preventDefault();
      this.loginStep1();
    }
  };
  handlePassword = e => {
    if (e.key == 'Enter') {
      e.preventDefault();
      this.loginStep2();
    }
  };
  render() {
    const { step } = this.state;

    return (
      <div class="d-flex flex-column w-100 justify-content-center fullpage-height bgback">
        <main class="d-flex align-items-center h-100 mx-auto mt-auto w-30-xl w-40-lg w-50-md w-75-sm w-90">
          {this.rederRedirect()}
          {step == 1 && (
            <div className="card card-body my-5">
              <header className="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center mb-5">
                <img
                  src="assets1/image/icon/iphone.svg"
                  className="ml-3 my-2  animated jello animation-hover"
                  width="75"
                  height="75"
                />
                <h1 className="h5 my-2 text-md-right text-center">
                  <span className="d-block">ثبت شماره همراه</span>
                  <small className="text-muted font-weight-light">
                    ورود به سامانه پاتوقی
                  </small>
                </h1>
              </header>

              <form>
                <div className="form-group mb-3">
                  <div className="input-required">
                    <input
                      ref={this.mobile}
                      type="text"
                      className="form-control"
                      name="mobilePhone"
                      placeholder="09xxxxxxxxx"
                      onKeyPress={this.handleIt}
                    />
                    <span />
                  </div>
                  <small id="emailHelp" className="form-text text-muted">
                    <i className="la la-exclamation-triangle la-fw la-lg" /> پس
                    از ثبت شماره به صفحه ثبت نام یا ورود انتقال داده می شوید.
                  </small>
                </div>

                <button
                  id="submitBtnStep1"
                  type="button"
                  className="btn btn-info btn-block my-2"
                  onClick={this.loginStep1}
                  data-loading-text="<i className='fa fa-spinner fa-spin '></i> لطفا منتظر بمانید"
                >
                  <i className="la la-check la-lg la-fw" />
                  ورود به سامانه
                </button>
              </form>
            </div>
          )}
          {step == 2 && (
            <div className="my-5 w-100">
              <div className="card card-body my-2">
                <header className="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center mb-5">
                  <img
                    src="assets1/image/icon/lock.svg"
                    className="ml-3 my-2 animated jello animation-hover"
                    width="75"
                    height="75"
                  />
                  <h1 className="h5 my-2 text-md-right text-center">
                    <span className="d-block">ورود به سامانه</span>
                    <small className="text-muted font-weight-light">
                      اهراز حویت کاربران پاتوقی
                    </small>
                  </h1>
                </header>
                <form>
                  <div className="form-group mb-3">
                    <div className="input-required">
                      <input
                      autoFocus 
                      onKeyPress={this.handlePassword}
                        ref={this.password}
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="رمز عبور شما ..."
                      />
                      <span />
                    </div>
                  </div>
                  <button
                    id="submitBtnStep1"
                    type="button"
                    className="btn btn-info btn-block my-2"
                    onClick={this.loginStep2}
                    data-loading-text="<i className='fa fa-spinner fa-spin '></i> لطفا منتظر بمانید"
                  >
                    <i className="la la-check la-lg la-fw" />
                    ورود به سامانه
                  </button>
                </form>
              </div>

              <p className="m-0">
                <span>
                  <i className="la la-refresh la-lg la-fw" /> رمز عبور خود را
                  فراموش کرده اید؟{' '}
                </span>
                <a>بازیابی رمز عبور</a>
              </p>
            </div>
          )}
        </main>
        <FooterComponent />
      </div>
    );
  }
}
