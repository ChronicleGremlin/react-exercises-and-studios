import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ["Make Tea", "Cuddle cats"];
      return (
      <div>
         <h3 className={classes.choresHeading}>Chores to do!</h3>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
      </div>
      );
   }
}
export default ChoresList;