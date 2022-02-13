import React, {Fragment} from 'react';
import review1 from '../images/review1.png'
import review2 from '../images/review2.png'
import review3 from '../images/review3.png'
import './Review.css'
const Review = () => {
  return (
    <Fragment>
        <div className='Review'>
            <h1>
            People are raving about the free secrets we’re sharing...
            </h1>

            <img src={review1}></img>
            <img src={review2}></img>
            <img src={review3}></img>
        </div>
    </Fragment>
  )
}

export default Review