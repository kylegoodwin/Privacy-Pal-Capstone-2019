import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {DiscussPage} from './DiscussPage';
import {Content as content} from './content';
export const DiscussRouter = withRouter(props => <ModuleProto {...props}/>);

class ModuleProto extends Component {
    render() {
        let currentLocation = this.props.match.params.name;
        return(
        <DiscussPage content={content[currentLocation]}></DiscussPage>
        )
    }
}