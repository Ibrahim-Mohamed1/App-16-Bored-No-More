import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            activity: []
        }
    }

    getActivity = () => {
        axios.get(`https://www.boredapi.com/api/activity/`).then(res => {
            this.setState({
                activity: res.data.activity
            })
        }).catch(function (error) {
            window.location.reload()
        });
    }

    render() {
        return (
            <Provider value={{
                getActivity: this.getActivity,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}