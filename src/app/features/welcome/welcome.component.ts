import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-welcome',
  imports: [ButtonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent { }
