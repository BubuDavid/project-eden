import {useStore} from '../../hooks/useStore'
import './Header.css'

const Header = ({ bg }) => {
	const extraClass = bg ? 'bg' : null
	const {restartApp} = useStore()
	return (
		<header className={`header ${extraClass}`}>
			<nav className="header__navbar">
				<div className="navbar__logo" onClick={() => restartApp()}>
					<img src='https://i.imgur.com/pntpzEI.png' alt='logo img'className='navbar__logo--img'/>
				</div>
				{/*
				<div className='navbar__menu'>
					<ul className='menu__list'>
						<li className='list__item'><a href='#home' className='list__item--link'>Home</a></li>
						<li className='list__item'><a href='#about' className='list__item--link'>About us</a></li>
						<li className='list__item'><a href='#projects' className='list__item--link'>Projects</a></li>
					</ul>
				</div>
				*/}
			</nav>
		</header>
	)
}

export default Header
