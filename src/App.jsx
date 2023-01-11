import './App.css';

import { useState } from 'react';

import AlterColors from './components/AlterColors/AlterColor';
import Error from './components/Error/Error';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Search from './components/Search/Search';
import User from './components/User/User';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getDataUser = (username) => {
    setUser(null);
    setError(false);
    findUserGit(username);
  }

  const findUserGit = async(username) => {
    setLoading(true);

    let data = await fetch(`https://api.github.com/users/${username}`);
    let resp = await data.json();

    setTimeout(() => {
      setLoading(false);

      data.status === 404 ?
      setError(true) :
      setUser(resp);
    }, 500);
  }

  return (
    <div className='containner__all'>
      <header>
        <AlterColors />
      </header>
      <main>
        <Search getDataUser={getDataUser} />
        { loading && <LoadingSpinner /> }
        { user && <User user={user} /> }
        { error && <Error /> }
      </main>
    </div>
  );
}

export default App;
