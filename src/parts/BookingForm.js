import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import propTypes from "prop-types";
import Button from "elements/Button";
import { InputNumber, InputDate } from "elements/Form";

const BookingForm = ({ itemDetails }) => {
  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const navigate = useNavigate(); // Inisialisasi useNavigate

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(data.date.endDate);
    const countDuration = new Date(endDate - startDate).getDate();

    setData((prevData) => ({
      ...prevData,
      duration: countDuration,
    }));
  }, [data.date]);

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(
      startDate.setDate(startDate.getDate() + +data.duration - 1)
    );

    setData((prevData) => ({
      ...prevData,
      date: {
        ...prevData.date,
        endDate: endDate,
      },
    }));
  }, [data.duration]);

  return (
    <div className="card bordered" style={{ padding: "60px 80px" }}>
      <h4 className="mb-3">Start Booking</h4>
      

      <label htmlFor="duration">How long you will stay?</label>
      <InputNumber
        max={30}
        suffix={" night"}
        isSuffixPlural
        onChange={updateData}
        name="duration"
        value={data.duration}
      />
    </div>
  );
};

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default BookingForm;