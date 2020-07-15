import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

const NavTop = props => {
    return(
        <>
            <Nav>
                <ul>
                    <li> <Link to="/sign-in">Sign in</Link></li>
                    <li> <Link to="/sign-up">Sign up</Link></li>
                    <li> <Link to="/manage/links/create">Create Link</Link></li>
                    <li> <Link to="/manage/links/edit">Edit Link</Link></li>
                    <li> <Link to="/manage/links">Links</Link></li>
                </ul>
            </Nav>
        </>
    )
}

export default NavTop;