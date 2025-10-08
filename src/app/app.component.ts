import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  time?: string;
  loading = false;
  error?: string;

  async getTime() {
    this.loading = true;
    this.error = undefined;
    try {
      const res = await fetch(`${(window as any).env?.BACKEND_URL ?? ''}/api/time`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      this.time = data.utc;
    } catch (e: any) {
      this.error = e.message;
    } finally {
      this.loading = false;
    }
  }
}
