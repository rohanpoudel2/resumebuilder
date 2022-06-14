import './nav.css';

const Nav = () => {
  return (
    <div className="container">
      <nav>
        <div className="nav-elements">
          <div className="nav-logo">
            <span>Simple Resume Builder</span>
          </div>
          <div className="nav-items">
            <div className="nav-item">Home</div>
            <div className="nav-item">Create Resume</div>
            <div className="nav-item">Demo</div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav