import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreatePersonDto, PersonDto, PersonListDto } from 'src/app/_api/person.dto';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  static readonly PERSON = 'person';
  static readonly ALL = '/all';
  static readonly LIST = '/list';
  static readonly NEW = '/new';

  constructor(private http: HttpClient){}
  
  getPersonById(personId: number): Observable<PersonDto>{
    return this.http.get<PersonDto>(PersonService.PERSON + '/' + personId);
  }

  getAllPersons(): Observable<PersonDto[]>{
    return this.http.get<PersonDto[]>(PersonService.PERSON + PersonService.ALL);
  }

  getAllPersonListDtos(): Observable<PersonListDto[]>{
    return this.http.get<PersonListDto[]>(PersonService.PERSON + PersonService.ALL + PersonService.LIST);
  }
  
  createNewPerson(createPersonDto: CreatePersonDto): Observable<PersonDto>{
    return this.http.post<PersonDto>(PersonService.PERSON + PersonService.NEW, createPersonDto);
  }
  
  deletePerson(personId: number): Observable<void>{
    return this.http.delete<void>(PersonService.PERSON + '/' + personId);
  }
}