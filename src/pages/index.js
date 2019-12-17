import React from "react"
import {Link} from 'gatsby'
import Header from '../components/header'
export default () => (
    <div>
        <Header headerText="Home" />
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img style={{ width: '100%' }} src="https://source.unsplash.com/random/400x200" alt="" />
        <Link to="/contact/">Contact Us</Link>
    </div>
)