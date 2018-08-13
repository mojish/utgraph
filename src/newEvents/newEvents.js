import React from 'react';
import './newEvents.css';
import { Link } from 'react-router-dom';
import EventImage from '../images/event.png';

export class NewEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/event', {
      method: 'GET',
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (responseJson) {
        return responseJson.data;
      }).then(function (events) {
        this.setState({ events: events });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <section>
      </section>
    );
  }
}
