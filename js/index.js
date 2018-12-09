var app = angular.module('eduardoApp',[]);
app.controller('MyCtrl', function(){
  var vm = this;
  vm.developerName = "Fatima Mujahid";
  vm.devEspecified = "web developer";
  vm.navUlMenu = true;
  vm.aboutRedSwitch = true;
  vm.aboutGreenSwitch = false;
  vm.menu = {
    iconClose: "fa fa-arrow-left",
    iconOpen: "fa fa-bars minimizeMenu",
    img: "assets/profile.jpeg",
    m1: "About Me",
    m2: "My Works",
    m3: "My Tools",
    m4: "Contact Me"
  };
  vm.menuIcons = {
    icon1: "fa fa-address-card-o",
    icon2: "fa fa-briefcase",
    icon3: "fa fa-code",
    icon4: "fa fa-envelope-o"
  };  
  //PUBLIC FUNCTIONS
  vm.myMenu = myMenu;
          /*About*/
  vm.changeAboutRedSwitch = changeAboutRedSwitch;
  vm.changeAboutGreenSwitch = changeAboutGreenSwitch;
 //PRIVATE FUNCTIONS
      function myMenu(){
        if(vm.navUlMenu){
                vm.menu.iconClose = vm.menu.iconOpen;
                vm.menu.img =         "https://image.flaticon.com/icons/svg/389/389127.svg";
                vm.developerName = "EM";
                vm.devEspecified = "WD";
                document.getElementById("sideMenu").className = "sideMenuMinimized transition";
                document.getElementById("imgPerfil").style.width = "100%";
                document.getElementById("menuModules").className = "menuModulesMinimized";
                vm.navUlMenu = false;
                
           } else if(!vm.navUlMenu){
                      vm.menu.iconClose = "fa fa-arrow-left";
                      vm.menu.img =         "assets/profile";
                      vm.developerName = "Fatima Mujahid";
                      vm.devEspecified = "web developer";
                      document.getElementById("sideMenu").className = "sideMenu transition";
                      vm.navUlMenu = true;
                    }
      }

    /*
    ==========================================
    ==========================================
                     ABOUT ME
    ==========================================
    ==========================================
    */
      function changeAboutRedSwitch(){
        vm.aboutRedSwitch = true;/*RED*/
        vm.aboutGreenSwitch = false;/*SHADOW*/
      }
  
      function changeAboutGreenSwitch(){
        vm.aboutGreenSwitch = true;/*SHADOW*/
        vm.aboutRedSwitch = false;/*RED*/
        
      }
});