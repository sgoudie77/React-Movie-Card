import React, { Component } from 'react';
import cover from '../img/cover.jpg';
import MovieDetails from './MovieDetails';

class Card extends Component {
  state = {
    height: 0,
  };

  toggle = () => {
    const { height } = this.state;

    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
  };

  render() {
    const { height } = this.state;

    return (
        <div className="card">
            <div className="content">
                <div className="imgBx">
                    <img src={cover} alt="movie cover" />
                </div>
            </div>

            <button className="toggle" aria-expanded={ height !== 0 } onClick={ this.toggle }>
                { height === 0 ? <ion-icon name="chevron-down-outline"></ion-icon> : <ion-icon name="chevron-up-outline"></ion-icon> }
            </button>
              <MovieDetails height={height} Director={'Todd Phillips'} Actor={'Joaquin Phoenix'} Length={'2h 2min'} Rating={'4/5'} />  
        </div>
    );
  }
}

export default Card



// First Attempt Below But It Did Not Work

// import React, { Component } from 'react'
// import cover from '../img/cover.jpg'
// import AnimateHeight from 'react-animate-height';

// class Card extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//             isVisible: false
//         };
//         this.onToggle = this.onToggle.bind(this);
//     }
    
//     onToggle(e) {
//         this.setState({ isVisible: !this.state.isVisible });
//     }

//     render() {
//         return (
            // <div className="card">
            //     <div className="content">
            //         <div className="imgBx">
            //             <img src={cover} alt="movie cover" />
            //         </div>
            //     </div>
//                 <button onClick={this.onToggle} className="toggle">
//                     <ion-icon name="chevron-down-outline"></ion-icon>
//                 </button>
//                     <AnimateHeight duration={ 500 } height={ 'auto' }>
//                 {this.state.isVisible &&
                    // <div className="details">
                    //     <li className="info"><ion-icon name="videocam-outline"></ion-icon> Director: Todd Phillips</li>
                    //     <li className="info"><ion-icon name="person-circle-outline"></ion-icon> Actor: Joaquin Phoenix</li>
                    //     <li className="info"><ion-icon name="hourglass-outline"></ion-icon> Length: 2h 2min</li>
                    //     <li className="info"><ion-icon name="star-outline"></ion-icon> Rating: 4/5</li>
                    // </div>
//                 }
//                     </AnimateHeight>
//             </div>
//         )
//     }
// }

// export default Card





