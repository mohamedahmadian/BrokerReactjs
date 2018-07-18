import React, { Component } from 'react';

import Footer from './footer.html';
import FooterService from './footer.service';
import { General } from '../../../utils/General';
export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { footer: { backupPhoneOffice: 0 } };
    this.getFooter = this.getFooter.bind(this);
  }
  getFooter() {
    FooterService.GetFooter().then(footer => {
      this.setState({ footer: footer.data });
      General.AppDefaultSetting = footer.data;
    });
  }
  componentDidMount() {
    this.getFooter();
  }
  render() {
    return <Footer footer={this.state.footer} />;
  }
}
