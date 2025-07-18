import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails.json";
import Testimony from "parts/Testimony";


export default class DetailsPage extends Component { 
    componentDidMount() {
        window.title ="Details Page";
        window.scrollTo(0, 0);
    }
    
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (    
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">     
                <PageDetailDescription data={ItemDetails} />
            </div>
            <div className="col-5">
               <BookingForm ItemDetails={ItemDetails}></BookingForm>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories}/>
        <Testimony data={ItemDetails.testimonial}/>
        <Footer />
      </>
    );
  }
}
