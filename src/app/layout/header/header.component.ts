import {Component} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {EventType} from "../../api/api.domain";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private readonly apiService: ApiService) {
  }

  get types() {
    return this.apiService.types;
  }

  trackBy(index: number, {id}: EventType): string {
    return id;
  }
}
