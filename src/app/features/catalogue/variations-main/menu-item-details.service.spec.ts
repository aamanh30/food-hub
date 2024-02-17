import { TestBed } from '@angular/core/testing';

import { MenuItemDetailsService } from './menu-item-details.service';

describe('MenuItemDetailsService', () => {
  let service: MenuItemDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
