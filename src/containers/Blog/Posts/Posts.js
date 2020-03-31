import React, { Component } from 'react';
// import axios from '../../../axios';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    
    state = {
        posts: []
    }

    componentDidMount() {
        console.log("[Posts] Component Did Mount");
        axios.get('posts')
        .then( (response) => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map( post => {
                return {
                    ...post,
                    author: 'Daniel'
                }
            });
            this.setState({ posts: updatedPosts });
            // console.log(response);
        })
        .catch( error => {
            console.log("[Posts] [Error] Component Did Mount");
            console.log(error);
            // this.setState({ error: true });
        });
    }

    postSelectedHandler(id) {
        // this.setState({ selectedPostId: id });
        
        // this.props.history.push({ pathname: '/posts/' + id});
        this.props.history.push( '/posts/' + id );
    }

    render () {
        let posts = <p style={{textAlign: 'center' }}> Alguma merda aconteceu </p>;
        if(!this.state.error){
            posts = this.state.posts.map( post => {
                return (
                    <Link to={'/posts/' + post.id} key={post.id} >
                        <Post
                            title={post.title}
                            author={post.author}
                            key={post.id}
                            clicked={ () => this.postSelectedHandler(post.id) } />
                    </Link>
                )
            });
        }

        // this.props.match.url retorna a URL que carregou este componente.
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;