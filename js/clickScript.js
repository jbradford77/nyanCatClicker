var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Nyan Cat');
	this.imgSrc = ko.observable('img/nyanCat.PNG');
	this.imgAttribution = ko.observable('nyan cat dot com');

	this.title = ko.computed(function() {
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Baby Nyan';
		} else if (clicks < 20) {
			title = 'Big Nyan';
		} else if (clicks < 30) {
			title = 'You won!';
		} else if (clicks < 40) {
			title = 'Ok man, you already won.';
		} else if (clicks < 50) {
			title = 'Seriously, wtf are you doing?';
		} else {
			title = 'Never gonna give you up, never gonna let you down, never gonna run around and desert you...';
		}
		return title;
	}, this);
}

var ViewModel = function() {

	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());
