import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Competitions from './components/competitions'
import Work from './components/work'
import Comments from './components/comments'
import Winner from './components/winner'
import Footer from './components/footer'

export default function App() {
	return (
		<div className='container mx-auto'>
			<Header />
			<Main />
			<Competitions />
			<Work />
			<Comments />
			<Winner />
			<Footer />
		</div>
	)
}
