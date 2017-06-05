import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ],
  providers: []
})
export class HeroesComponent implements OnInit  { 
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(
    private router: Router,
    private heroService: HeroService
    ) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
