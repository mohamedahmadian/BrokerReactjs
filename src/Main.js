import React, { Component } from 'react';
import { Redirect, Link, Route } from 'react-router-dom';
import Login from './components/Login';
import AuthService from './utils/AuthService';
import MainLayout from './components/MainLayout';

export default class Main extends Component {
  constructor() {
    super();
    AuthService.getTokenFromServer();
  }
  componentDidMount() {}
  render() {
    if (this.props.location.pathname !== '/Login') return <MainLayout />;
    else return null;
  }
}

