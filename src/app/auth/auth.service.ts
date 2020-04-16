import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  /**
   * observable que contiene un error, si es que existe
   */
  eventAuthErrors$ = this.eventAuthError.asObservable();
  newUser: any;

  constructor(private afAuth:AngularFireAuth,
              private db: AngularFirestore,
              private router: Router) { }

/**
 *
 * @param user usuario enviado por el formulario del FE
 */
  createUser(user){
    this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then(
      creadencials => {
        /**
         * se inicializa un objeto usuario con los datos del FE
         * y se actualiza el nombre a desplegar en firebase
         */
        this.newUser = user;
        console.log(creadencials);
        creadencials.user.updateProfile({displayName: user.firstName + ' '+ user.lastName})

        this.insertUserData(creadencials)
          .then(() => {
            this.router.navigate(['/list']);
          }
        );
      }
    ).catch(error => {
      /**
       * si cae en error este metodo se emite un error en el observable
       * para que el FE lo capture y muestre un error (authError en registration)
       */
      this.eventAuthError.next(error);
    });
  }


  /**
   * se inserta este usuario en la base de datos de firebase
   * @param userCredential
   */
  insertUserData(userCredential: firebase.auth.UserCredential){
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      firstname: this.newUser.firstName,
      lastname: this.newUser.lastName,
      role: 'network user'
    });
  }
}