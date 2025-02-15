import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch  } from "react-router-dom";
import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header> 
                {/* <Route path="/" exact render={() => <div>Home</div>} />
                <Route path="/" exact render={() => <div>Home2</div>} /> */}
                <Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" component={FullPost} /> 
                </Switch>
            </div>
        );
    }
}

export default Blog;