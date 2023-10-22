import React from 'react'
import { Logo } from '../../img'
import { Link } from 'react-router-dom'
import { BiPhoneCall } from '../icons'
const Header = () => {
	return (
		<>
			<div className='header py-7'>
				<div className='container flex items-center gap-2 justify-between '>
					<div className='Logotypes '>
						<Link to='/' className='flex items-center gap-4'>
							<img src={Logo} alt='logo' />
							<h3>НОЭКС</h3>
						</Link>
					</div>
					<div className='navbars flex items-center gap-8'>
						<Link to='/Project  '>Проекты</Link>
						<Link to='/AboutUs'>О нас</Link>
						<Link to='/Service'>Услуги</Link>
						<Link to='/Price'>Цены</Link>
						<Link to='/Articles'>Статьи</Link>
						<Link to='Vacancies'>Вакансии</Link>
						<Link to='/Contact'>Контакты</Link>
					</div>
					<button className='headerBtns'>
						<BiPhoneCall />
						<a href='tel:+7 (495) 755-02-29'>+7 (495) 755-02-29</a>
					</button>
				</div>
			</div>
		</>
	)
}

export default Header
