import React from 'react'
import logo from '../img/LOGOAuto.png'

export default function Footer() {
	return (
		<footer className='bg-blue-700 flex flex-row justify-between h-16 items-center mt-12'>
			<div className='ml-8'>
				<img src={logo} alt='logo' />
			</div>
			<div className='text-white'>
				<ul className='flex flex-row'>
					<li className='mx-2'>
						<a href='#'>Latest Competitions</a>
					</li>
					<li className='mx-2'>
						<a href='#'>Entry Lists</a>
					</li>
					<li className='mx-2'>
						<a href='#'>Live Draws</a>
					</li>
					<li className='mx-2'>
						<a href='#'>Winners</a>
					</li>
					<li className='mx-2'>
						<a href='#'>Gift Cards</a>
					</li>
					<li className='mx-2 mr-16'>
						<a href='#'>How it Works</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}
