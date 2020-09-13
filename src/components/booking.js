import React, { useState } from "react"
import { TextField } from "@material-ui/core"
import NumberFormat from "react-number-format"
import facebookTrack from "../utils/facebook-track"
import style from "../styles/booking.module.css"
import successSvg from "../../static/icon-success.svg"
import errorSvg from "../../static/icon-error.svg"

const RequestSent = () => (
  <div className={style.requestSent}>
    <img src={successSvg} alt="Success checkmark icon" />
    <h1 className={style.h1}>Sent!</h1>
    <p className={style.p}>Pat will reach out shortly</p>
  </div>
)

const RequestError = () => (
  <div className={style.requestError}>
    <img src={errorSvg} alt="Error warning icon" />
    <h1 className={style.h1}>Error</h1>
    <p>
      Something went wrong. Try reloading the page and filling it out again.
    </p>
    <button onClick={() => window.location.reload()}>Reload</button>
  </div>
)

const Booking = () => {
  const [formInput, setFormInput] = useState({
    firstName: "",
    email: "",
    phone: "",
    descriptionOfNeeds: "",
  })

  const [errors, setErrors] = useState({
    firstName: null,
    email: null,
    phone: null,
    descriptionOfNeed: null,
  })

  const handleChange = (inputType, value) =>
    setFormInput({ ...formInput, [inputType]: value })

  const [requestStatus, setRequestStatus] = useState("UNSENT")

  const postData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })

    return await response.json()
  }

  const handleSubmit = event => {
    event.preventDefault()

    const phoneRegex = /1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})(\se?x?t?(\d*))?/
    const validPhoneNumber = phoneRegex.test(formInput.phone)

    if (!validPhoneNumber) {
      setErrors({
        phone: "Invalid Phone Number",
      })
      return
    }

    postData(
      "https://getform.io/f/5d72b9dd-f1f1-4360-a1a6-7c387be5f432",
      formInput
    )
      .then(response => {
        if (response.success === true) {
          setRequestStatus("SENT")
          facebookTrack("track", "Contact")
        }
      })
      .catch(error => {
        console.warn(error)
        setRequestStatus("ERROR")
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {requestStatus === "UNSENT" && (
          <>
            <h1 className={style.h1}>Book Your Free First Appointment</h1>
            <TextField
              name="name"
              label="Full Name"
              fullWidth
              required
              onChange={event => handleChange("firstName", event.target.value)}
            />
            <TextField
              name="email"
              type="email"
              label="Email"
              fullWidth
              required
              onChange={event => handleChange("email", event.target.value)}
            />
            <NumberFormat
              format={"(###) ###-####"}
              customInput={TextField}
              name="tel"
              type="tel"
              id="phone"
              label="Phone"
              error={!!errors.phone}
              helperText={errors.phone}
              required
              fullWidth
              onChange={event => handleChange("phone", event.target.value)}
            />
            <TextField
              id="needs"
              label="What does your child need?"
              multiline
              fullWidth
              onChange={event =>
                handleChange("descriptionOfNeeds", event.target.value)
              }
            />
            <input type="submit" value="Book" className={style.button} />
          </>
        )}
        {requestStatus === "SENT" && <RequestSent />}
        {requestStatus === "ERROR" && <RequestError />}
      </form>
    </div>
  )
}

export default Booking
