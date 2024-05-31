import React from 'react'
import logo from '../img/LOGOAuto.png'

export default function Header() {
	return (
		<header>
			<div className='flex items-center justify-between pt-8'>
				<div>
					<img src={logo} alt='logo' />
				</div>
				<div>
					<ul className='flex flex-row text-sm'>
						<li className='mr-4'>
							<a href='#'>Latest Competitions</a>
						</li>
						<li className='mx-4'>
							<a href='#'>Entry Lists</a>
						</li>
						<li className='mx-4'>
							<a href='#'>Live Draws</a>
						</li>
						<li className='mx-4'>
							<a href='#'>Winners</a>
						</li>
						<li className='mx-4'>
							<a href='#'>Gift Cards</a>
						</li>
						<li className='ml-4'>
							<a href='#'>How it Works</a>
						</li>
					</ul>
				</div>
				<div className='text-base'>
					<button className='mr-4 text-pink-400 cursor-pointer'>Login</button>
					<button className='rounded border ml-4 px-6 py-3 text-white bg-pink-400 cursor-pointer'>
						Register
					</button>
				</div>
			</div>
		</header>
	)
}
