import logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header className='header'>
        <div className="logo"><img src={logo} alt="" /></div>
        <nav className='nav'>
        <li className='link'>Features</li>
        <li className='link'>Team</li>
        <li className='link'>Sign in</li>
        </nav>
    </header>
  )
}
