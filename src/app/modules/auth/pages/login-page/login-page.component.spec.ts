import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form should be invalid', () => {
    // Arrange
    const mockCredentials = {
      email: '0x0x0x0x0',
      password: '01010101010101'
    };

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    // Act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    // Assert
    expect(component.formLogin.invalid).toBeTruthy();
  });

  it('form should be valid', () => {
    // Arrange
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    };

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    // Act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    // Assert
    expect(component.formLogin.valid).toBeTruthy();
  });

  it('Login button label should be "Iniciar sesión"', () => {
    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    const getInnerText = elementRef.nativeElement.innerText;

    expect(getInnerText).toEqual('Iniciar sesión');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
