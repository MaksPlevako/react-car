import React from 'react'
import car1 from '../img/car1.png'
import car2 from '../img/car2.png'
import car3 from '../img/car3.png'
import car4 from '../img/car4.png'

export default function Competitions() {
	const cars = [
		{
			id: 1,
			name: '2020 Audi S5 Coupe',
			img: car1,
			price: '$54.68',
			discount: '$19.99',
			tickets: 5878,
		},
		{
			id: 2,
			name: '2016 Ford Mustang GT',
			img: car2,
			price: '$9.68',
			discount: '$7.99',
			tickets: 3617,
		},
		{
			id: 3,
			name: '2020 Bugatti Chiron',
			img: car3,
			price: '$5',
			discount: '$2.99',
			tickets: 426,
		},
		{
			id: 4,
			name: '2019 Porsche 911 Carrera',
			img: car4,
			price: '$41.50',
			discount: '$25.99',
			tickets: 911,
		},
	]

	return (
		<div className='mt-24'>
			<div className='font-bold text-4xl pb-10'>Latest Competitions</div>
			<div className='flex flex-row justify-between'>
				{cars.map(car => (
					<div
						key={car.id}
						className='rounded-xl border-2 border-double drop-shadow'
					>
						<img src={car.img} alt={car.id} />
						<p className='mt-6 ml-6 font-bold text-xl'>{car.name}</p>
						<div className='flex flex-row ml-6 my-2 items-end'>
							<div className='text-3xl text-pink-500 mr-2'>{car.discount}</div>
							<div className='text-xl text-gray-400 line-through'>
								{car.price}
							</div>
						</div>
						<div className='flex flex-row justify-between ml-6 items-center'>
							<p>{car.tickets} tickets remaining</p>
							<button className='rounded-br-2xl rounded-tl-2xl border border-blue-700 bg-blue-700 text-white p-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
									/>
								</svg>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
