import './PhotoNicks.css';

import moment from 'moment';

const PhotoNicks = ({ nick }) => {
    moment.locale('en');

    return (
        <section className='user__data'>
            <img src={ nick.avatar_url } alt={ nick.login } />
            
            <div className='user__nicks'>
                <h2>{ nick.name }</h2>
                <p className='user__username'>{ nick.login }</p>
                <p className='user__created'>{ moment(nick.created_at).format('MMMM Do YYYY, h:mm:ss a') }</p>
            </div>
        </section>
    );
}

export default PhotoNicks;