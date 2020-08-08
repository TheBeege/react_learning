'use strict';

import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import {Component} from "react/cjs/react.production.min";
import TournamentTeam from "./components/TournamentTeam";


const tournamentTeamExampleData = [
    {
        // Thanks to https://pixabay.com/vectors/lion-head-isolated-art-logo-309219/
        teamLogo: 'https://cdn.pixabay.com/photo/2014/04/03/00/43/lion-309219_960_720.png',
        teamName: 'Lions'
    },
    {
        // Thanks to https://pixabay.com/illustrations/logo-abstract-team-community-1154555/
        teamLogo: 'https://cdn.pixabay.com/photo/2016/01/21/19/33/logo-1154555_960_720.png',
        teamName: 'Abstract'
    },
    {
        // Thanks to https://pixabay.com/illustrations/logo-abstract-team-community-1154555/
        teamLogo: 'https://cdn.pixabay.com/photo/2016/01/21/19/33/logo-1154555_960_720.png',
        teamName: 'Other Abstract'
    }
];

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
        const teamElements = tournamentTeamExampleData.map((team) =>
                    <TournamentTeam teamName={team.teamName} teamLogo={team.teamLogo}/>
                );
        return (
            <div>
            <Form />
            {teamElements}
            </div>
        );
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;