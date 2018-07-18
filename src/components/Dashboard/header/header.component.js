import React, { Component } from 'react';
import Header from './header.html';
import { AboutService } from './../../About/about.service';

export default class HeaderComponent extends Component {
  constructor() {
    super();
    this.state = { info: '' };
  }
  componentDidMount() {
    AboutService.sub.subscribe((p) => {
        alert(p);
    });

  }
  logout() {
    localStorage.clear();
    window.location = '/Login';
  }

  render() {
    return <Header logout={this.logout} />;
  }
}
