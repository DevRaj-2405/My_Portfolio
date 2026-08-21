// import React from "react";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { Animate } from "react-simple-animate";
// import "./styles.scss";

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <PageHeaderContent
//         headerText="My Contact"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="contact__content">
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(-200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <h3 className="contact__content__header-text">Let's Talk</h3>
//         </Animate>
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <div className="contact__content__form">
//             <div className="contact__content__form__controlswrapper">
//               <div>
//                 <input
//                   required
//                   name="name"
//                   className="inputName"
//                   type={"text"}
//                 />
//                 <label htmlFor="name" className="nameLabel">
//                   Name
//                 </label>
//               </div>
//               <div>
//                 <input
//                   required
//                   name="email"
//                   className="inputEmail"
//                   type={"text"}
//                 />
//                 <label htmlFor="email" className="emailLabel">
//                   Email
//                 </label>
//               </div>
//               <div>
//                 <textarea
//                   required
//                   name="description"
//                   className="inputDescription"
//                   type={"text"}
//                   rows="5"
//                 />
//                 <label htmlFor="description" className="descriptionLabel">
//                   Description
//                 </label>
//               </div>
//             </div>
//             <button>Submit</button>
//           </div>
//         </Animate>
//       </div>
//     </section>
//   );
// };
// export default Contact;



import React, { useRef, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from "@emailjs/browser";
import "./styles.scss";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });

    setMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name needs to be filled.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email needs to be filled.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description needs to be filled.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");

    // Check fields first
    if (!validateForm()) {
      return;
    }

    /*
      IMPORTANT:
      Replace these three values with your EmailJS details.
    */

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        {
          publicKey: "YOUR_PUBLIC_KEY",
        }
      )
      .then(
        () => {
          setMessage("Details added successfully!");

          setFormData({
            name: "",
            email: "",
            description: "",
          });

          setErrors({});
        },
        (error) => {
          console.log("EmailJS Error:", error);

          setMessage(
            "Something went wrong. Please try again later."
          );
        }
      );
  };

  return (
    <section id="contact" className="contact">

      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact__content">

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">
            Let's Talk
          </h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >

          <form
            ref={form}
            className="contact__content__form"
            onSubmit={handleSubmit}
          >

            <div className="contact__content__form__controlswrapper">

              {/* NAME */}
              <div>
                <input
                  required
                  name="name"
                  className={`inputName ${
                    errors.name ? "input-error" : ""
                  }`}
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />

                <label htmlFor="name" className="nameLabel">
                  Name
                </label>

                {errors.name && (
                  <span className="error-message">
                    {errors.name}
                  </span>
                )}
              </div>


              {/* EMAIL */}
              <div>
                <input
                  required
                  name="email"
                  className={`inputEmail ${
                    errors.email ? "input-error" : ""
                  }`}
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <label htmlFor="email" className="emailLabel">
                  Email
                </label>

                {errors.email && (
                  <span className="error-message">
                    {errors.email}
                  </span>
                )}
              </div>


              {/* DESCRIPTION */}
              <div>
                <textarea
                  required
                  name="description"
                  className={`inputDescription ${
                    errors.description ? "input-error" : ""
                  }`}
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                />

                <label
                  htmlFor="description"
                  className="descriptionLabel"
                >
                  Description
                </label>

                {errors.description && (
                  <span className="error-message">
                    {errors.description}
                  </span>
                )}
              </div>

            </div>


            {/* SUCCESS / ERROR MESSAGE */}

            {message && (
              <div className="contact__content__success-message">
                {message}
              </div>
            )}


            <button type="submit">
              Submit
            </button>

          </form>

        </Animate>

      </div>
    </section>
  );
};

export default Contact;