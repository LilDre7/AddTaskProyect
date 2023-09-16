import logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a
            href=""
            className="navbar-brand"
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              width={40}
              height={40}
            />
            <h2>Add Task App</h2>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
