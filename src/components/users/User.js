import React, {Component} from 'react';
import "../../styles/userAndPost.css";

class User extends Component {
    render() {

        let {item} = this.props;

        return (
            <div className={'font'}>
                {item.id}. {item.name}
            </div>
        );
    }
}

export default User;