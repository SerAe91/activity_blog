import { LocationDto } from "./location.dto";
import { PersonDto } from "./person.dto";

export interface ActivityDto {
    id: number;
    author: PersonDto;
    title: string;
    description: string;
    postTime: Date;
    persons: PersonDto[];
    locations: LocationDto[];
}

export interface CreateActivityDto {
    authorId: number;
    title: string;
    description: string;
    postTime: Date;
    personIds: number[];
    locationIds: number[];
}