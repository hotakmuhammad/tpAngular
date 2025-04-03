export interface IPokemonDetails {
    id: number;
    name: string;
    sprites?: {
        front_default: string;
    };
    types: { type: { name: string } }[];
    height: number;
    weight: number;
}