import React, { Component } from "react"
import banner from "../../images/banner.jpg"

export default class Hero extends Component {
  render() {
    return (
      <section>
        <img src={banner} alt="" />
      </section>
    )
  }
}
