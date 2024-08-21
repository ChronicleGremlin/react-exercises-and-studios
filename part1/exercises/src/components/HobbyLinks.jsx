import React from 'react';
import classes from './HobbyLinks.module.css';

class HobbyLinks extends React.Component {
    render() {
        const hobbyLinks =["https://www.ukulele-tabs.com/", "https://crochetcoach.com/"];

        return(
            <div>
                <h3 className={classes.hobbyHeading}>Hobbies!</h3>
                    <a href = {hobbyLinks[0]}>Ukulele Tabs</a>
                    <a href = {hobbyLinks[1]}>Crochet Coach</a>
            </div>
        );
    }
};

export default HobbyLinks;