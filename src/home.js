import React from 'react';
import { Header } from './header/header';
import { NewEvents } from './newEvents/newEvents'
import { Login } from './login/login';

export class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Login />
        {/* <NewEvents /> */}
      </div>
    );
  }
}