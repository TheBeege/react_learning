'use strict';

import React from "react";
import ReactDOM from "react-dom";
import Form from "./js/components/Form";
import {Component} from "react/cjs/react.production.min";

class Main extends Component {
    constructor() {
        super();

        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // pass
    }

    render() {
        return (
            <Form />
        );
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;