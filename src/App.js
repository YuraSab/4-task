import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
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
                    <Routes>
                        <Route path={"/users"} element={<Users/>}/>
                        <Route path={"/posts"} element={<Posts/>}/>
                    </Routes>
                </div>

            </div>
        );
    }
}

export default App;