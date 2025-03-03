import { Component } from '@angular/core';
import { StockAnalysisService } from '../../services/stock-analysis.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-analysis.component.html',
  styleUrl: './stock-analysis.component.scss'
})
export class StockAnalysisComponent {

  isAuthenticated = false;
  ticker: string = '';
  stockData: any = null;
  errorMessage: string = '';
  errorMessage2: string = '';
  stockPrices: any = null;
  selectedExchange: string = 'US';

  constructor(private stockService: StockAnalysisService, private http: HttpClient, private authService: AuthService) {
  }

  selectExchange(option: string) {
    this.selectedExchange = option;
  }

  getStockAnalysis(ticker: string, exchange: string): void {
    this.ticker = ticker
    if (!ticker) {
      this.errorMessage = 'Please enter a valid stock ticker';
      return;
    }

    this.stockService.getStockAnalysis(ticker, exchange).subscribe(

      (data) => {

        this.errorMessage2 = '';
        this.stockData = data;
        this.scrollToSection();
        this.stockData.log.splice(11, 1);

        console.log(this.stockData); // Debugging
      },
      (error) => {
        console.error('Error fetching stock data:', error);
        this.errorMessage2 = error.error.error
        console.log(this.errorMessage2)
      }
    );
  }

  scrollToSection() {
    const element = document.getElementById("stock_result");
    if (element) {
      const offset = 60; // Adjust this value to move slightly above
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    
  }

  getStockPricePrediction(days: string) {

    this.stockService.getStockPrediction(this.ticker, days).subscribe(
      (data) => {
        this.stockPrices = data;
        console.log(this.stockPrices); // Debugging
      },
      (error) => {
        console.error('Error making prediction:', error);
        console.log(this.errorMessage2)
      }
    );

  }

  // Function to format numbers with two decimal places
  formatFibonacciNumber(value: any): string {
    return value.toFixed(4); // Example: 248.61
  }

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAuth) => {
      this.isAuthenticated = isAuth
    });
  }

}
