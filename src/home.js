import React from 'react';
import { Header } from './header/header';
import { NewEvents } from './newEvents/newEvents'
import { Slider } from './slider/slider'

export class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Slider />
        <NewEvents />
      </div>
    );
  }
}