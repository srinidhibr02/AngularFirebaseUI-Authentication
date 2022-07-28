import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-googauth',
  templateUrl: './googauth.component.html',
  styleUrls: ['./googauth.component.scss'],
})
export class GoogauthComponent implements OnInit {
  
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(result => console.log(result));
  }
  logout(){
    this.afAuth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult){
    console.log('SuccessCallback',data);
    this.router.navigate(['home']);
  }

  errorCallback(data:FirebaseUISignInFailure){
    console.warn('errorCallback',data);
  }

  uiShownCallback(){
    console.log('UI Shown');
  }
  onSignin = () => {
    
  }
}
