angular.module('KLUG').factory('Utils',['$ionicLoading', '$ionicPopup',function($ionicLoading,$ionicPopup) {

	var Utils = {

    show: function() {
      $ionicLoading.show({
  	    showDelay: 500,
        template: '<ion-spinner icon="lines" class="spinner-calm"></ion-spinner>'
      });
    },

    hide: function(){
      $ionicLoading.hide();
    },

		alertshow: function(tit,msg){
			var alertPopup = $ionicPopup.alert({
				title: tit,
				template: msg
			});
			alertPopup.then(function(res) {
			});
		},

		errMessage: function(err) {

	    var msg = "Unknown Error...";

	    if(err && err.code) {
	      switch (err.code) {
	        case "EMAIL_TAKEN":
	          msg = "This Email has been taken."; break;
	        case "INVALID_EMAIL":
	          msg = "Invalid Email."; break;
          case "NETWORK_ERROR":
	          msg = "Network Error."; break;
	        case "INVALID_PASSWORD":
	          msg = "Invalid Password."; break;
	        case "INVALID_USER":
	          msg = "Invalid User."; break;
	      }
	    }
			Utils.alertshow("Error",msg);
	},


  };

	return Utils;

}]);
