import PieChart from './PieChart';
import UserContext from '../context/UserContext';
import React, {useContext} from 'react';

const TrackerDisplay = ({glasses}) => {

    const {name, goal} = useContext(UserContext);

    return (
            <UserContext.Consumer>
                { () => {
                    return (
                        <>
                            <p>{name}'s daily goal: {goal}</p>
                            <p>Glasses drunk: {glasses}</p>
                            <PieChart glasses={glasses} />
                            { glasses >= goal ? "Goal reached! 🥳" : null }
                            <br></br>
                        </>
                    )
                }
            } 
            </UserContext.Consumer>
    )
}

export default TrackerDisplay;
