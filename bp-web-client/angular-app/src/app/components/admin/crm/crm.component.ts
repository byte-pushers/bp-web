import { Component, OnInit } from '@angular/core';
import { KeapService } from '@services/keap.service';

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [],
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent implements OnInit {
  constructor(private keapService: KeapService) {
  }

  ngOnInit(): void {
    console.log('initializing component.');
  }

  async authorizeApp2(): Promise<void> {
    await this.keapService.authorizeApp();
  }

  authorizeApp(): void {
    const clientId = 'G980N1pB9Epfzvv6ttLHRNBSW6F6gGQsLHXpiChwD4sOA0ta';
    const redirectUri = 'https://bytepushers.software/admin';
    const responseType = 'code';
    const scope = 'full';
    const url = `https://accounts.infusionsoft.com/app/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    location.href = url;
  }
}
