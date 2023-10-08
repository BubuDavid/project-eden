import './Header.css'

const Header = () => {
	return (
		<header className="header">
			<nav className="header__navbar">
				<div className="navbar__logo">
					<img src='https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg' alt='logo img'className='navbar__logo--img'/>
					<p className='navbar__logo--text'>Proyecto dinamita</p>
				</div>
				<div className='navbar__menu'>
					<ul className='menu__list'>
						<li className='list__item'><a href='#home' className='list__item--link'>Home</a></li>
						<li className='list__item'><a href='#about' className='list__item--link'>About us</a></li>
						<li className='list__item'><a href='#projects' className='list__item--link'>Projects</a></li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
