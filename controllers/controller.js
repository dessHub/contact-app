function appCtrl($scope) {

  person1 = {
    name : "dan",
    email : "hello@dan.com",
    contact : "97857688"
  };
  person2 = {
    name : "clare",
    email : "hello@clare.com",
    contact : "343333"
  };
  person3 = {
    name : "jade",
    email : "hello@jade.com",
    contact : "78948"
  };

  var contacts = [person1,person2,person3];
  $scope.contacts = contacts;
}
