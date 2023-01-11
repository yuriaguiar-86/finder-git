import './Follows.css';

const Follows = ({ value }) => {
    return (
        <section className='containner__follows'>
            <div className='follows__values'>
                <p>Repos</p>
                <h3>{ value.public_repos }</h3>
            </div>

            <div className='follows__values'>
                <p>Followers</p>
                <h3>{ value.followers }</h3>
            </div>

            <div className='follows__values'>
                <p>Following</p>
                <h3>{ value.following }</h3>
            </div>
        </section>
    );
}

export default Follows;