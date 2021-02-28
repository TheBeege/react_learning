'use strict';

import React from "react";
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1em;
  width: 80%;
  margin: auto;
`;

export default function Footer() {
    return (
        <StyledFooter>
            © 2020 Bogus | Some info | Some other info
        </StyledFooter>
    );
}
