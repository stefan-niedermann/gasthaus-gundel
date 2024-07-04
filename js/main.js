'use strict';

import { FabController, NavController, SpeisekarteController } from './controller/index.js';

document.addEventListener('DOMContentLoaded', () => {

    const navCtrl = new NavController('body>nav');
    navCtrl.init();

    const fabCtrl = new FabController();
    fabCtrl.init('header a.fab', 'header a:not(.fab)');

    const speisekarteCtrl = new SpeisekarteController();
    speisekarteCtrl.init();
});
