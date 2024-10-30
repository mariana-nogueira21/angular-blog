import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  photoCover: string = "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
  contentTitle: string = "Explicabo voluptates qui"
  contentDescription: string = "Qui maiores quia sed galisum obcaecati est explicabo voluptates quiofficia ratione"

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
