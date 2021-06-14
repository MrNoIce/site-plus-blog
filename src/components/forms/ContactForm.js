import React from "react"
import Button from "@material-ui/core/Button"
import { navigate } from "gatsby-link"
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    submitError: "",
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  handleNetworkError = e => {
    this.setState({ submitError: "There was a network error." })
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => {
        console.log("Form submission success")
        navigate("/success")
      })
      .catch(error => {
        console.error("Form submission error:", error)
        this.handleNetworkError()
      })

    e.preventDefault()
  }

  render() {
    const { email, name, message, submitError } = this.state

    return (
      <ValidatorForm
        onSubmit={this.handleSubmit}
        onError={errors => console.log(errors)}
        name="contact"
        ref={f => (this.form = f)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {submitError && <p className={"form-submit-error"}>{submitError}</p>}
        <TextValidator
          id="name"
          name="name"
          label="Name"
          value={name}
          onChange={this.handleChange}
          validators={["required"]}
          errorMessages={["this field is required"]}
          fullWidth
          margin="normal"
          className={"form-single-line"}
        />
        <TextValidator
          id="email"
          name="email"
          label="E-mail"
          value={email}
          onChange={this.handleChange}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
          fullWidth
          margin="normal"
          className={"form-single-line"}
        />
        <TextValidator
          id="message"
          name="message"
          label="Message"
          value={message}
          onChange={this.handleChange}
          validators={["required"]}
          errorMessages={["this field is required"]}
          multiline
          fullWidth
          margin="normal"
          className={"form-multi-line"}
        />
        <input name="bot-field" style={{ display: "none" }} />
        <Button
          style={{
            padding: 0,
            border: "none",
            background: "none",
            color: "var(--color-primary)",
            fontSize: "medium",
            margin: "1rem",
            outline: "none",
            textTransform: "uppercase",
          }}
          variant="raised"
          color="primary"
          size="large"
          type="submit"
          class="form-btn"
        >
          Send
        </Button>
      </ValidatorForm>
    )
  }
}

export default ContactForm
