import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  render() {
    const { name, email, phone } = 
    this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          {"  "}
          <FontAwesomeIcon
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })}
            icon="angle-down"
          />
        </h4>

        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Tel: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
