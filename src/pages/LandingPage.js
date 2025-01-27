import React, { Component } from 'react'

import Header from "parts/Header";

import landingPage from 'json/landingPage.json'
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
      <Header {...this.props}></Header>
      <Hero refMostPicked={this.refMostPicked} data={landingPage} />
      <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
      <Categories data={landingPage.categories}></Categories>
      <Testimony data={landingPage.testimonial}></Testimony>
      <Footer />
      </>
    )
  }
}