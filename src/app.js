/*global angular, $get, window, $ */
angular.module('esqueleto', ['ngRoute',
        'ngResource',
        'LocalStorageModule',
        'ngCookies',
        'ngSanitize',
        'firebase',
        'ngMap',
        'metatags'])
    .config(function ($routeProvider, MyRoutesProvider, $locationProvider) {
        "use strict";
        var MyRoutes = MyRoutesProvider.$get();
        $locationProvider.html5Mode(true);
        angular.forEach(MyRoutes, function (route) {
            $routeProvider.when(route.path, route.options);
        });
        $routeProvider.otherwise({redirectTo: "/"});

        
    })

    .config(['$routeProvider','MetaTagsProvider', function($routeProvider, MetaTagsProvider) {
        MetaTagsProvider.when('/', {
            title: 'In the Park',
            description: 'In the Park',
            keywords: 'diseño, monterrey, logo, marca, comercial, arquitectura, interiores, local, estudio, identidad, corporativa, corporativo web, pagina, internet, señalizacion, icono, industrial, mexico, design, brand, commercial, architecture, interior, studio, corporate, website, wayfinding, signage, icon, creative, creativo, grafico, graphic, marketing, startup, emprendedor, entrepreneur'

        }). when('/project/:id', {
            title: ':id',
            description: 'proyecto'
        })
    }])
    
    .run(function ($rootScope, MyRoutes, $location, MetaTags) {
        "use strict";
        $rootScope.$on('$routeChangeStart', function (e, next) {
        });

        MetaTags.initialize();
    

    //este codigo lo que hace es que cada vez que se abre una nueva ventana manda el scroll hasta arriba
        $rootScope.$on("$routeChangeSuccess", function () {
            window.scrollTo(0, 0);
            ga('send', 'pageview', $location.path());
        });
    
    })

    .controller('main', function ($q, $scope, $route, $firebaseObject, $firebaseArray, $firebaseAuth, localStorageService, $sce, $cookies) {
        "use strict";
        $scope.$route = $route;
    
    
        var language = $cookies.get('lang');
        console.log('language: ',language);


        //este codigo lo que permite es que el menu se oculte y se muestre sin errores
    
        var config = {
            apiKey: "AIzaSyC32oi-OR-pqoR03osUfEFwQDJGgre2Kz4",
            authDomain: "ccc-anthos.firebaseapp.com",
            databaseURL: "https://ccc-anthos.firebaseio.com",
            projectId: "ccc-anthos",
            storageBucket: "ccc-anthos.appspot.com",
            messagingSenderId: "736498950469",
            appId: "1:736498950469:web:b4b7a7fa1c34787a1cde2c"
        };
    
        firebase.initializeApp(config);
        var ref = firebase.database().ref();
    $scope.projects = $firebaseArray(ref.child('Portfolio/Projects/'));
    $scope.talento = $firebaseArray(ref.child('Portfolio/talento/'));
    $scope.casting = $firebaseArray(ref.child('Portfolio/casting/'));
    $scope.produccion = $firebaseArray(ref.child('Portfolio/produccion/'));
    $scope.management = $firebaseArray(ref.child('Portfolio/management/'));
    $scope.unete = $firebaseArray(ref.child('Portfolio/unete/'));
    $scope.LoaderioLoaderio = $firebaseObject(ref.child('Portfolio/loader'));
    

    $scope.getProjects = function () {
        var projects = [];
        var defer = $q.defer();
        projects = $firebaseArray(ref.child('Portfolio/Projects/'));
        defer.resolve(projects);
           //return snapshot.val();
     return defer.promise;
    }
    
    $scope.banner = $firebaseArray(ref.child('Portfolio/Home/Banner'));
    $scope.homeSettings = $firebaseObject(ref.child('Portfolio/Home'));
    $scope.studioSettings = $firebaseObject(ref.child('Portfolio/Studio'));
    $scope.studioServicesL = $firebaseObject(ref.child('Portfolio/Studio/Services/Left'));
    $scope.studioServicesR = $firebaseObject(ref.child('Portfolio/Studio/Services/Right'));
    $scope.studioSettingsSocial = $firebaseArray(ref.child('Portfolio/Studio/Social'));
    $scope.footerSettings = $firebaseObject(ref.child('Portfolio/Settings/Footer'));
    $scope.Connect = $firebaseObject(ref.child('Portfolio/Settings/Footer/Connect'));
    $scope.Contact = $firebaseObject(ref.child('Portfolio/Settings/Footer/Contact'));
    $scope.StudioGrid = $firebaseArray(ref.child('Portfolio/Studio/Grid'));
    $scope.Dsettings = $firebaseObject(ref.child('Portfolio/Settings'));
    $scope.nswitch = $firebaseObject(ref.child('Portfolio/Settings/Splash'));
    // Fireb VAR
    $scope.sosocial = $firebaseArray(ref.child('Portfolio/Studio/Social'));
    $scope.Filters = $firebaseArray(ref.child('Portfolio/Settings/Filters/Esp'));
    $scope.FiltersE = $firebaseArray(ref.child('Portfolio/Settings/Filters/Eng'));

    $scope.banner.$loaded()
    .then(function(data) {
        angular.element(document).ready(function () {

            setTimeout(function () {
                console.log('superliston');
                $scope.superListon();
                window.prerenderReady = true;
                $scope.superBandera = 1;
            }, 500);

        });
    })
    .catch(function(error) {
        console.error("Error:", error);
    });
    
    $scope.toEnglish = function(){
        $scope.lang = 'eng';
    }
    $scope.toSpanish = function(){
        $scope.lang = 'esp';
    }
    
    $scope.lolio = function(){
        console.log('asdf');
    }
        
    $scope.filtEsp = {
        Tags : '',
    }; 
    $scope.filtEng = {
        TagsE : '',
    }; 
        // Test
    $scope.testing = function () {
        console.log('testing');
        console.log(key);
    }
    
    
    
    
    
    
    
    
        
        
var slideIndex = 0; 
$scope.showSlides = function(){ 
    setTimeout(function(){      
        
        
        
        
        
        
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex> slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
        setTimeout($scope.showSlides, 10000); 
        

        
        
        }, 3500);
}
$scope.showSlidesa = function(){ 
         
        
        
        
        
        
        
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex> slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 

        

        
        
}


var MslideIndex = 0; 
$scope.MshowSlides = function(){ 
    setTimeout(function(){      
        
        
        
        
        
        
        var i;
        var slides = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.opacity = "0.15"; 
        }
        MslideIndex++;
        if (MslideIndex> slides.length) {MslideIndex = 1} 
        slides[MslideIndex-1].style.opacity = "0.75"; 
        setTimeout($scope.MshowSlides, 10000); 

        
        
        }, 3500);
}
$scope.MshowSlidesa = function(){ 
   
        
        
        var i;
        var slides = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.opacity = "0.15"; 
        }
        MslideIndex++;
        if (MslideIndex> slides.length) {MslideIndex = 1} 
        slides[MslideIndex-1].style.opacity = "0.75"; 
         // Change image every 2 seconds
        

        
}



    
    $scope.superListon = function() {
            $(".regular").slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 10000,
                speed: 1000
            });
    }



    
    
        

    
//    $scope.HeadInsight = function (){
//        setTimeout(function () {
//             console.log('superliston');
//            $(".regular").slick({
//                dots: true,
//                infinite: true,
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                autoplay: true,
//                autoplaySpeed: 10000,
//                speed: 1000
//            });
//         }, 1950);
//    }




    $scope.SetIndexBan = function ($index){
        
        var MslideIndex = $index; 
        var slideIndex = $index; 
        $scope.showSlidesa();
        $scope.MshowSlidesa();

    }







    $scope.changeLangEng = function() {   
        var key = 'lan';
        var val = 'eng';
        console.log('love');
        localStorageService.set(key, val);
        console.log('Ends');
        setTimeout(function(){ 
            
            location.reload();
            
        }, 250);
    }
    $scope.changeLangEsp = function() {   
        var key = 'lan';
        var val = 'esp';
        console.log('love');
        localStorageService.set(key, val);
        console.log('Ends');
        setTimeout(function(){ 
            
            location.reload();
            
        }, 250);
    }

    
    
    $scope.realan = localStorageService.get('lan');
    
    $scope.realog = localStorageService.get('log');
    if (!$scope.realan) {
        if (language == 'es') {
                $scope.changeLangEsp();
                console.log('Cambiado a espanol');
            } else {
                $scope.changeLangEng();
                console.log('Cambiado a ingles');
        }
    };
   
    $scope.tologin = function (){
        location.href = '/#/login';
    }
    $scope.thereload = function () {
        window.location.reload();
    }
    
    $scope.logouteame = function () {
        
        var key = 'log';
        var val = 'no';
        localStorageService.set(key, val);
        setTimeout(function(){ 
            
            location.reload();
            
        }, 250);
        
    }
    
    
    
    
    $scope.languageSet = function() {
        $scope.realan = localStorageService.get('lan');
        
        if($scope.realan == null){
            $scope.changeLangEng();
        }else{
            console.log('Lang');
        }
    }
    
    //AQUIMEQUEDE PARA ARREGLAR LO DEL MENU
    
//    window.onscroll = function() {
////    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
////        alert("you're at the bottom of the page");
////        }
//        var lolitaayala = window.innerHeight;
//        console.log(lolitaayala);
//        console.log(window.pageYOffset);
//    };
//    
// window.onscroll = function() {
//    if (window.pageYOffset >= window.innerHeight) {
//        myFunction();
//};

//function myFunction() {
//    if (document.body.scrollTop > 87 || document.documentElement.scrollTop > 87) {
//        
//        try{
//                document.getElementById("myP").className = "hidd";
//            }
//            catch (e) {
//                
//            }
//        
//    }
//}
    
//    var lastScrollTop = 0;
//// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
//window.addEventListener("scroll", function(){ 
//    var st = window.pageYOffset || document.documentElement.scrollTop;
//    if (window.pageYOffset > 260){
//        if (window.pageYOffset > screen.height/4){
//            if (window.pageYOffset > screen.height/2){
//        
//        console.log('yeahrock');
//        document.getElementById("headerid").className = "stepone";
//        
//        if (st > lastScrollTop){
//            
//            try{
//                document.getElementById("headerid").className = "stepone";
//            }
//            catch(e){
//                
//            }
//            
//        }
//        else{
//            
//            try{
//                document.getElementById("headerid").className = "steptwo";
//            }
//            catch(e){
//                
//            }
//            
//        }
//        
//    }
//            else{
//            document.getElementById("headerid").className = "stepone";
//            }
//        }
//        else {
//            document.getElementById("headerid").className = "stepzeropointfive";
//        }
//        
//    }
//    else{
//        document.getElementById("headerid").className = "stepzero";
//    }
//    
//    lastScrollTop = st;
//
//}, false);
    
    


var element = document.getElementById("header");


  var elHeight = 0,
    elTop = 0,
    dHeight = 0,
    wHeight = 0,
    wScrollCurrent = 0,
    wScrollBefore = 0,
    wScrollDiff = 0;

  window.addEventListener('scroll', function() {
    elHeight = document.getElementById("header").offsetHeight;
    dHeight = document.body.offsetHeight;
    wHeight = window.innerHeight;
    wScrollCurrent = window.pageYOffset;
    wScrollDiff = wScrollBefore - wScrollCurrent;
    elTop = parseInt(window.getComputedStyle(document.getElementById("header")).getPropertyValue('top')) + wScrollDiff;

    if (wScrollCurrent <= 0)
      document.getElementById("header").style.top = '0px';

    else if (wScrollDiff > 0)
      document.getElementById("header").style.top = (elTop > 0 ? 0 : elTop) + 'px';

    else if (wScrollDiff < 0) {
        document.getElementById("header").style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';
    }

    wScrollBefore = wScrollCurrent;
  });


    
    
  
    
    
    
    
    });