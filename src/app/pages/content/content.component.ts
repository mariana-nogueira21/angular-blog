import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  photoCover: string = "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
  contentTitle: string = "Explicabo voluptates qui"
  contentDescription: string = "Qui maiores quia sed galisum obcaecati est explicabo voluptates quiofficia ratione"

}
