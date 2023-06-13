import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-light ">
                    <div className="container "> 
                        <Link className="navbar-brand text-white" to="/">DailyNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav " >
                                <Link className="nav-link text-white" to="/">Home</Link>
                                <Link className="nav-link text-white" to="/business">Business</Link>
                                <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
                           
                                <Link className="nav-link text-white" to="/health">Health</Link>
                                <Link className="nav-link text-white" to="/science">Science</Link>
                                <Link className="nav-link text-white" to="/sports">Sports</Link>
                                <Link className="nav-link text-white" to="/technology">Technology</Link>

                            </div>
                        </div>
                    </div>
                </nav>
            </div> 
        )
    
}

export default Header
