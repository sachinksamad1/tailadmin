import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  // State signals
  isExpanded = signal(true);
  isHovered = signal(false);
  isMobileOpen = signal(false);
  
  // Track which submenu is manually open using a unique key 'group-index'
  openSubmenu = signal<string | null>(null);

  toggleSidebar() {
    this.isExpanded.update(v => !v);
  }

  toggleMobile() {
    this.isMobileOpen.update(v => !v);
  }

  setHover(value: boolean) {
    if (!this.isExpanded()) {
      this.isHovered.set(value);
    }
  }

  // Logic to toggle submenu
  toggleSubmenu(key: string) {
    this.openSubmenu.update(current => current === key ? null : key);
  }
}