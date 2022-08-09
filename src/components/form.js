import React, { Component } from "react"
import emailjs from "emailjs-com"

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  handleSubmit(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        "gmail",
        "template_xHJcuAgG",
        e.target,
        "user_kf5tCn32h6RcPBUNDdmal"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    this.formValidation()
    this.resetForm()
  }

  formValidation = () => {
    alert("Email has been sent!")
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    })
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <>
        <form className="contact_form" onSubmit={this.handleSubmit.bind(this)}>
          <h2>Contact me</h2>
          <div className="form_group">
            <label htmlFor="name"> </label>
            <input
              type="text"
              className="form_control"
              name="from_name"
              value={this.state.name}
              onChange={this.handleChange.bind(this, "name")}
              placeHolder="Name"
            ></input>
          </div>
          <div className="form_group">
            <label htmlFor="email"> </label>
            <input
              type="text"
              className="form_control"
              name="reply_to"
              value={this.state.email}
              onChange={this.handleChange.bind(this, "email")}
              placeHolder="Email"
            ></input>
          </div>
          <div className="form_group">
            <label htmlFor="message"> </label>
            <textarea
              type="text"
              className="form_control"
              rows="2"
              name="message_html"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
              placeHolder="Message"
            ></textarea>
          </div>
          <button type="submit" className="form_button">
            Send
          </button>
        </form>
      </>
    )
  }
}

export default ContactForm
