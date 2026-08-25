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
    const [popup, setPopup] = useState({
        show: false,
        type: "",
        title: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: "",
        }));

        if (popup.show) {
            setPopup({
                show: false,
                type: "",
                title: "",
                message: "",
            });
        }
    };

    const closePopup = () => {
        setPopup({
            show: false,
            type: "",
            title: "",
            message: "",
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email address.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
        ) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.description.trim()) {
            newErrors.description = "Please enter a description.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        closePopup();

        // Stop submission if validation fails
        if (!validateForm()) {
            const missingFields = [];

            if (!formData.name.trim()) {
                missingFields.push("Name");
            }

            if (!formData.email.trim()) {
                missingFields.push("Email");
            } else if (
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
            ) {
                missingFields.push("Valid Email");
            }

            if (!formData.description.trim()) {
                missingFields.push("Description");
            }

            setPopup({
                show: true,
                type: "error",
                title: "Please complete the form",
                message: `Please fill in: ${missingFields.join(", ")}.`,
            });

            return;
        }

        setIsSubmitting(true);

        /*
         * EmailJS
         *
         * Replace these three values with your actual EmailJS details
         * when you want the form to send emails.
         */
        try {
            await emailjs.sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                {
                    publicKey: "YOUR_PUBLIC_KEY",
                }
            );

            setPopup({
                show: true,
                type: "success",
                title: "Details Submitted",
                message:
                    "Your details have been submitted successfully. Thank you for contacting me!",
            });

            setFormData({
                name: "",
                email: "",
                description: "",
            });

            setErrors({});
        } catch (error) {
            console.error("EmailJS Error:", error);

            setPopup({
                show: true,
                type: "error",
                title: "Submission Failed",
                message:
                    "Something went wrong while submitting your details. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
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
                        noValidate
                    >

                        <div className="contact__content__form__controlswrapper">

                            {/* NAME */}

                            <div>
                                <input
                                    name="name"
                                    className={`inputName ${
                                        errors.name ? "input-error" : ""
                                    }`}
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                />

                                <label
                                    htmlFor="name"
                                    className="nameLabel"
                                >
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
                                    name="email"
                                    className={`inputEmail ${
                                        errors.email ? "input-error" : ""
                                    }`}
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />

                                <label
                                    htmlFor="email"
                                    className="emailLabel"
                                >
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
                                    name="description"
                                    className={`inputDescription ${
                                        errors.description
                                            ? "input-error"
                                            : ""
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


                        {/* SUBMIT BUTTON */}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={isSubmitting ? "submitting" : ""}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>

                    </form>
                </Animate>

            </div>


            {/* =========================================
                POPUP
            ========================================= */}

            {popup.show && (
                <div
                    className="contact__popup-overlay"
                    onClick={closePopup}
                >
                    <div
                        className={`contact__popup ${
                            popup.type === "success"
                                ? "contact__popup--success"
                                : "contact__popup--error"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="contact__popup-close"
                            onClick={closePopup}
                            aria-label="Close popup"
                        >
                            ×
                        </button>

                        <div className="contact__popup-icon">
                            {popup.type === "success" ? "✓" : "!"}
                        </div>

                        <h3>
                            {popup.title}
                        </h3>

                        <p>
                            {popup.message}
                        </p>

                        <button
                            className="contact__popup-button"
                            onClick={closePopup}
                        >
                            Close
                        </button>

                    </div>
                </div>
            )}

        </section>
    );
};

export default Contact;