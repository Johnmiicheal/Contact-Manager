import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component{
    state = {
        contacts: [
            {
                id: 0,
                name: 'John Mark',
                email: 'jmark@gmail.com',
                phone: '554-555-5556'    
            },
            {
                id: 1, 
                name: 'Karen Smiths', 
                email: 'karensmiths1988@gmail.com',
                phone: '220-111-2221'
            },
            {
                id: 2, 
                name: 'Henry Joseph',
                email: 'bigjoe95@gmail.com',
                phone: '332-333-3333'
            }
        
        ]

    }
    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }     
}

export const Consumer = Context.Consumer;