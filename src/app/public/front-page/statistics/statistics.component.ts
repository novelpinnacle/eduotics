import { Component, OnInit } from '@angular/core';
import { FrontEndService } from 'src/app/services/frontend.service';

interface Statistics {
  id: number;
  title: string;
  value: string; // Keep as string to include the '+' symbol
  imagePath: string;
}

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  standalone: false,
})
export class StatisticsComponent implements OnInit {
  statistics: Statistics[] = []; // Initialize as an empty array

  constructor(private frontEndService: FrontEndService) {}

  ngOnInit(): void {
    this.fetchStatistics();
  }

  fetchStatistics(): void {
    this.frontEndService.getStatistics().subscribe({
      next: (statistics: Statistics[]) => {
        this.statistics = statistics;
        this.statistics.forEach((stat) => {
          const counterMax = parseInt(stat.value.replace('+', ''), 10); // Parse value as a number
          this.animateValue(stat.id, 0, counterMax, 2000); // Adjust duration as needed
        });
      },
      error: (error) => {
        console.error('Failed to fetch statistics:', error);
      },
    });
  }

  animateValue(id: number, start: number, end: number, duration: number): void {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;

    // Find the statistic object by ID
    const stat = this.statistics.find((s) => s.id === id);

    if (stat) {
      const interval = setInterval(() => {
        current += increment;
        stat.value = current + (increment === 1 ? '+' : ''); // Update the value dynamically

        // Stop the interval once the value is reached
        if (current === end) {
          clearInterval(interval);
        }
      }, stepTime);
    }
  }
}