import React from 'react'
import photo from '../img/comment.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default function Comments() {
	const comments = [
		{
			id: 1,
			text: '"Unbelievable this is a dream come true, no way would I ever think I would own a car like this. What great blokes. Thank you very much! 5 star from me!!!"',
			name: 'Maks',
			img: photo,
		},
		{
			id: 2,
			text: '"Unbelievable this is a dream come true, no way would I ever think I would own a car like this. What great blokes. Thank you very much! 5 star from me!!!"',
			name: 'Kostya',
			img: photo,
		},
		{
			id: 3,
			text: '"Unbelievable this is a dream come true, no way would I ever think I would own a car like this. What great blokes. Thank you very much! 5 star from me!!!"',
			name: 'Vlad',
			img: photo,
		},
	]

	return (
		<section className='mt-12 bg-gray-200'>
			<div>
				<div className='flex flex-row items-center'>
					<Swiper
						modules={[Navigation]}
						loop={true}
						spaceBetween={30}
						navigation
						className='rewind'
					>
						{comments.map(comment => {
							return (
								<SwiperSlide className='text-center' key={comment.id}>
									<p className='text-xl w-1/2 mx-auto'>{comment.text}</p>
									<h1 className='font-bold mt-12 uppercase text-gray-600'>
										{comment.name}
									</h1>
								</SwiperSlide>
							)
						})}
					</Swiper>
					<img src={photo} alt='' />
				</div>
			</div>
		</section>
	)
}
