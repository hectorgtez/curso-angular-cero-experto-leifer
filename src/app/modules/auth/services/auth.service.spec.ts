import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of } from 'rxjs';

import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { post: jasmine.Spy };
  let mockUser: any = (mockRaw as any).default;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an object with data and token session', () => {
    // Arrange
    const user: any = mockUser.userOk;
    const mockResponse = {
      data: {},
      tokenSession: '0x0x0x0'
    };
    let getProperties: any = {};

    httpClientSpy.post.and.returnValue( of(mockResponse) );

    // Act
    service.sendCredentials(user.email, user.password)
      .subscribe( response => {
        getProperties = Object.keys(response);
      });

    // Assert
    expect(getProperties).toContain('data');
    expect(getProperties).toContain('tokenSession');
  });
});
