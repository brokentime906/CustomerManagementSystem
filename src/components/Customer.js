import React from 'react';
import { directive } from '@babel/types';

class Customer extends React.Component{
    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.job}</p>
                <p>{this.props.age}</p>
            </div>
        )        
    }
}

export default Customer;