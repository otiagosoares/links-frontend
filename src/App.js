import React from 'react';
import {Switch, BrowserRouter, Link, Route} from 'react-router-dom'

const App = () =>{

    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        <li> <Link to="/sign-in">Sign in</Link></li>
                        <li> <Link to="/sign-up">Sign up</Link></li>
                        <li> <Link to="/manage/links/create">Create Link</Link></li>
                        <li> <Link to="/manage/links/edit">Edit Link</Link></li>
                        <li> <Link to="/manage/links">Links</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/sign-in'> <h1>Sign in</h1> </Route>
                    <Route path='/sign-up'> <h1>Sign up</h1> </Route>
                    <Route path='/manage/links/create'> <h1>Create</h1> </Route>
                    <Route path='/manage/links/edit'> <h1>Edit</h1> </Route>
                    <Route path='/manage/links'> <h1>Links</h1> </Route>
                    <Route path='/'> <h1>Home</h1> </Route>
                </Switch>
            </>
        </BrowserRouter>
    )
}

export default App;