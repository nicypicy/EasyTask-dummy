import { Component , Input, input, computed, Output, EventEmitter} from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter;

  //select = output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();


  get imagePath() {
    return "/users/" + this.user.avatar;
  }

//   imagePath = computed(()=> {
//   return "/users/" + this.avatar
// });

onSelectUser() {
 this.select.emit(this.user.id);
}
}
