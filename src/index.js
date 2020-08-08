'use strict';

import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import {Component} from "react/cjs/react.production.min";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components"
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: white;
  }
`;

const StyledMain = styled.div`
background-color: black;
`;

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
            <StyledMain>
                <Header />
                <HomePage />
                <Footer />
                <GlobalStyle/>
            </StyledMain>
        );
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Main/>, wrapper) : false;