import React from 'react';
import Users from './components/users/Users';
import {getUsersPosts} from './services/user.api.servicers';
import {useState} from 'react';
import './App.css';
import Posts from "./components/posts/Posts";

export default function App() {

  let [posts, setPosts] = useState([]);
  const show = (id) => {
    getUsersPosts(id).then(({data}) => {
      setPosts([...data]);
    })
  }
  
  return (
    <div className={'df'}>
      <div className={'left'}><Users show={show}/></div>
      <div className={'right'}>
        <Posts posts={posts}/>
      </div>

    </div>
  );
}

