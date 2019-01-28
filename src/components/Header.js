import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-heart-o"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Rachael & Greg are getting married</h1>
                <p>Saturday March 16th, 2019 at 4:30 PM at the <a rel="noopener noreferrer" href="https://goo.gl/maps/DudTveK9uUx" target="_blank">Los
                Angeles River Center and Gardens</a></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('story')}}>Our Story&nbsp;</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('venue')}}>The Big Day</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('visiting')}}>Visiting LA</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('rsvp')}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RSVP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
