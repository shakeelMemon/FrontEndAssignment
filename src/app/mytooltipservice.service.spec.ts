import { TestBed } from '@angular/core/testing';

import { MytooltipserviceService } from "./MytooltipserviceService";

describe('MytooltipserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MytooltipserviceService = TestBed.get(MytooltipserviceService);
    expect(service).toBeTruthy();
  });
});
