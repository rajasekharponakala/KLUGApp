'Use Strict';
angular.module('KLUG').controller('LoginController', ['$scope', '$state', '$localStorage', '$ionicPopup', 'firebase', '$firebaseAuth', '$firebaseArray', '$firebaseObject', 'Utils', function ($scope, $state, $localStorage, $ionicPopup, firebase, $firebaseAuth, $firebaseArray, $firebaseObject, Utils) {

    var fbref = firebase.database().ref();
    //var auth = $firebaseAuth();
    var usrdata = "";


    $scope.cuser = '';
    $scope.resetemail = '';


    $scope.user = {
      email: '',
      password: '',
      fullname: '',
      idno: ''
    };

/*
   $scope.signIn = function(){
    console.log("Entered signin");
      if (navigator.onLine){
            if (!$scope.user || !$scope.user.email){
                    Utils.alertshow("Invalid email",'Email is not valid!');
            } else if (!$scope.user || !$scope.user.password){
                    Utils.alertshow("Invalid password",'Password is not valid!');
            } else if(angular.isDefined($scope.user)){
                  Utils.show();
                  console.log("Entered signin.isDefined");
              auth.$signInWithEmailAndPassword($scope.user.email, $scope.user.password).then(function(firebaseUser){
                      $scope.afterlogin(firebaseUser);
                }).catch(function(error) {
                        if (error) {
                            switch (error.code) {
                              case "INVALID_EMAIL":
                                console.log("The specified user account email is invalid.");
                                break;
                              case "INVALID_PASSWORD":
                                console.log("The specified user account password is incorrect.");
                                break;
                              case "INVALID_USER":
                                console.log("The specified user account does not exist.");
                                break;
                              default:
                                console.log("Error logging user in:", error);
                            }
                          }
                         Utils.hide();
                         Utils.errMessage(error);
                });
              }
          } else {
                  $ionicPopup.alert({
                                    title: 'Internet not available !',
                                    template: 'Please connect to the internet to login',
                            }).then(function (code) {
                            });
                }
      }



 $scope.afterlogin = function(firebaseUser){
                  fbref.child('users').child(firebaseUser.uid).once("value",function(snapshot) {
                    usrdata = snapshot.val();
                     /* $scope.cart.email = usrdata.email;
                      $scope.cart.userid = usrdata.userid;
                      $scope.cart.username = usrdata.username;
                      $scope.cart.idno = usrdata.idno;
                      $scope.cart.userkey = firebaseUser.uid;

                      $localStorage.userkey = firebaseUser.uid;

                      Utils.hide();

                            $state.go('app.home');
                        console.log("authData.uid :", firebaseUser.uid);
                        console.log("Starter page","Home");
                });

          firebaseUser.getToken(true).then(function(idToken) {
            $scope.cart.token = idToken;
            $localStorage.token = idToken;
            console.log('token :' + idToken);
          }).catch(function(error) {
          });
    }
*/

 $scope.resetPassword = function() {
        auth.$sendPasswordResetEmail($scope.resetemail).then(function() {
            Utils.alertshow("Reset", "Password reset email sent. Please check your inbox.");
          }, function(error) {
               Utils.errMessage(error.message);
          });
    }


  $scope.isLoggedin = function() {
          if (auth.$getAuth()) {
            console.log("Am logged in");
            return true;
          } else {
            console.log("Am logged out");
            return false;
          }
    }


   $scope.createUser = function() {
          if (navigator.onLine){
      if (!$scope.user || !$scope.user.email){
                Utils.alertshow("Invalid email",'Please enter valid Email');
        } else if (!$scope.user || !$scope.user.password){
                Utils.alertshow("Invalid password",'Please enter valid Password');
        }else if (!$scope.user || !$scope.user.fullname){
                Utils.alertshow("Invalid Name",'Please enter valid Name');
        } else if (!$scope.user || !$scope.user.idno){
                Utils.alertshow("Invalid ID No",'Please enter valid ID no');
        } else if(angular.isDefined($scope.user)){
                      // Create a new user
        firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
                        .then(function(firebaseUser) {
                            fbref.child('users').child(firebaseUser.uid).set({
                                   userid: firebaseUser.uid.slice(0,8),
                                   email: $scope.user.email,
                                   username: $scope.user.fullname,
                                   idno: $scope.user.idno,
                                   registered_on: Date()
                            });
                          $state.go('app.home');
                        }).catch(function(error) {
          $ionicPopup.alert({title: 'User Exists',
                             template: 'Please use another email id'}).then(function (jhkj){

                              });
                                   console.log("Error creating User : " + error.message);
                        });
                }
          }
    }


  $scope.onauthStateChanged = function() {
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              usrdata = user;
              console.log('usrdata.uid :' + usrdata.uid);
              console.log('usrdata.email:' + usrdata.email);
              console.log('usrdata.displayName :' + usrdata.displayName);
              console.log('usrdata.refreshToken :' + usrdata.refreshToken);
            } else {
              console.log("onauthStateChanged: Am logged out");
            }
          });
    }


   $scope.logout = function() {
      $scope.cart.clearItems();
      $localStorage.$reset();
     firebase.auth().signOut();
        $state.go('home');
    }




}]);
