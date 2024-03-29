import React from 'react'
import './Main.css'
import Context from '../../Context'
import { useContext } from 'react'
import { icons1 } from './../../constants/icons2'
import { icons2 } from './../../constants/icons';
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


export default function Main() {
	const element = useContext(Context)
	const navigate = useNavigate()

	return (
		<main>
			<Header />
			<div className='main-1'>
				{icons1.map((item, index) => (
					<button key={index} onClick={() => {
						navigate('/Paypage')
					}}>{item.icon}{item.name}</button>
				))}
			</div>
			<div className='main-2'>
				{icons2.map((item, index) => (
					<button style={{ backgroundImage: `url(${item.icon})` }} key={index} onClick={() => {
						navigate('/Paypage');
						element.setImg(item.icon);
					}}></button>
				))}
			</div>
			<Footer />
		</main>
	)
}
