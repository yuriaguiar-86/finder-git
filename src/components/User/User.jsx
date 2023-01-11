import './User.css';

import Follows from './Follows/Follows';
import InfoLinks from './InfoLinks/InfoLinks';
import PhotoNicks from './PhotoNicks/PhotoNicks';

const User = ({ user }) => {
    return (
        <div className='containner__user'>
            <PhotoNicks nick={user} />

            { 
                user.bio &&
                <p className='user__bio'>{ user.bio }</p> 
            }

            <Follows value={user} />
            <InfoLinks info={user} />
        </div>
    );
}

export default User;