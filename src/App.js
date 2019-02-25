import React, { Component } from 'react'

export default class App extends Component {
  state ={
    astros: {}
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(astros => this.setState({ astros }))
  }

  render(){
    console.log(this.state.astros)
    return(
      <h1>tacos</h1>
    )
  }
}
