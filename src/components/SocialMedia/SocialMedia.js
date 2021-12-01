import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <div className='socilaUl'>
            <ul>
                <li><a href=""><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href=""><i class="fab fa-github" aria-hidden="true"></i></a></li>
                <li><a href=""><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    );
};

export default SocialMedia;