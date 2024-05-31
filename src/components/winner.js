import React from 'react'
import winner1 from '../img/win1.png'
import winner2 from '../img/win2.png'
import winner3 from '../img/win3.png'
import winner4 from '../img/win4.png'

export default function Winner() {
	const winners = [
		{
			id: 1,
			img: winner1,
			car: 'Ferrari',
			date: '12 November 2023',
		},
		{
			id: 2,
			img: winner2,
			car: 'Aquila',
			date: '12 November 2021',
		},
		{
			id: 3,
			img: winner3,
			car: 'Audi',
			date: '11 November 2020',
		},
		{
			id: 4,
			img: winner4,
			car: 'Porshe',
			date: '12 November 2024',
		},
	]

	return (
		<section className='mt-12'>
			<div className='font-bold text-3xl'>Latest Winner</div>
			<div className='flex flex-row justify-between mt-6'>
				{winners.map(winner => (
					<div
						className='rounded-xl border-2 border-double drop-shadow'
						key={winner.id}
					>
						<img src={winner.img} alt={winner.car} />
						<p className='mt-3 ml-2 font-bold text-lg'>{winner.car}</p>
						<p className='ml-2 mb-3'>{winner.date}</p>
					</div>
				))}
			</div>
		</section>
	)
}
