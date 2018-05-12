var initialCats = [
  {
    clickCount : 0,
    name : 'Nyan Cat',
    imgSrc : 'img/nyanCat.PNG',
    imgAttribution : 'some attribution',
    nicknames: ['Nyan', 'The Great Nyan', 'Sir Rainbow Kittenstuffs']
  },
  {
    clickCount : 0,
    name : 'Space Cat',
    imgSrc : 'img/spaceCat.jpg',
    imgAttribution : 'space attribution',
    nicknames: ['Spacey', 'Star Cat'],
  },
  {
    clickCount : 0,
    name : 'Orange Cat',
    imgSrc : 'img/orangeCat.jpg',
    imgAttribution : 'orange attribution',
    nicknames: ['Annoying Orange', 'Lil Fluff'],
  },
  {
    clickCount : 0,
    name : 'Gray Cat',
    imgSrc : 'img/grayCat.jpg',
    imgAttribution : 'gray cat attribution',
    nicknames: ['Cutie Pie', 'Snuggles'],
  }
];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

	this.title = ko.computed(function() {
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Baby Cat';
		} else if (clicks < 20) {
			title = 'Big Cat';
		} else if (clicks < 30) {
			title = 'You won!';
		} else if (clicks < 40) {
			title = 'Ok man, you already won.';
		} else if (clicks < 50) {
			title = 'Seriously, wtf are you doing?';
		} else if (clicks < 100) {
			title = 'Never gonna give you up, never gonna let you down, never gonna run around and desert you...';
		} else if (clicks < 150) {
			title = 'Ok, you want some more?';
		} else if (clicks < 200) {
			title = 'Maybe I should turn the music on for Nyan cat';
		} else if (clicks < 250) {
			title = 'Last chance, you really want to read all these cat jokes?';
		} else if (clicks < 300) {
			title = 'Why is it so hard for a leopard to hide? Because he’s always spotted.';
		} else if (clicks < 350) {
			title = 'What do cats like to eat for breakfast? Mice Krispies.';
		} else if (clicks < 400) {
			title = 'What do you call the cat that was caught by the police? The purrpatrator.';
		} else if (clicks < 450) {
			title = 'Why don’t cats play poker in the jungle? Too many cheetahs.';
		} else if (clicks < 500) {
			title = 'What do you call a cat in a station wagon? A car-pet';
		} else if (clicks < 550) {
			title = 'What do you call a pile of kittens? A meowntain.';
		} else if (clicks < 600) {
			title = 'Why are cats so good at video games? Because they have nine lives!';
		} else if (clicks < 650) {
			title = 'What is a cats favorite color? Purrrple!';
		} else {
			title = 'Laughter is the best medicine. Unless you have diarrhea';
		}
		return title;
	}, this);
}

// make cats show up in a List
//
// make currentCat show up when cat from list is clicked


var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push( new Cat(catItem) );
  });

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };
};

ko.applyBindings(new ViewModel());
