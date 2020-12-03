import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfg8_6fT4z4oVapVBthxGHVJj5tsymuwc7AhwoHgupCS6YcYA/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0"  title='register'>Loading…</iframe>
        <br />
        <Link to="/" className="button button-primary button-wide-mobile button-sm">
        Home
        </Link>
        </div>
    )
}

export default Register;