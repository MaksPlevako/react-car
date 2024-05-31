import React from 'react'

import touch from '../img/touchscreen 1.png'
import movie from '../img/movie-tickets 1.png'
import payment from '../img/online-payment 1.png'
import star from '../img/winner 1.png'

export default function Work() {
	return (
		<div className='mt-36'>
			<div className='text-3xl font-bold text-center'>How it works</div>
			<div className='flex flex-row justify-around text-center mt-16'>
				<div className='w-1/5'>
					<img className='mx-auto mb-4' src={touch} alt='touch' />
					<p className='text-gray-700 '>
						Choose a competition and how many entries you would like
					</p>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-16'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
					/>
				</svg>
				<div className='w-1/5'>
					<img className='mx-auto mb-4' src={payment} alt='payment' />
					<p>
						Answer the qualifying question (be sure to answer correctly!) and
						complete payment
					</p>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-16'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
					/>
				</svg>
				<div className='w-1/5'>
					<img className='mx-auto mb-4' src={movie} alt='touch' />
					<p>
						Tickets for all correct answers are entered into the draw, streamed
						LIVE on Facebook using Google’s random number generator
					</p>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-16'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
					/>
				</svg>
				<div className='w-1/5'>
					<img className='mx-auto mb-4' src={star} alt='touch' />
					<p>
						If you win, we may try to contact you whilst live on Facebook, so be
						prepared!
					</p>
				</div>
			</div>
		</div>
	)
}
