import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer ={
  'name' : 'skrlf동',
  'birthday':'950107',
  'job' :'대학생',
  'age' : '26'
} 

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.job}
      age={customer.age}
    />
  );
}

export default App;
