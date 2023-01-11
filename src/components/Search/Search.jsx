import './Search.css';

import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';

const Search = ({ getDataUser }) => {
    const [username, setUsername] = useState();

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) getDataUser(username);
    }

    return (
        <div className='containner__search'>
            <p className='icon__search'><CiSearch /></p>
            <input 
                value={username}
                type="text" 
                placeholder='Search GitHub username...'
                onChange={(e) => setUsername(e.target.value)} 
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => getDataUser(username)}>Search</button>
        </div>
    );
}

export default Search;