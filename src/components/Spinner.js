import React, { Component } from 'react'
import loading from "./loading.gif"
import "../App.css"

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
        <img  src={loading} alt="laoding" />
      </div>
    )
  }
}

export default Spinner
