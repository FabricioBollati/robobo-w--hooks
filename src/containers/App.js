import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import  { members }  from '../components/members';
import './App.css';



function App () {

    const [robots, setRobots] = useState(members);
    const [searchfield, setSearchfield] = useState('');
    // changes {members} to json.placeholder users using useEffect to fetch
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {setRobots(users)});
        // console.log(count)
      },[])

   const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    };

    const filteredMembers = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

  return (
    <div className='tc'>
        <h1 className='f1'>Members</h1>
        <SearchBox Search={onSearchChange}/>
        <Scroll>
            <CardList robots = {filteredMembers}/>
        </Scroll>
    </div>

  )
}

export default App;

    
