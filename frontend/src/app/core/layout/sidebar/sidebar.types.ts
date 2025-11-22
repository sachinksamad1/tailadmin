import { Type } from '@angular/core';

export interface SubMenuItem {
  name: string;
  path: string;
  pro?: boolean;
  new?: boolean;
}

export interface MenuItem {
  icon: Type<any>; // Component reference for ngComponentOutlet
  name: string;
  path?: string;
  subItems?: SubMenuItem[];
}

export interface MenuGroup {
  title: string;
  items: MenuItem[];
}