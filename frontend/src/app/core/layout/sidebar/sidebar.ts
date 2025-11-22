import { Component, computed, inject, Type } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Router, RouterModule, RouterLinkActive } from '@angular/router';

// Services & Types
import { SidebarService } from './sidebar.service';
import { MenuItem, MenuGroup } from './sidebar.types';

// Components
import { SidebarWidgetComponent } from './sidebar-widget';

// Icons
import { PageIconComponent} from '../../icons/PageIconComponent';
import { ChevronDownIconComponent } from '../../icons/ChevronDownIconComponent';
import { HorizontalDotsComponent } from '../../icons/HorizontalDotsComponent';
import { GridIconComponent } from '../../icons/GridIconComponent';
import { CalendarIconComponent } from '../../icons/CalendarIconComponent';
import { UserCircleIconComponent } from '../../icons/UserCircleIconComponent';
import { ListIconComponent } from '../../icons/ListIconComponent';
import { TableIconComponent } from '../../icons/TableIconComponent';
import { PieChartIconComponent } from '../../icons/PieChartIconComponent';
import { BoxCubeIconComponent } from '../../icons/BoxCubeIconComponent';
import { PlugInIconComponent } from '../../icons/PlugInIconComponent';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    NgComponentOutlet,
    RouterModule,
    RouterLinkActive,
    SidebarWidgetComponent,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private sidebarService = inject(SidebarService);
  private router = inject(Router);

  // Expose signals to template
  isExpanded = this.sidebarService.isExpanded;
  isHovered = this.sidebarService.isHovered;
  isMobileOpen = this.sidebarService.isMobileOpen;
  openSubmenu = this.sidebarService.openSubmenu;

  // Icons for static usage
  chevronDownIcon = ChevronDownIconComponent;
  horizontalDotsIcon = HorizontalDotsComponent;

  // Menu Definition
  menuGroups: MenuGroup[] = [
    {
      title: "Menu",
      items: [
        { icon: GridIconComponent, name: "Dashboard", subItems: [{ name: "Ecommerce", path: "/", pro: false }] },
        { icon: CalendarIconComponent, name: "Calendar", path: "/calendar" },
        { icon: UserCircleIconComponent, name: "User Profile", path: "/profile" },
        { 
          name: "Forms", 
          icon: ListIconComponent, 
          subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }] 
        },
        { 
          name: "Tables", 
          icon: TableIconComponent, 
          subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }] 
        },
        { 
          name: "Pages", 
          icon: PageIconComponent, 
          subItems: [
            { name: "Black Page", path: "/blank", pro: false },
            { name: "404 Page", path: "/error-404", pro: false },
          ] 
        },
      ],
    },
    {
      title: "Others",
      items: [
        { 
          icon: PieChartIconComponent, 
          name: "Charts", 
          subItems: [
            { name: "Line Chart", path: "/line-chart", pro: false },
            { name: "Bar Chart", path: "/bar-chart", pro: false },
          ] 
        },
        { 
          icon: BoxCubeIconComponent, 
          name: "Ui Elements", 
          subItems: [
            { name: "Alerts", path: "/alerts", pro: false },
            { name: "Avatars", path: "/avatars", pro: false },
            { name: "Badge", path: "/badge", pro: false },
            { name: "Buttons", path: "/buttons", pro: false },
            { name: "Images", path: "/images", pro: false },
            { name: "Videos", path: "/videos", pro: false },
          ] 
        },
        { 
          icon: PlugInIconComponent, 
          name: "Authentication", 
          subItems: [
            { name: "Signin", path: "/signin", pro: false },
            { name: "Signup", path: "/signup", pro: false },
          ] 
        },
      ],
    },
  ];

  // Logic to handle Mouse Events
  onMouseEnter() {
    if (!this.isExpanded()) {
      this.sidebarService.setHover(true);
    }
  }

  onMouseLeave() {
    this.sidebarService.setHover(false);
  }

  // Routing Helper
  isActive(url: string): boolean {
    return this.router.isActive(url, {
      paths: 'exact',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }

  // Toggle Submenu Logic
  handleToggleSubmenu(groupIndex: number, itemIndex: number) {
    const key = `${groupIndex}-${itemIndex}`;
    this.sidebarService.toggleSubmenu(key);
  }

  // Check if submenu is open
  isSubmenuOpen(groupIndex: number, itemIndex: number): boolean {
    const key = `${groupIndex}-${itemIndex}`;
    const item = this.menuGroups[groupIndex].items[itemIndex];
    
    // Check if manually opened
    if (this.openSubmenu() === key) return true;

    // Check if any child route is active (auto-expand)
    if (item.subItems) {
      return item.subItems.some(subItem => this.isActive(subItem.path));
    }

    return false;
  }
}
