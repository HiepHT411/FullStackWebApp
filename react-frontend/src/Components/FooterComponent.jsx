import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(pros){
        super(pros)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className = "text-muted">All rights reserved 2020<br></br> &copy;HiepHT</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;