import React from "react"
import { Link } from "gatsby"

export default props => (
    <div style={{ padding: '20px', background: 'black', display: 'flex', justifyContent: "space-between" }}>
        <Link to="/">
            <img style={{ width: '150px' }} src="https://websiteonwheels.com/wp-content/uploads/2019/08/Website-on-Wheels-white.svg" />
        </Link>
        <Link to="/about/">
            <h3 style={{ color: 'white' }}>About</h3>
        </Link>
        <Link to="/contact/">
            <h3 style={{ color: 'white' }}>Contact</h3>
        </Link>
    </div>
)