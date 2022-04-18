import React, { Fragment } from "react";
import "./Results.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

interface Props {
  profile: any;
  loading: any;
}

const Results = ({ profile, loading }: Props) => {
  return (
    <Fragment>
      <input className="logoutBtn" type="submit" value="Logout" />
      {loading ? (
        <Spinner />
      ) : (
        profile.map((profile: any) => (
          <div className="container">
            <p>
              <strong>Name</strong>
              <br></br>
              {profile.Name}
            </p>
            <p>
              <strong>Students</strong>
              <br></br>
              {profile.Students}
            </p>
          </div>
        ))
      )}
    </Fragment>
  );
};

Results.propTypes = {
  profile: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state: any) => ({
  profile: state.auth.profile,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(Results);
