import React from "react"
import Button from "@material-ui/core/Button"
import Seo from "../seo"
import { navigate } from "gatsby-link"
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class HomeRequestForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    servicesneeded: "",
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
      body: encode({ "form-name": "Request", ...this.state }),
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
    const { classes } = this.props
    const { email, name, phone, servicesneeded, submitError } = this.state

    return (
      <>
        <Seo title="Contact" />
        <ValidatorForm
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
          name="Request"
          ref={f => (this.form = f)}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {submitError && <p className={classes.submitError}>{submitError}</p>}
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
            id="phone"
            name="phone"
            label="Phone"
            value={phone}
            onChange={this.handleChange}
            validators={["required"]}
            errorMessages={["this field is required"]}
            fullWidth
            margin="normal"
            className={"form-single-line"}
          />
          <TextValidator
            id="servicesneeded"
            name="servicesneeded"
            label="Services needed (How can I help?)"
            value={servicesneeded}
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
            Send Request
          </Button>
        </ValidatorForm>
      </>
    )
  }
}

export default HomeRequestForm
