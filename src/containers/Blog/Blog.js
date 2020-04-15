import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch/* , Redirect */ } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {
    state = {
        auth : false
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/posts"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}  >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*
                <Route path="/" exact render={ () => <h1>Home</h1>} />
                <Route path="/" render={ () => <h1>Home 2</h1>} />
                */}
                <Switch>
                    { this.setState.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts"  component={Posts} />

                    {/* Esto no deja de ser una forma de default.. si nada anterior funciona, siempre caerá en / */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}

                    {/* Aqui veremos outra forma de gerar um encaminhamento default */}
                    <Route render={() => <center><h1>Not found</h1></center>} />

                </Switch>
            </div>
        );
    }
}

export default Blog;