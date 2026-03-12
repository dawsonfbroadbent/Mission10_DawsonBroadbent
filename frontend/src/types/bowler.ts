// Shared shape for bowler records returned by the API and rendered in the UI.
export type bowler = {
    bowlerId: number;
    bowlerName: string;
    teamName: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
};
