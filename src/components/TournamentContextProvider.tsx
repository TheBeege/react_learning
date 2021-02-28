import React from "react";

interface TournamentContextProps {
    name: string;
    currentRound: number;
    totalTeams: number;
    totalRounds: number;
}

export const defaultTournamentContextProps = {
    name: 'Unnamed Tournament',
    currentRound: 0,
    totalTeams: 0,
    totalRounds: 0,
};

export const TournamentContext = React.createContext<TournamentContextProps>(defaultTournamentContextProps);
