import { Component, OnInit } from '@angular/core';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { Neighborhood } from '../neighborhood/neighborhood';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Login } from '../login/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-resgistration',
  templateUrl: './login-resgistration.component.html',
  styleUrls: ['./login-resgistration.component.css'],
})
export class LoginResgistrationComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private neighborhoodService: NeighborhoodService,
    private loginService: LoginService,
    private router: Router
  ) {}

  neighborhoods: Array<Neighborhood>;

  chosenNeighborhood: Neighborhood;

  residentLoginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    govId: new FormControl(''),
    neighborhood: new FormControl(''),
  });

  onSubmit(): void {
    console.log(
      'Username:' +
        this.residentLoginForm.get('username').value +
        '\n' +
        'Password:' +
        this.residentLoginForm.get('password').value +
        '\n' +
        'GovId:' +
        this.residentLoginForm.get('govId').value +
        '\n' +
        'Neighborhood:' +
        this.residentLoginForm.get('neighborhood').value
    );
    this.addResidentLogin();
    this.residentLoginForm.controls.password.setValue('');
  }

  getNeighborhoods(): void {
    this.neighborhoodService.getNeighborhoods().subscribe((neighborhoods) => {
      // this.neighborhoods = neighborhoods.slice(0,4);
      this.neighborhoods = neighborhoods;
    });
  }

  getNeighborhood(id: number): Neighborhood {
    this.neighborhoodService
      .getNeighborhoodById(id)
      .subscribe((chosenNeighborhood) => {
        // this.neighborhoods = neighborhoods.slice(0,4);
        this.chosenNeighborhood = chosenNeighborhood;
      });
    return this.chosenNeighborhood;
  }

  addResidentLogin(): void {
    var username: string = this.residentLoginForm.value.username;
    var password: string = this.residentLoginForm.value.password;
    var govId: number = this.residentLoginForm.value.govId;
    var neighborhood: number = this.residentLoginForm.value.neighborhood;

    var login: Login = new Login(username, password, govId);

    console.log(login);
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };
    var loginName = this.residentLoginForm.value.username;

    var observable = this.loginService
      .addLogin(neighborhood, login)
      .subscribe(() => {
        this.residentLoginForm.reset();
        this.residentLoginForm.controls.neighborhood.setValue('Choose...');
        this.toastr.success(
          'The username ' + loginName + ' was added.',
          'Success',
          toastrConfig
        );
        setTimeout(() => {
          this.router.navigateByUrl('/newProfile');
        }, 2300);
      });
  }

  ngOnInit() {
    this.getNeighborhoods();
  }
}
