import React, { useRef } from "react";
import { Footer, Navbar } from "../components";
import emailjs from "emailjs-com";
import { message } from "antd";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_uoe37uf",
      "template_g42v073",
      form.current,
      "vmAk0yxbH10CVioCn"
    );

    e.target.reset();
    message.success("Message has been sent");
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="text"
                  name="myname"
                  class="form-control"
                  id="Name"
                  placeholder="Your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="Email"
                  placeholder="Your Email"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  class="form-control"
                  id="Password"
                  placeholder="Your message"
                />
              </div>
              <div className="text-center">
                <button class="my-2 px-4 mx-auto btn btn-dark" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
