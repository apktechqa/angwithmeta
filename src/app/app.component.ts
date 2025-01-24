import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Title, Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// export class AppComponent {
//   title = 'MRD - Temp';
// }

export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data;
        })
      )
      .subscribe(data => {
        // Update the meta title
        const title = data['title'] || 'Title';
        this.titleService.setTitle(title);

        // Update the meta description
        const description = data['description'] || 'Description.';
        this.metaService.updateTag({ name: 'description', content: description });

        // Update the meta keywords
        const keywords = data['keywords'] || 'Keywords';
        this.metaService.updateTag({ name: 'keywords', content: keywords });
      });
  }
}