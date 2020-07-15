import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'

import Nav from './components/_layout/nav';

const App = () =>{

    return (
        <BrowserRouter>
            <>
            
                <Nav />

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