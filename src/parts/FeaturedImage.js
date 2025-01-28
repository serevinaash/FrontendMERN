import React from "react";
import { motion } from "framer-motion";

export default function FeaturedImage({ data }) {
  return (
    <motion.section
          className="container pt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 * index }}
              >
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img
                      className="img-cover"
                      src={item.url}
                      alt={item._id}
                    />
                  </figure>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
    </motion.section>
  );
}
