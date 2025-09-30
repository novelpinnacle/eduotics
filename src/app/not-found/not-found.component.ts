import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <button (click)="goHome()" class="home-btn">
          <i class="fa fa-home"></i> Go Home
        </button>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
    }
    .not-found-content h1 {
      font-size: 8rem;
      margin: 0;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    .not-found-content h2 {
      font-size: 2rem;
      margin: 0 0 1rem 0;
    }
    .not-found-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    .home-btn {
      background: rgba(255,255,255,0.2);
      border: 2px solid white;
      color: white;
      padding: 12px 24px;
      font-size: 1rem;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .home-btn:hover {
      background: white;
      color: #667eea;
      transform: translateY(-2px);
    }
  `]
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}