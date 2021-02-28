'use strict';

import React from "react";
import styled from 'styled-components';
import Form from "./Form";
import TournamentBracket from "./TournamentBracket";

const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 3em;
  justify-content: center;
  width: 80%
`;

export default function HomePage() {
    return (
        <Container>
            <Form/>
            <TournamentBracket name="name" />
        </Container>
    );
}
