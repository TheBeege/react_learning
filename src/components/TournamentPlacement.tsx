import TournamentTeam, {TournamentTeamProps} from "./TournamentTeam";
import React from "react";

export interface TournamentPlacementProps {
    team: TournamentTeamProps;
    round: number;
    seed: number;
}

export default function TournamentPlacement(props: TournamentPlacementProps) {
    return <TournamentTeam teamLogo={props.team.teamLogo} teamName={props.team.teamName} />;
}
