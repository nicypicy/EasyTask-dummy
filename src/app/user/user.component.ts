import { Component , Input, input, computed, Output, EventEmitter} from '@angular/core';




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!:string;
  @Input({required: true})  avatar!: String;
  @Input({required: true})  name!: String;
  @Output() select = new EventEmitter;

  // avatar = input.required<string>();
  // name = input.required<string>();


  get imagePath() {
    return "/users/" + this.avatar;
  }

//   imagePath = computed(()=> {
//   return "/users/" + this.avatar
// });

onSelectUser() {
 this.select.emit(this.id);
}
}
