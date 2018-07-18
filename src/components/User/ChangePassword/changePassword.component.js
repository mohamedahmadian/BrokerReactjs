import React, { Component } from 'react';
import ChangePassword from './changePassword.html';
import ChangePasswordService from './changePassword.service';
import iziToast from 'izitoast';

export default class ChangePasswordComponent extends Component {
  constructor() {
    super();

    this.ChangeUserPassword = this.ChangeUserPassword.bind(this);
    this.state = { newPass: '', newPassConfirm: '', newPass: '' };
    this.updateState = this.updateState.bind(this);
  }

  ChangeUserPassword() {
    const { newPass, newPassConfirm, currentPass } = this.state;
    if (!newPass || !newPassConfirm || !currentPass) {
      iziToast.error({
        message: 'لطفا کلیه فیلدهای مرتبط را وارد نمایید'
      });
      // alert('لطفا رمزهای عبور مربوطه را وارد نمایید');
      return;
    }
    if (newPass != newPassConfirm) {
      iziToast.error({
        message: 'رمزعبور جدید با تکرار ان مطابقت ندارد'
      });
      return;
    }
    ChangePasswordService.changePass(currentPass, newPass).then(res => {
      if (res.success) {
        iziToast.success({
          message: 'رمز عبور شما با موفقیت تغییر پیدا کرد'
        });
      } else
        iziToast.error({
          message: res.message
        });
    });
  }
  updateState(info) {
    this.setState({
      newPass: info.newPass,
      currentPass: info.currentPass,
      newPassConfirm: info.newPassConfirm
    } , () => { this.ChangeUserPassword(); });
  }

  render() {
    return <ChangePassword updateState={this.updateState} />;
  }
}
