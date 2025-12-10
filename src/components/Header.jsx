import {Component} from "react";
import '../styles/styles.css'

export class Header extends Component {
    componentDidMount() {
        console.log('Header component has been mounted');
    }

    componentWillUnmount() {
        console.log('Header component has been unmounted');
    }

    render() {
        return (
            <>
                <h1>UFC Music</h1>
            </>
        )
    }
}