import React, { Component } from 'react';
import About from './about.html';
import axios from 'axios';
import { AboutService } from './about.service';
import { General } from '../../utils/General';



export default class AboutComponent extends Component {
  constructor() {
    super();
    this.state = { about: {} };
  }

  componentDidMount() {
    AboutService.getAbout().then(about =>
      this.setState({ about: about.items[0] })
    );
  }

  render() {
    return <About model={this.state.about} {...General.AppDefaultSetting} />;
  }
}
