import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import Counter from './counter'

export default class Profile extends Component {
  render() {
    return (
        <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.img} />
      <Card.Body>
        <Card.Title> checkpoint's card </Card.Title>
        <Card.Text>
         this is a card
        </Card.Text>
        <Counter/>

      </Card.Body>
    </Card>
      </div>

    )
  }
}