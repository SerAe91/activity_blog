import { PersonDto } from "./person.dto";

export interface ActivityDto {
    id: number;
    author: PersonDto;
    title: string;
    description: string;
    postTime: Date;
    persons: PersonDto;
}

export interface ActivityCreateDto {
    authorId: number;
    title: string;
    description: string;
    postTime: Date;
    personIds: number[];
}