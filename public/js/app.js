angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'AdminCtrl', 'AdminService', 'LeaderCtrl', 'LeaderService']);


angular.module('datepickerBasicUsage', ['ngMaterial', 'ngMessages']).controller('AdminCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
});