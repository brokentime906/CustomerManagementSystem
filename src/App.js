import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

function App() {
  return (
    <div className="gray-background">
      <img src={logo} lat="logo" />
      <h2>Let's develop management system!</h2>
     </div>
=======
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
>>>>>>> ab476855a312510b88e2e1ef1729c0db1e40d795
  );
}

export default App;
