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
    window.addEventListener("hashchange", function(event) {
    	event.preventDefault();
		if(typeof Piwik !== "undefined") {
			Piwik.getAsyncTracker().trackPageView();
		}
		headerNav.classList.remove("active");
		correctOffset(window.location.hash.substr(1), screen.width > 810 ? document.getElementById("menu-nav").parentNode : document.querySelector("header h1"));
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

    // Correct offset caused by fixed header
    function correctOffset(targetElementId, headerElement) {
   		if(targetElementId === "willkommen") {
   			window.scrollTo(0, 0);
   		} else {
	    	var targetElement = document.getElementById(targetElementId);
			var headerHeight = parseInt(window.getComputedStyle(headerElement).height);
			var targetElement = document.getElementById(window.location.hash.substr(1));
			var targetElementPosition = targetElement.offsetTop;
			var targetElementMarginTop = parseInt(window.getComputedStyle(targetElement).getPropertyValue("margin-top"));
			console.log("scroll to " + (targetElementPosition - headerHeight - targetElementMarginTop));
			window.scrollTo(0, targetElementPosition - headerHeight - targetElementMarginTop);
		}
    }

	var notInSearch = "notinsearch";
	var speisekarte = document.getElementById("speisekarte");
	var speisekarteDivisions = speisekarte.querySelectorAll("div.speisekarte-division");
	var searchbox = document.createElement("form");
	var input = document.createElement("input");
	input.setAttribute("type", "search");
	input.addEventListener("keyup", function(event) {
		var val = input.value.toLowerCase();
		for(var i = 0; i < speisekarteDivisions.length; i++) {
			var speisekarteEntries = speisekarteDivisions[i].getElementsByTagName("p");
			for(var j = 0; j < speisekarteEntries.length; j++) {
				if(val.length > 0 && speisekarteEntries[j].innerHTML.toLowerCase().indexOf(val) > 0) {
					speisekarteEntries[j].classList.remove(notInSearch);
				} else {
					speisekarteEntries[j].classList.add(notInSearch);
				}
			}
			if(val.length === 0 && speisekarteDivisions[i].querySelector("p:not(." + notInSearch + ")") === null) {
				speisekarteDivisions[i].classList.add(notInSearch);
			} else {
				speisekarteDivisions[i].classList.remove(notInSearch);
			}
		}
	});
	searchbox.appendChild(input);
	speisekarte.insertBefore(searchbox, speisekarte.firstElementChild.nextElementSibling);
}, false);

window.addEventListener("load", function() {
    // Correct offset on direct page call
    if (window.location.hash.length > 1) {
		window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
}, false);