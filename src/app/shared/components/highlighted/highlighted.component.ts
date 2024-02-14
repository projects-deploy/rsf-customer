import { Component, OnInit } from '@angular/core';
import { Highlights } from 'src/app/models/Highlights';
import { HighlightsService } from 'src/app/services/highlights/highlights.service';

@Component({
  selector: 'app-highlighted',
  templateUrl: './highlighted.component.html',
  styleUrls: ['./highlighted.component.scss']
})
export class HighlightedComponent implements OnInit {

  highlights: Highlights[] = [];

  constructor(
    private highlightsService: HighlightsService,
  ) { }

  ngOnInit(): void {
    this.getHighlights();
  }

  /* EM DESTAQUE */
  getHighlights() {
    this.highlightsService.getAllHighlights().subscribe({
      next: (data) => {
        this.highlights = data;
        // console.log('GET HIGHLIGHT DATA', data);
      },
      error: (err) => {
        console.log('GET HIGHLIGHT ERRR', err);
      }
    });
  }

}
