angular.module('esqueleto')
    .factory('MyRoutes', function () {
        'use strict';
        var routes = [{
            path: '/',
            options: {
                templateUrl: 'home/home.view.html',
                controller: 'homeController'
            }
        },
                {
            path: '/banner',
            options: {
                templateUrl: 'banner/banner.view.html',
                controller: 'bannerController'
            }
        },
                {
            path: '/work',
            options: {
                templateUrl: 'work/work.view.html',
                controller: 'workController'
            }
        },
                {
            path: '/talento',
            options: {
                templateUrl: 'talento/talento.view.html',
                controller: 'talentoController'
            }
        },
                {
            path: '/management',
            options: {
                templateUrl: 'management/management.view.html',
                controller: 'managementController'
            }
        },
            {
                path: '/management/:id',
                options: {
                    templateUrl: 'managementid/managementid.view.html',
                    controller: 'managementidController'
                }
            },
                {
            path: '/talento/:id',
            options: {
                templateUrl: 'talentoid/talentoid.view.html',
                controller: 'talentoidController'
            }
        },
        {
            path: '/casting/:id',
            options: {
                templateUrl: 'castingid/castingid.view.html',
                controller: 'castingidController'
            }
        },
                {
            path: '/produccion',
            options: {
                templateUrl: 'produccion/produccion.view.html',
                controller: 'produccionController'
            }
        },
                {
            path: '/cccproduccion',
            options: {
                templateUrl: 'cccproduccion/cccproduccion.view.html',
                controller: 'cccproduccionController'
            }
        },
                {
            path: '/cccmanagement',
            options: {
                templateUrl: 'cccmanagement/cccmanagement.view.html',
                controller: 'cccmanagementController'
            }
        },
                {
            path: '/newproduccion',
            options: {
                templateUrl: 'newproduccion/newproduccion.view.html',
                controller: 'newproduccionController'
            }
        },
                {
            path: '/editproduccion/:id',
            options: {
                templateUrl: 'editproduccion/editproduccion.view.html',
                controller: 'editproduccionController'
            }
        },
        {
            path: '/editmanagement/:id',
            options: {
                templateUrl: 'editmanagement/editmanagement.view.html',
                controller: 'editmanagementController'
            }
        },
                {
            path: '/produccion/:id',
            options: {
                templateUrl: 'produccionid/produccionid.view.html',
                controller: 'produccionidController'
            }
        },  
                {
            path: '/casting',
            options: {
                templateUrl: 'casting/casting.view.html',
                controller: 'castingController'
            }
        },
                {
            path: '/nosotros',
            options: {
                templateUrl: 'nosotros/nosotros.view.html',
                controller: 'nosotrosController'
            }
        },
                {
            path: '/project/:id',
            options: {
                templateUrl: 'project/project.view.html',
                controller: 'projectController'
            }
        },
                {
            path: '/studio',
            options: {
                templateUrl: 'studio/studio.view.html',
                controller: 'studioController'
            }
        },
                {
            path: '/featured',
            options: {
                templateUrl: 'featured/featured.view.html',
                controller: 'featuredController'
            }
        },
                {
            path: '/newproject',
            options: {
                templateUrl: 'newproject/newproject.view.html',
                controller: 'newprojectController'
            }
        },      
        {
            path: '/newmanagement',
            options: {
                templateUrl: 'newmanagement/newmanagement.view.html',
                controller: 'newmanagementController'
            }
        },     
                {
            path: '/newtalent',
            options: {
                templateUrl: 'newtalent/newtalent.view.html',
                controller: 'newtalentController'
            }
        },  
                {
            path: '/newcasting',
            options: {
                templateUrl: 'newcasting/newcasting.view.html',
                controller: 'newcastingController'
            }
        },  
                {
            path: '/unete',
            options: {
                templateUrl: 'unete/unete.view.html',
                controller: 'uneteController'
            }
        },
                {
            path: '/dashboard',
            options: {
                templateUrl: 'dashboard/dashboard.view.html',
                controller: 'dashboardController'
            }
        },
                      {
            path: '/menusettings',
            options: {
                templateUrl: 'menusettings/menusettings.view.html',
                controller: 'menusettingsController'
            }
        },
                {
            path: '/projectssettings',
            options: {
                templateUrl: 'projectssettings/projectssettings.view.html',
                controller: 'projectssettingsController'
            }
        },
                {
            path: '/intro/:id',
            options: {
                templateUrl: 'loader/loader.view.html',
                controller: 'loader'
            }
        },
                {
            path: '/editproject/:id',
            options: {
                templateUrl: 'editproject/editproject.view.html',
                controller: 'editprojectController'
            }
        },
                {
            path: '/edittalento/:id',
            options: {
                templateUrl: 'edittalento/edittalento.view.html',
                controller: 'edittalentoController'
            }
        },
                {
            path: '/editcasting/:id',
            options: {
                templateUrl: 'editcasting/editcasting.view.html',
                controller: 'editcastingController'
            }
        },
                {
            path: '/homesettings',
            options: {
                templateUrl: 'homesettings/homesettings.view.html',
                controller: 'homesettingsController'
            }
        },
                {
            path: '/cccnosotros',
            options: {
                templateUrl: 'studiosettings/studiosettings.view.html',
                controller: 'studiosettingsController'
            }
        },
                {
            path: '/gracias',
            options: {
                templateUrl: 'gracias/gracias.view.html',
                controller: 'graciasController'
            }
        },
                {
            path: '/ccctalento',
            options: {
                templateUrl: 'ccctalento/ccctalento.view.html',
                controller: 'ccctalentoController'
            }
        },
                {
            path: '/ccccasting',
            options: {
                templateUrl: 'ccccasting/ccccasting.view.html',
                controller: 'ccccastingController'
            }
        },
                {
            path: '/login',
            options: {
                templateUrl: 'login/login.view.html',
                controller: 'loginController'
            }
        }
                     
        ];
        return routes;
    });