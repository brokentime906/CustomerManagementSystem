import React ,{Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customers =[
{
  'id' :1,
  'imgae' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : 'student'
}  ,
{
  'id' :2,
  'imgae' : 'https://placeimg.com/64/64/2',
  'name' : '김영빈',
  'birthday' : '951222',
  'gender' : '남자',
  'job' : 'student'
}
]
class App extends Component{
  render(){
    return (  
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.imgae}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.gender}
              />
            );
          })
        }

      </div>
    );
  } 
}

export default App;
