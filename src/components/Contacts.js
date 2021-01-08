import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component{
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Mark',
                email: 'jmark@gmail.com',
                phone: '555-555-5556'    
            },
            {
                id: 2, 
                name: 'Karen Smiths', 
                email: 'karensmiths1989@gmail.com',
                phone: '221-111-2221'
            },
            {
                id: 3, 
                name: 'Henry Joseph',
                email: 'bigjoe96@gmail.com',
                phone: '333-333-3333'
            }
        
        ]
    };

    render(){
        const { contacts } = this.state;
    
 
    return (
        <React.Fragment>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </React.Fragment>    
        );
    }
}

export default Contacts;
