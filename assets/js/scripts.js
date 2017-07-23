(function(){
	'use strict';

	var app = {
		// Generate button
		btn: 			document.querySelector('#generate'),

		// General meta tags
		title: 			document.querySelector('#title'),
		description: 	document.querySelector('#description'),
		author: 		document.querySelector('#author'),
		image: 			document.querySelector('#image'),
		canonical: 		document.querySelector('#canonical'),
		robots: 		document.querySelector('#robots'),
		urlBase: 		document.querySelector('#url-base'),
		sitemap: 		document.querySelector('#sitemap'),
		themeColor: 	document.querySelector('#theme-color'),	

		// Facebook meta tags
		fbTitle: 		document.querySelector('#fb-title'),
		fbType: 		document.querySelector('#fb-type'),	
		fbAppid: 		document.querySelector('#fb-appid'),
		fbAdmins: 		document.querySelector('#fb-admins'),	
		fbLocale: 		document.querySelector('#fb-locale'),	

		// Twitter meta tags
		twCard: 		document.querySelector('#tw-card'),	

		// Output
		oTitle: 		document.querySelector('#o-title'),	
		oDescription: 	document.querySelector('#o-description'),
		oAuthor: 		document.querySelector('#o-author'),
		oUrl: 			document.querySelector('#o-url'),
		oCanonical: 	document.querySelector('#o-canonical'),
		oSitemap: 		document.querySelector('#o-sitemap'),
		oRobots: 		document.querySelector('#o-robots'),
		oGoogleBot: 	document.querySelector('#o-googlebot'),
		oThemecolor: 	document.querySelector('#o-themecolor'),
		oThemecolorMs: 	document.querySelector('#o-themecolor-ms'),
		oThemecolorAp: 	document.querySelector('#o-themecolor-apple'),
		oGoogleName: 	document.querySelector('#o-google-name'),
		oGoogleDesc: 	document.querySelector('#o-google-description'),
		oGoogleImage: 	document.querySelector('#o-google-image'),
		oFbType: 		document.querySelector('#o-fb-type'),
		oFbTitle: 		document.querySelector('#o-fb-title'),
		oFbUrl: 		document.querySelector('#o-fb-url'),
		oFbSitename: 	document.querySelector('#o-fb-sitename'),
		oFbImage: 		document.querySelector('#o-fb-image'),
		oFbDesc: 		document.querySelector('#o-fb-description'),
		oFbLocale: 		document.querySelector('#o-fb-locale'),
		oFbAppid: 		document.querySelector('#o-fb-appid'),
		oFbAdmins: 		document.querySelector('#o-fb-admins'),
		oTwCard: 		document.querySelector('#o-tw-card'),
		oTwTitle: 		document.querySelector('#o-tw-title'),
		oTwDesc: 		document.querySelector('#o-tw-description'),
		oTwCreator: 	document.querySelector('#o-tw-creator'),
		oTwImage: 		document.querySelector('#o-tw-image'),

		output: 		document.querySelector('.output'),
	};

	var initialConfig = {
		init: function() {
			var self = this;
			self.generateSEOTags();
		},

		generateSEOTags: function() {
			app.btn.addEventListener('click', function() {
				app.output.style.display = 'block';

				app.oTitle.innerText = app.title.value;
				app.oDescription.innerText = app.description.value;
				app.oAuthor.innerText = app.author.value;
				app.oUrl.innerText = app.urlBase.value;
				app.oCanonical.innerText = app.canonical.value;
				app.oSitemap.innerText = app.sitemap.value;
				app.oRobots.innerText = app.robots.value;
				app.oGoogleBot.innerText = app.robots.value;
				app.oThemecolor.innerText = app.themeColor.value;
				app.oThemecolorMs.innerText = app.themeColor.value;
				app.oThemecolorAp.innerText = app.themeColor.value;
				app.oGoogleName.innerText = app.title.value;
				app.oGoogleDesc.innerText = app.description.value;
				app.oGoogleImage.innerText = app.image.value;
				app.oFbType.innerText = app.fbType.value;
				app.oFbTitle.innerText = app.fbTitle.value;
				app.oFbUrl.innerText = app.urlBase.value;
				app.oFbSitename.innerText = app.title.value;
				app.oFbImage.innerText = app.image.value;
				app.oFbDesc.innerText = app.description.value;
				app.oFbLocale.innerText = app.fbLocale.value;
				app.oFbAppid.innerText = app.fbAppid.value;
				app.oFbAdmins.innerText = app.fbAdmins.value;
				app.oTwCard.innerText = app.twCard.value;
				app.oTwTitle.innerText = app.title.value;
				app.oTwDesc.innerText = app.description.value;
				app.oTwCreator.innerText = app.author.value;
				app.oTwImage.innerText = app.image.value;
			})
		}
	}

	initialConfig.init();
})();