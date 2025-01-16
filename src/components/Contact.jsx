import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required";
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted Successfully", formData);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="items-center justify-center border-2 p-24 shadow-2xl"
      >
        <h1 className="text-gray-500 font-extrabold text-2xl mb-2">
          Get in touch!
        </h1>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <input
              type="text"
              id="firstname"
              name="firstname"
              onChange={handleChange}
              value={formData.firstname}
              placeholder="First Name"
              className="p-2 border rounded mt-2"
            />
            {errors.firstname && (
              <span className="text-red-500 text-sm">{errors.firstname}</span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              id="lastname"
              name="lastname"
              onChange={handleChange}
              value={formData.lastname}
              placeholder="Last Name"
              className="p-2 border rounded mt-2"
            />
            {errors.lastname && (
              <span className="text-red-500 text-sm">{errors.lastname}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="p-2 border rounded mt-2 w-full"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="flex flex-col">
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
            className="p-2 border rounded mt-2 w-full"
            placeholder="Message"
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-sm cursor-pointer mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
