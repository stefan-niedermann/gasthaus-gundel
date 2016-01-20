"use strict";

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("js");

    var menuButton = document.createElement("button"), menuButtonImg = document.createElement("img"), header = document.body.getElementsByTagName("header")[0], headerNav = header
	    .getElementsByTagName("nav")[0], anchorTags = document.getElementsByTagName("a");

    // Create Menu-Button
    menuButtonImg.setAttribute("alt", "Menü");
    menuButtonImg.setAttribute("src", "resources/icons/menu.svg");
    menuButton.appendChild(menuButtonImg);
    headerNav.insertBefore(menuButton, headerNav.childNodes[0]);

    // Toggle Menu
    menuButton.addEventListener("click", function() {
	headerNav.classList.toggle("active");
    }, false);

    // Correct offset on navigation
    window.addEventListener("hashchange", function() {
		if(typeof Piwik !== "undefined") {
			Piwik.getAsyncTracker().trackPageView();
		}
		headerNav.classList.remove("active");
		correctOffset(document.getElementById(window.location.hash.substr(1)));
    });

    // Dispatch hashchangeevent manually if target === current
    for (var i = 0; i < anchorTags.length; i++) {
	anchorTags[i].addEventListener("click", function(event) {
			if (window.location.hash === event.currentTarget.getAttribute("href")) {
				window.dispatchEvent(new HashChangeEvent("hashchange"));
				event.preventDefault();
			}
		}, false);
    }

    // Correct offset on direct page call
    if (window.location.hash.length > 1) {
	window.dispatchEvent(new HashChangeEvent("hashchange"));
    }

    // Correct offset caused by fixed header
    function correctOffset(element) {
	var top = 0;
	do {
	    top += element.offsetTop || 0;
	    element = element.offsetParent;
	} while (element);
	window.scrollTo(0, top - header.offsetHeight - 10);
    }
}, false);
