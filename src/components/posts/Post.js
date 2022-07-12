import React, {Component} from 'react';
import "../../styles/userAndPost.css";

class Post extends Component {
    render() {

        let {item} = this.props;

        return (
            <div className={'font'}>
                {item.id}. {item.title}
            </div>
        );
    }
}

export default Post;