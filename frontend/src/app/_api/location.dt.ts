import { ActivityDto } from "./activity.dto";

export interface LocationDto {
    id: number;
    name: string;
    country: string;
    city: string;
    postalCode: number;
    street: string;
    streetNumber: number;
    activities: ActivityDto[];
}

export interface LocationCreateDto {
    name: string;
    country: string;
    city: string;
    postalCode: number;
    street: string;
    streetNumber: number;
    activities: ActivityDto[];
}