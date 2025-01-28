import React from 'react';
import Button from 'elements/Button';
import { motion } from "framer-motion";

export default function MostPicked(props) {
  return (
     <motion.section
          className="container pt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
    <section className="container" ref={props.refMostPicked}>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
                key={index}
              >
                <div className="card card-featured">
                  <div className="tag">
                    ${item.price}
                    <span className="font-weight-light"> per {item.unit}</span>
                  </div>
                  <figure className="img-wrapper">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      className="stretched-link d-block text-white"
                      href={`/properties/${item._id}`}
                    >
                      <h5>{item.name}</h5>
                    </Button>
                    <span>
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </section>
    </motion.section>
  );
}
