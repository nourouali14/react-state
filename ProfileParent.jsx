import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Profile from './Profile'


export default class ProfileParent extends Component {
constructor(props){
  super(props)
  this.state=({
    show:false
  })
}
toggle=()=>{
  this.setState({show:!this.state.show})
}


  render() {
    return (
      <div>
        <Button onClick={this.toggle} >show</Button>
{ this.state.show? <Profile img="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" name="Ingenieur" bio=" etudiant et ingenieur a fst" />
: null}        
        </div>
    )
  }
}