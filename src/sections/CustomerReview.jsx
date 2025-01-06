import React from 'react'
import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';

const CustomerReview = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-4xl text-center font-bold'>
        What Our 
        <span className='text-coral-red'>Customers </span>
        Say?
      </h3>
      <p className='m-auto max-w-lg mt-4 info-text text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos id praesentium excepturi. Pariatur laborum of</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback = {review.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReview
