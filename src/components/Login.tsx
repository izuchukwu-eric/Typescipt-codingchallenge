import React, { Fragment, useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/auth";

interface Props {
  login: Function;
}

const Login = ({ login }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const { name } = formData;

  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    login(name);
    console.log(name);
  };

  return (
    <Fragment>
      <div className="container">
        <span>Student Name:</span>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            name="name"
            value={name}
            className="searchBarInput"
            onChange={(e) => onChange(e)}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
