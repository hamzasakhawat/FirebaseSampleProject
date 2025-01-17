import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllCategoryCriteria, Category, CategoryCriteria, CategoryUpsertDto, Page } from '../../shared/domain';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private readonly httpClient = inject(HttpClient);

  private readonly apiUrl = `${environment.backendURL}/categories`;
  private readonly apiV2Url = `${environment.backendURL}/v2/categories`;

  // Read

  getCategories = (pagingCriteria: CategoryCriteria): Observable<Page<Category>> =>
    this.httpClient.get<Page<Category>>(this.apiUrl, { params: new HttpParams({ fromObject: { ...pagingCriteria } }) });

  getAllCategories = (sortCriteria: AllCategoryCriteria): Observable<Category[]> =>
    this.httpClient.get<Category[]>(this.apiV2Url, { params: new HttpParams({ fromObject: { ...sortCriteria } }) });

  // Create & Update

  upsertCategory = (category: CategoryUpsertDto): Observable<void> => this.httpClient.put<void>(this.apiUrl, category);

  // Delete

  deleteCategory = (id: string): Observable<void> => this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
}
