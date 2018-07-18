import React from 'react';

const ChangePassword = ({updateState}) => {
  let newPass, newPassConfirm, currentPass;

  function ChangeUserPassword() {
    updateState({
      newPass: newPass.value,
      currentPass: currentPass.value ,
      newPassConfirm : newPassConfirm.value
    });
  }
  return (
    <div>
      <header className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <img
            src="assets1/image/icon/lock.svg"
            className="ml-2"
            width="50"
            height="50"
            alt="راهنمای سامانه"
          />
          <h1 className="h4 text-primary mb-0">تغییر رمز</h1>
        </div>
      </header>
      <section>
        <form className="card">
          <header className="card-header border-warning bg-warning">
            <div className="clearfix d-block py-4">&nbsp;</div>
          </header>

          <main className="card-body">
            <div className="text-center modal-avatar-margin mb-5">
              <img
                src="assets1/image/icon/safe.svg"
                className="rounded-circle border border-white mb-2 animation-hover animated rubberBand"
                width="100"
                height="100"
              />
              <h5 className="m-0">تغییر رمز حساب کاربری</h5>
            </div>

            <div className="d-flex flex-column justify-content-center w-100 my-4">
              <input
                id="password"
                style={{ display: 'none' }}
                type="password"
                name="fakepasswordremembered"
              />

              <div className="col-xl-4 col-lg-6 col-md-8 col-sm-12 offset-xl-4 offset-lg-3 offset-md-2">
                <div className="form-group row">
                  <label className="col-md-3 col-form-label">رمز فعلی</label>
                  <div className="col-md-9">
                    <div className="input-group show_hide_password">
                      <input
                        id="l1"
                        type="password"
                        className="form-control"
                        name="currentPass"
                        ref={input => (currentPass = input)}
                        placeholder=""
                      />
                      <div className="input-group-append">
                        <a className="btn btn-light">
                          <i
                            className="la la-lg la-eye-slash"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-8 col-sm-12 offset-xl-4 offset-lg-3 offset-md-2">
                <div className="form-group row">
                  <label className="col-md-3 col-form-label">رمز جدید</label>
                  <div className="col-md-9">
                    <div className="input-group show_hide_password">
                      <input
                        type="password"
                        className="form-control"
                        name="newPass"
                        placeholder=""
                        ref={input => (newPass = input)}
                      />
                      <div className="input-group-append">
                        <a className="btn btn-light">
                          <i
                            className="la la-lg la-eye-slash"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-8 col-sm-12 offset-xl-4 offset-lg-3 offset-md-2">
                <div className="form-group row">
                  <label className="col-md-3 col-form-label">تکرار رمز</label>
                  <div className="col-md-9">
                    <div className="input-group show_hide_password">
                      <input
                        type="password"
                        className="form-control"
                        name="newPassConfirm"
                        ref={input => (newPassConfirm = input)}
                        placeholder=""
                      />
                      <div className="input-group-append">
                        <a className="btn btn-light">
                          <i
                            className="la la-lg la-eye-slash"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="card-footer">
            <div className="d-flex align-items-center justify-content-between">
              <button
                onClick={ChangeUserPassword}
                type="button"
                className="btn btn-success"
              >
                <i className="la la-check la-lg la-fw" />ذخیره اطلاعات
              </button>
            </div>
          </footer>
        </form>
      </section>
    </div>
  );
};
export default ChangePassword;
