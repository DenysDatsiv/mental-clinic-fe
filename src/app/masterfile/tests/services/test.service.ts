import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {API_TESTS} from '../../../app.constants';
import {Test} from '../models/test.model';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {
  }


  getTests(searchKeyword?: string, type?: string, sliceCount?: number): Observable<Test[]> {
    let params = new HttpParams();
    if (searchKeyword) {
      params = params.set('searchKeyword', searchKeyword);
    }
    if (type) {
      params = params.set('type', type);
    }

    console.log(this.http.get<Test[]>(API_TESTS, {params}).pipe(
      map(tests => sliceCount ? tests.slice(0, sliceCount) : tests)
    ))
    return this.http.get<Test[]>(API_TESTS, {params}).pipe(
      map(tests => sliceCount ? tests.slice(0, sliceCount) : tests)
    );

  }


  getTestById(id: string): Observable<Test> {
    return this.http.get<Test>(`${API_TESTS}/${id}`).pipe(
      catchError((error) => {
        console.error(`Error fetching test with ID ${id}:`, error);
        return throwError(() => error);
      })
    );
  }

  createTest(test: Test): Observable<Test> {
    return this.http.post<Test>(API_TESTS, test).pipe(
      catchError((error) => {
        console.error('Error creating test:', error);
        return throwError(() => error);
      })
    );
  }

  updateTest(id: string, test: Test): Observable<Test> {
    return this.http.put<Test>(`${API_TESTS}/${id}`, test).pipe(
      catchError((error) => {
        console.error(`Error updating test with ID ${id}:`, error);
        return throwError(() => error);
      })
    );
  }

  deleteTest(id: string): Observable<any> {
    return this.http.delete<any>(`${API_TESTS}/${id}`).pipe(
      catchError((error) => {
        console.error(`Error deleting test with ID ${id}:`, error);
        return throwError(() => error);
      })
    );
  }
}
