import React, { Component } from 'react';

class HeaderComponenet extends Component {
    constructor (pros){
        super(pros)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href = "https://m.me" className = "navbar-brand">Beermen Corporation</a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderComponenet;