import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
    render() {
        const { name, email, phone} = this.props;
        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>Email: {email}</li>
                    <li>Tel: {phone}</li>
                </ul>
            </div>
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired

};

export default Contact;
