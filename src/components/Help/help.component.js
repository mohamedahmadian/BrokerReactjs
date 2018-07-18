import React, { Component } from 'react';
import Help from './help.html';
import { General } from '../../utils/General';
import { HelpService } from './help.service';

export default class HelpComponent extends Component {
  constructor() {
    super();
    this.state = { help: [] };
  }

  componentDidMount() {
    HelpService.getHelp().then(help => this.setState({ help: help.data.items }));
  }



  

  render() {
    return <Help {...General.AppDefaultSetting} model={this.state.help} />;
  }

}
