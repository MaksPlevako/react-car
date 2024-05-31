import React from 'react'
import round from '../img/Ellipse 4.png'
import car from '../img/car.png'

export default function Main() {
	return (
		<div className='flex flex-row h-96'>
			<div className='pt-32'>
				<div className='text-5xl mb-14'>
					Could you be our <br />
					<span className='text-pink-400'>next winner?</span>
				</div>
				<button className='rounded border px-5 py-2.5 text-white bg-blue-500 cursor-pointer'>
					Enter now
				</button>
			</div>
			<div>
				<div className='relative left-96'>
					<img src={round} alt='' />
				</div>
				<div className='relative left-48 -top-72'>
					<img src={car} alt='' />
				</div>
			</div>
		</div>
	)
}
