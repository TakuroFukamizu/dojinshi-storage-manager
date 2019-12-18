declare module 'random-name' {
    interface IRandom { 
        first: string;
        last: string;
        middle: string;
        place: string;
    }
    export default function random(): IRandom;
}