import React from 'react';
import AnimateHeight from 'react-animate-height';


function MovieDetails(props) {
    return (
        <div>
            <AnimateHeight duration={ 500 } >
                <div className="details">
                    <li><ion-icon name="videocam-outline"></ion-icon> Director: {props.Director}</li>
                    <li><ion-icon name="person-circle-outline"></ion-icon> Actor: {props.Actor}</li>
                    <li><ion-icon name="hourglass-outline"></ion-icon> Length: {props.Length}</li>
                    <li><ion-icon name="star-outline"></ion-icon> Rating: {props.Rating}</li>
                </div>
            </AnimateHeight>
        </div>
    )
}

export default MovieDetails
