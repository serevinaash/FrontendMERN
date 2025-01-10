import React, { Component } from 'react'

import Header from "parts/Header";

import landingPage from 'json/landingPage.json'
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked'

export default class LandingPage extends Component {
  render() {
    return (
      <>
      <Header {...this.props}></Header>
      <Hero data={landingPage} />
      <MostPicked data={landingPage.mostPicked} />


      </>
    )
  }
}
