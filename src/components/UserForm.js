import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const UserForm = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("Please fill first name").min(3,"please enter min of 3 length"),
    lastName: Yup.string().required("Please fill last name"),
    dateOfbirth: Yup.string().required("Please fill date of birth name"),
    phone: Yup.string().required("Please fill phone"),
    address: Yup.string().required("Please fill address"),
    number: Yup.string().required("Please fill  number"),
    city: Yup.string().required("Please fill city"),
    state: Yup.string().required("Please fill state"),
    zip: Yup.string().required("Please fill zip"),
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
  });
  const onSubmit = (values) => { console.log(values)};

  return (
    <div className="form_card">
      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "",
          lastName: "",
          dateOfbirth: "",
          gender: "",
          email: "",
          phone: "",
          address: "",
          number: "",
          city: "",
          state: "",
          zip: "",
        }}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <div>
              <form noValidate onSubmit={handleSubmit}>
                <div className="two_inputs">
                  <div className="input_container">
                    <p>First Name</p>
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      placeholder="Enter your first name"
                      className="inputStyle"
                      id="email"
                    />
                    <p className="error">
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </p>
                  </div>
                  <div className="input_container">
                    <p>Last Name</p>
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      placeholder="Also your last name"
                      className="inputStyle"
                    />
                    <p className="error">
                      {errors.lastName && touched.lastName && errors.lastName}
                    </p>
                  </div>
                </div>
                <div className="two_inputs">
                  <div className="input_container">
                    <p>Birthday</p>
                    <input
                      type="date"
                      name="dateOfbirth"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dateOfbirth}
                      className="inputStyle"
                      id="email"
                    />
                    <p className="error">
                      {errors.dateOfbirth &&
                        touched.dateOfbirth &&
                        errors.dateOfbirth}
                    </p>
                  </div>
                  <div className="input_container">
                    <p>Gender</p>
                    <select
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="inputStyle"
                    >
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <p className="error">
                      {errors.gender && touched.gender && errors.gender}
                    </p>
                  </div>
                </div>
                <div className="two_inputs">
                  <div className="input_container">
                    <p>Email</p>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="name@company.com"
                      className="inputStyle"
                      id="email"
                    />
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>
                  <div className="input_container">
                    <p>Phone</p>
                    <input
                      type="password"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      placeholder="+91987654321"
                      className="inputStyle"
                    />
                    <p className="error">
                      {errors.phone && touched.phone && errors.phone}
                    </p>
                  </div>
                </div>
                <div>
                  <h3>Address</h3>
                  <div className="flex_inputs">
                    <div className="input_container_2a">
                      <p>Address</p>
                      <input
                        type="text"
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        placeholder="Enter your home address"
                        className="inputStyle"
                      />
                      <p className="error">
                        {errors.address && touched.address && errors.address}
                      </p>
                    </div>
                    <div className="input_container_2b">
                      <p>Number</p>
                      <input
                        type="number"
                        name="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.number}
                        placeholder="No."
                        className="inputStyle"
                      />
                      <p className="error">
                        {errors.number && touched.number && errors.number}
                      </p>
                    </div>
                  </div>
                  <div className="flex_inputs">
                    <div className="input_container_3">
                      <p>City</p>
                      <input
                        type="password"
                        name="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                        placeholder="City"
                        className="inputStyle"
                      />
                      <p className="error">
                        {errors.city && touched.city && errors.city}
                      </p>
                    </div>
                    <div className="input_container_3">
                      <p>Select state</p>
                      <input
                        type="text"
                        name="state"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.state}
                        placeholder="State"
                        className="inputStyle"
                      />
                      <p className="error">
                        {errors.state && touched.state && errors.state}
                      </p>
                    </div>
                    <div className="input_container_3">
                      <p>ZIP</p>
                      <input
                        type="number"
                        name="zip"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.zip}
                        placeholder="ZIP"
                        className="inputStyle"
                      />
                      <p className="error">
                        {errors.zip && touched.zip && errors.zip}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit">submit</button>
                </div>
              </form>
            </div>
          </div>
        )}

      </Formik>
    </div>
  );
};

export default UserForm;
