import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import "./styles/App.css";

class App extends Component {
    render() {
        return (
            <div className={'appGrids'}>

                <div className={"usersLink links"}>
                    <Link style={{color: 'white' }} to={"/users"}>Users</Link>
                </div>

                <div className={"postsLink links"}>
                    <Link style={{color: 'white' }} to={"/posts"}>Posts</Link>
                </div>



                <div className={'freespece links'}>
                {/*    test branch*/}
                </div>

                <div className={"content"}>
                    <Switch>
                        <Route path={"/users"} render={() => {
                            return(
                                <Users/>
                            )
                        }}/>
                        <Route path={"/posts"} render={() => {
                            return (
                                <Posts/>
                            )
                        }}/>
                    </Switch>
                </div>

            </div>
        );
    }
}

export default App;