/*global angular $*/
angular.module("esqueleto")
    .constant('SETTINGS', {
        hostSelected: 'prod',
        hosts: {
            devl: {
                apiProtocol: 'http',
                apiHost: 'www.algo.org',
                apiPort: ''
            },
            prod: {
                apiProtocol: 'https',
                apiHost: 'www.algo.org',
                apiPort: ''
            }
        }
    })
    .constant('DIR', {
        hostSelected: 'https://www.algo.org/'
    })
    .constant('STRING', {
        EMPTY: "",
        NOT_FOUND: -1,
        SPACE: " "
    })
    .constant('ARRAY', {
        NOT_FOUND: -1
    })
    .constant('USER_SESSION', {
        expire: {
            seconds: 0,
            minutes: 120,
            hours: 0,
            days: 0,
            months: 0,
            years: 0
        }
    })
    .constant('USER_ROLES', {
        all: '*',
        user: 'player',
        guest: 'guest'
    });