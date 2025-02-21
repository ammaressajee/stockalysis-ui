import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockAnalysisService {

  private baseUrl = environment.dev.API_URL; // Flask backend URL
  private getStockAnalysisUrl = this.baseUrl + '/analyze?ticker=';
  private getStockPredictionUrl = this.baseUrl + '/predict?ticker=';

  constructor(private http: HttpClient) { }

  getStockAnalysis(ticker: string): Observable<any> {
    return this.http.get<any[]>(`${this.getStockAnalysisUrl}${ticker}`);
  }

  getStockPrediction(ticker: string, days: string): Observable<any> {
    return this.http.get<any[]>(`${this.getStockPredictionUrl}${ticker}&days=${days}`);
  }
}
