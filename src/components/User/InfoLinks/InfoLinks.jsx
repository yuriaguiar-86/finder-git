import './InfoLinks.css';

import { BsTwitter } from 'react-icons/bs';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { ImLink } from 'react-icons/im';
import { IoLocation } from 'react-icons/io5';

const InfoLinks = ({ info }) => {
    const validateExistData = (value) => {
        if(!value) value = 'Not avaliable';
        return value;
    }

    return (
        <section className='containner__links'>
            <p><IoLocation /> { validateExistData(info.location) }</p>
            <p><BsTwitter /> { validateExistData(info.twitter_username) }</p>
            <p><ImLink /> { validateExistData(info.url) }</p>
            <p><HiBuildingOffice2 /> { validateExistData(info.company) }</p>
        </section>
    );
}

export default InfoLinks;