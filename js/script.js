/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// tslint:disable:no-console

self.addEventListener('install', event => { self.skipWaiting(); });

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
  self.registration.unregister().then(
      () => { console.log('NGSW Safety Worker - unregistered old service worker'); });
});

document.addEventListener('DOMContentLoaded', function () {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Parallax.init(document.querySelectorAll('.parallax'));
    if (!document.documentMode) { // https://github.com/Dogfalo/materialize/issues/5801
        M.Materialbox.init(document.querySelectorAll('.materialboxed'));
    }
});