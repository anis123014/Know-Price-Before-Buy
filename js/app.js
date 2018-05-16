var myApp=angular.module("myApp",[]);

myApp.controller("myController",function($scope){
  console.log("In my console..");

          $scope.newUser={};
          $scope.clickedUser={};
          $scope.message="";

          $scope.users=[
          {username:"মুরগি(কক)", FullName:"দাম বেড়েছে ",email:"৩০০ টাকা/কেজি"},
          {username:"মাছ (মুক্ত জলাশয়ের)", FullName:"মুক্ত জলাশয়ের মাছ",email:"৬০০-৮০০ টাকা/কেজি"},
          {username:"বেগুন", FullName:"দাম বেড়েছে",email:"৮০ টাকা/কেজি"},
          {username:"পেয়াজ", FullName:"বেড়েছে",email:"৪৫-৫০ টাকা/কেজি "}
          ];

          $scope.saveUser=function(){
          $scope.users.push($scope.newUser);
          $scope.newUser={};
          $scope.message=" আপনি সফল ভাবে পণ্যটি যোগ করেছেন ।";
        };

        $scope.clickUser=d=function(user){
          console.log(user);
          $scope.clickedUser=user;
        };

        $scope.updateUser=function(){
          $scope.message="আপনি সফল ভাবে আপডেট করেছেন ।";

        };

        $scope.deleteUser=function(user){
          $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
          $scope.message=" আপনি সফল ভাবে পণ্যটি ডিলিট করেছেন ।";
        };

        $scope.clearMessage=function(){
          $scope.message="";
        };

});
