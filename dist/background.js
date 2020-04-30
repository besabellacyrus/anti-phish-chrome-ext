/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/nicejob/data sync recursive ^\\.\\/.*\\.json$":
/*!*******************************************************!*\
  !*** ./node_modules/nicejob/data sync ^\.\/.*\.json$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./negative.json\": \"./node_modules/nicejob/data/negative.json\",\n\t\"./positive.json\": \"./node_modules/nicejob/data/positive.json\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/nicejob/data sync recursive ^\\\\.\\\\/.*\\\\.json$\";\n\n//# sourceURL=webpack:///./node_modules/nicejob/data_sync_^\\.\\/.*\\.json$?");

/***/ }),

/***/ "./node_modules/nicejob/data/negative.json":
/*!*************************************************!*\
  !*** ./node_modules/nicejob/data/negative.json ***!
  \*************************************************/
/*! exports provided: negative, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"negative\\\":[\\\"Rotten\\\",\\\"Awful\\\",\\\"Terrible\\\",\\\"Bad\\\",\\\"Inferior\\\",\\\"Poor\\\",\\\"Wretched\\\",\\\"Dirty\\\",\\\"Miserable\\\",\\\"Vile\\\",\\\"Second-rate\\\",\\\"Atrocious\\\",\\\"Despicable\\\",\\\"Nasty\\\",\\\"Abominable\\\",\\\"Base\\\",\\\"Filthy\\\",\\\"Shoddy\\\",\\\"Substandard\\\",\\\"Unsatisfactory\\\",\\\"Stinking\\\",\\\"Contemptible\\\",\\\"Crappy\\\",\\\"Low-grade\\\",\\\"Beastly\\\",\\\"Crummy\\\",\\\"Foul\\\",\\\"Horrible\\\",\\\"Loathsome\\\",\\\"Shabby\\\",\\\"Vicious\\\",\\\"Deplorable\\\",\\\"Detestable\\\",\\\"Dreadful\\\",\\\"Execrable\\\",\\\"Icky\\\",\\\"Mediocre\\\",\\\"Pathetic\\\",\\\"Unpleasant\\\",\\\"Cheap\\\",\\\"Disgusting\\\",\\\"Hateful\\\",\\\"Inadequate\\\",\\\"Second-class\\\",\\\"Worthless\\\",\\\"Fetid\\\",\\\"Lamentable\\\",\\\"Middling\\\",\\\"Offensive\\\",\\\"Sick\\\",\\\"Sorry\\\",\\\"Disagreeable\\\",\\\"Grubby\\\",\\\"Horrid\\\",\\\"Ill\\\",\\\"Low-quality\\\",\\\"Obnoxious\\\",\\\"Pitiful\\\",\\\"Repulsive\\\",\\\"Stinky\\\",\\\"Trashy\\\",\\\"Woeful\\\",\\\"Defective\\\",\\\"Faulty\\\",\\\"Grotty\\\",\\\"Heinous\\\",\\\"Infamous\\\",\\\"Odious\\\",\\\"Outrageous\\\",\\\"Pedicular\\\",\\\"Pitiable\\\",\\\"Punk\\\",\\\"Sad\\\",\\\"Scurvy\\\",\\\"Sleazy\\\",\\\"Slovenly\\\",\\\"Sordid\\\",\\\"Squalid\\\",\\\"Ugly\\\",\\\"Unacceptable\\\",\\\"Unclean\\\",\\\"Unwelcome\\\",\\\"Villainous\\\",\\\"Abhorrent\\\",\\\"Appalling\\\",\\\"Bum\\\",\\\"Cheesy\\\",\\\"Contaminated\\\",\\\"Creepy\\\",\\\"Cruddy\\\",\\\"Displeasing\\\",\\\"Foetid\\\",\\\"Frightful\\\",\\\"Funky\\\",\\\"Gross\\\",\\\"Harmful\\\",\\\"Hideous\\\",\\\"Hopeless\\\",\\\"Infected\\\",\\\"Low-down\\\",\\\"Malodorous\\\",\\\"Muddy\\\",\\\"Nefarious\\\",\\\"Notorious\\\",\\\"Objectionable\\\",\\\"Paltry\\\",\\\"Pediculous\\\",\\\"Poorly\\\",\\\"Repugnant\\\",\\\"Ropy\\\",\\\"Rough\\\",\\\"Seedy\\\",\\\"Severe\\\",\\\"Shitty\\\",\\\"Smutty\\\",\\\"Tawdry\\\",\\\"Teeming\\\",\\\"Two-bit\\\",\\\"Unfortunate\\\",\\\"Unpopular\\\",\\\"Unwell\\\",\\\"Worst\\\",\\\"Yucky\\\",\\\"Adverse\\\",\\\"Below par\\\",\\\"Common\\\",\\\"Contaminating\\\",\\\"Detested\\\",\\\"Disappointing\\\",\\\"Disliked\\\",\\\"Distasteful\\\",\\\"Distressing\\\",\\\"Egregious\\\",\\\"Evil\\\",\\\"Garbage\\\",\\\"Gooey\\\",\\\"Grievous\\\",\\\"Grody\\\",\\\"Grungy\\\",\\\"Horrendous\\\",\\\"Imperfect\\\",\\\"Inclement\\\",\\\"Incompetent\\\",\\\"Indifferent\\\",\\\"Infested\\\",\\\"Intentionally untrue\\\",\\\"Intolerable\\\",\\\"Junky\\\",\\\"Lame\\\",\\\"Malevolent\\\",\\\"Monstrous\\\",\\\"Mucky\\\",\\\"Naff\\\",\\\"Nauseated\\\",\\\"Niggardly\\\",\\\"No good\\\",\\\"Out of sorts\\\",\\\"Pesky\\\",\\\"Polluted\\\",\\\"Putrid\\\",\\\"Queasy\\\",\\\"Rank\\\",\\\"Ratty\\\",\\\"Raunchy\\\",\\\"Repellent\\\",\\\"Replete\\\",\\\"Revolting\\\",\\\"Scabby\\\",\\\"Scandalous\\\",\\\"Schlocky\\\",\\\"Scummy\\\",\\\"Scuzzy\\\",\\\"Shameful\\\",\\\"Shocking\\\",\\\"Slimy\\\",\\\"Smelly\\\",\\\"Soiled\\\",\\\"Tasteless\\\",\\\"Unattractive\\\",\\\"Unbearable\\\",\\\"Under the weather\\\",\\\"Undesirable\\\",\\\"Unfavourable\\\",\\\"Unhappy\\\",\\\"Unsavory\\\",\\\"Unsightly\\\",\\\"Unwanted\\\",\\\"Unworthy\\\",\\\"Very bad\\\",\\\"Wanting\\\",\\\"Wicked\\\",\\\"A load of pants\\\",\\\"Abhorred\\\",\\\"Abysmal\\\",\\\"Accursed\\\",\\\"Ailing\\\",\\\"Amateurish\\\",\\\"Antipathetic\\\",\\\"Arrant\\\",\\\"Average\\\",\\\"Avoided\\\",\\\"Awkward\\\",\\\"Bad-tempered\\\",\\\"Bad news\\\",\\\"Badly\\\",\\\"Barren\\\",\\\"Bedraggled\\\",\\\"Bedridden\\\",\\\"Begrimed\\\",\\\"Beneath contempt\\\",\\\"Beset\\\",\\\"Blackballed\\\",\\\"Blameworthy\\\",\\\"Bogus\\\",\\\"Broken down\\\",\\\"Brutal\\\",\\\"Callous\\\",\\\"Cantankerous\\\",\\\"Catchpenny\\\",\\\"Chintzy\\\",\\\"Churlish\\\",\\\"Coarse\\\",\\\"Commonplace\\\",\\\"Confined\\\",\\\"Cruel\\\",\\\"Dangerous\\\",\\\"Dastard\\\",\\\"Debilitated\\\",\\\"Declining\\\",\\\"Deficient\\\",\\\"Defiled\\\",\\\"Delicate\\\",\\\"Depleted\\\",\\\"Despisable\\\",\\\"Despised\\\",\\\"Difficult\\\",\\\"Dingy\\\",\\\"Dire\\\",\\\"Disarrayed\\\",\\\"Diseased\\\",\\\"Disesteemed\\\",\\\"Disfavored\\\",\\\"Dishabille\\\",\\\"Disheveled\\\",\\\"Dishonorable\\\",\\\"Dismal\\\",\\\"Disordered\\\",\\\"Dissatisfactory\\\",\\\"Distressed\\\",\\\"Dreggy\\\",\\\"Drip\\\",\\\"Dud\\\",\\\"Duff\\\",\\\"Dumpy\\\",\\\"Dungy\\\",\\\"Dusty\\\",\\\"Exceptionable\\\",\\\"Excess baggage\\\",\\\"Execrated\\\",\\\"Failing\\\",\\\"Fearful\\\",\\\"Feeble\\\",\\\"Feverish\\\",\\\"Flagrant\\\",\\\"Flawed\\\",\\\"Fouled\\\",\\\"Frail\\\",\\\"Fusty\\\",\\\"Garish\\\",\\\"Ghastly\\\",\\\"Gimcrack\\\",\\\"Glitch\\\",\\\"Godawful\\\",\\\"Good-for-nothing\\\",\\\"Greasy\\\",\\\"Grim\\\",\\\"Grimy\\\",\\\"Grotesque\\\",\\\"Gruesome\\\",\\\"Hack\\\",\\\"Hard-nosed\\\",\\\"Hellish\\\",\\\"Horrific\\\",\\\"Hospitalized\\\",\\\"Hostile\\\",\\\"Ignoble\\\",\\\"Ill-favored\\\",\\\"Ill-tempered\\\",\\\"Impaired\\\",\\\"Impotent\\\",\\\"In a bad way\\\",\\\"Inadmissible\\\",\\\"Inappreciable\\\",\\\"Inapt\\\",\\\"Incapable\\\",\\\"Incommensurate\\\",\\\"Inconsiderable\\\",\\\"Incurable\\\",\\\"Indisposed\\\",\\\"Inefficient\\\",\\\"Infirm\\\",\\\"Inhospitality\\\",\\\"Insubstantial\\\",\\\"Invalid\\\",\\\"Joyless\\\",\\\"Junk\\\",\\\"Knavish\\\",\\\"Laid-up\\\",\\\"Left out in cold\\\",\\\"Lemon\\\",\\\"Lice-infested\\\",\\\"Lice-ridden\\\",\\\"Liverish\\\",\\\"Loathed\\\",\\\"Loser\\\",\\\"Low-down and dirty\\\",\\\"Malicious\\\",\\\"Malign\\\",\\\"Malodourous\\\",\\\"Mangy\\\",\\\"Mephitic\\\",\\\"Meretricious\\\",\\\"Messy\\\",\\\"Mung\\\",\\\"Murderous\\\",\\\"Murky\\\",\\\"Nauseating\\\",\\\"Nauseous\\\",\\\"Nerdy\\\",\\\"No-good\\\",\\\"No bargain\\\",\\\"Not healthy\\\",\\\"Not in the picture\\\",\\\"Not so hot\\\",\\\"Not up to scratch\\\",\\\"Noxious\\\",\\\"Off colour\\\",\\\"Ordinary\\\",\\\"Ostracized\\\",\\\"Out of favor\\\",\\\"Overflowing\\\",\\\"Perfidious\\\",\\\"Pigpen\\\",\\\"Plagued\\\",\\\"Poison\\\",\\\"Poisonous\\\",\\\"Poorer\\\",\\\"Qualmish\\\",\\\"Rancid\\\",\\\"Ravaged\\\",\\\"Reeking\\\",\\\"Regrettable\\\",\\\"Rejected\\\",\\\"Reprehensible\\\",\\\"Rickety\\\",\\\"Rinky-dink\\\",\\\"Ropey\\\",\\\"Rubbish\\\",\\\"Rubbishy\\\",\\\"Rugged\\\",\\\"Run down\\\",\\\"Scary\\\",\\\"Schlock\\\",\\\"Scorned\\\",\\\"Scroungy\\\",\\\"Scruffy\\\",\\\"Scurrilous\\\",\\\"Serious\\\",\\\"Shameless\\\",\\\"Shunned\\\",\\\"Shut out\\\",\\\"Sick as a dog\\\",\\\"Sickening\\\",\\\"Sinking\\\",\\\"Slatternly\\\",\\\"Slipshod\\\",\\\"Sloppy\\\",\\\"Small-time\\\",\\\"Smudged\\\",\\\"Smudgy\\\",\\\"Snide\\\",\\\"Snotty\\\",\\\"Sooty\\\",\\\"Soured\\\",\\\"Spattered\\\",\\\"Spotted\\\",\\\"Stained\\\",\\\"Sterile\\\",\\\"Stinted\\\",\\\"Straggly\\\",\\\"Stunted\\\",\\\"Suffering\\\",\\\"Sullied\\\",\\\"Tacky\\\",\\\"Thankless\\\",\\\"Third-rate\\\",\\\"Too bad\\\",\\\"Too little\\\",\\\"Tottering\\\",\\\"Tragic\\\",\\\"Treacherous\\\",\\\"Troublesome\\\",\\\"Trumpery\\\",\\\"Ugliness\\\",\\\"Unaccepted\\\",\\\"Uncared for\\\",\\\"Uncool\\\",\\\"Under medication\\\",\\\"Under par\\\",\\\"Undesired\\\",\\\"Undusted\\\",\\\"Unfriendly\\\",\\\"Ungraciousness\\\",\\\"Unhygienic\\\",\\\"Unimportant\\\",\\\"Uninvited\\\",\\\"Unkempt\\\",\\\"Unkind\\\",\\\"Unlaundered\\\",\\\"Unloved\\\",\\\"Unpalatable\\\",\\\"Unproductive\\\",\\\"Unprofessional\\\",\\\"Unqualified\\\",\\\"Unreceptiveness\\\",\\\"Unsanitary\\\",\\\"Unscrupulous\\\",\\\"Unsought\\\",\\\"Unspeakable\\\",\\\"Unsportsmanlike\\\",\\\"Unswept\\\",\\\"Untidy\\\",\\\"Unwashed\\\",\\\"Unwelcomeness\\\",\\\"Unwished-for\\\",\\\"Useless\\\",\\\"Valueless\\\",\\\"Vexatious\\\",\\\"Vulgar\\\",\\\"Weak\\\",\\\"Weird\\\",\\\"White elephant\\\",\\\"Wimpy\\\",\\\"Wobbly\\\",\\\"Wormy\\\",\\\"Worse\\\",\\\"Wrong\\\",\\\"Yecchy\\\",\\\"Acid\\\",\\\"Afflicted\\\",\\\"Agonized\\\",\\\"Anguished\\\",\\\"Annoying\\\",\\\"Ashamed\\\",\\\"Awful dastardly\\\",\\\"Back seat\\\",\\\"Bad-natured\\\",\\\"Bad scene\\\",\\\"Baleful\\\",\\\"Bargain-basement\\\",\\\"Below average\\\",\\\"Bitchy\\\",\\\"Bitter\\\",\\\"Bland\\\",\\\"Bottom-rung\\\",\\\"Brim-full\\\",\\\"Bumbling\\\",\\\"Bursting\\\",\\\"Calamitous\\\",\\\"Careless\\\",\\\"Catastrophic\\\",\\\"Chock-a-block\\\",\\\"Chock-full\\\",\\\"Conscience-stricken\\\",\\\"Contrite\\\",\\\"Corrupt\\\",\\\"Crammed\\\",\\\"Crawling with\\\",\\\"Crumby\\\",\\\"Damaged\\\",\\\"Damaging\\\",\\\"Damned\\\",\\\"Decayed\\\",\\\"Decaying\\\",\\\"Decomposed\\\",\\\"Derisory\\\",\\\"Desired\\\",\\\"Desperate\\\",\\\"Despiteful\\\",\\\"Dirty-rotten\\\",\\\"Disastrous\\\",\\\"Disconsolate\\\",\\\"Disgraceful\\\",\\\"Disgustingly dirty\\\",\\\"Doleful\\\",\\\"Dull\\\",\\\"Eerie\\\",\\\"Entry-level\\\",\\\"Evil-minded\\\",\\\"Flavorless\\\",\\\"Foul-smelling\\\",\\\"Found wanting\\\",\\\"Fraught\\\",\\\"Frowsty\\\",\\\"Frowzy\\\",\\\"Gamy\\\",\\\"Gloomy\\\",\\\"Gorged\\\",\\\"Grieving\\\",\\\"Grisly\\\",\\\"Guilty\\\",\\\"Half-baked\\\",\\\"Heartbreaking\\\",\\\"Heartrending\\\",\\\"Heartsick\\\",\\\"Hellacious\\\",\\\"Hotheaded\\\",\\\"Hung-over\\\",\\\"Ill-humored\\\",\\\"Importance\\\",\\\"Improper\\\",\\\"Impure\\\",\\\"Incomplete\\\",\\\"Inconvenient\\\",\\\"Inhospitableness\\\",\\\"Injurious\\\",\\\"Insipid\\\",\\\"Insufficient\\\",\\\"Insupportable\\\",\\\"Invidious\\\",\\\"Irascible\\\",\\\"Irksome\\\",\\\"Irritable\\\",\\\"Knee-deep in\\\",\\\"Lacking\\\",\\\"Laughable\\\",\\\"Louse-infested\\\",\\\"Louse-ridden\\\",\\\"Low down\\\",\\\"Lurid\\\",\\\"Maggot\\\",\\\"Malignant\\\",\\\"Meager\\\",\\\"Menial\\\",\\\"Mildewy\\\",\\\"Miserly\\\",\\\"Moldy\\\",\\\"Moody\\\",\\\"Mournful\\\",\\\"Muddied\\\",\\\"Murder\\\",\\\"Musty\\\",\\\"Nether\\\",\\\"Not enough\\\",\\\"Not up to snuff\\\",\\\"Not wanted\\\",\\\"Obscene\\\",\\\"Off-color\\\",\\\"Off form\\\",\\\"Offensively malodorous\\\",\\\"Overloaded\\\",\\\"Overloaded with\\\",\\\"Painful\\\",\\\"Pale\\\",\\\"Par\\\",\\\"Parsimonious\\\",\\\"Peon\\\",\\\"Pernicious\\\",\\\"Pestiferous\\\",\\\"Pestilential\\\",\\\"Piteous\\\",\\\"Pits\\\",\\\"Plaintive\\\",\\\"Pongy\\\",\\\"Racked\\\",\\\"Rancorous\\\",\\\"Regretful\\\",\\\"Reject\\\",\\\"Remorseful\\\",\\\"Replete with\\\",\\\"Rife\\\",\\\"Ripe\\\",\\\"Rueful\\\",\\\"Scant\\\",\\\"Scanty\\\",\\\"Scarce\\\",\\\"Second\\\",\\\"Second-banana\\\",\\\"Second-fiddle\\\",\\\"Second-string\\\",\\\"Secondary\\\",\\\"Shady\\\",\\\"Shifty\\\",\\\"Sick as dog\\\",\\\"Sickie\\\",\\\"Sinister\\\",\\\"Sketchy\\\",\\\"Skimpy\\\",\\\"Sneaking\\\",\\\"Sorrowful\\\",\\\"Sparse\\\",\\\"Spiteful\\\",\\\"Stagnant\\\",\\\"Stale\\\",\\\"Stenchful\\\",\\\"Stenchy\\\",\\\"Stuffed\\\",\\\"Stuffy\\\",\\\"Subjacent\\\",\\\"Suboptimal\\\",\\\"Subordinate\\\",\\\"Subpar\\\",\\\"Subsidiary\\\",\\\"Sucky\\\",\\\"Swarming with\\\",\\\"Tainted\\\",\\\"Tart\\\",\\\"Teeming with\\\",\\\"Terrifying\\\",\\\"Tetchy\\\",\\\"Thoroughly unpleasant\\\",\\\"Tinpot\\\",\\\"Tortured\\\",\\\"Toucher\\\",\\\"Touchy\\\",\\\"Tuppenny\\\",\\\"Twopenny\\\",\\\"Unappealing\\\",\\\"Unappetizing\\\",\\\"Uncaring\\\",\\\"Uninviting\\\",\\\"Unlikable\\\",\\\"Unlovely\\\",\\\"Unpleasantly stormy\\\",\\\"Vengeful\\\",\\\"Verminous\\\",\\\"Vindictive\\\",\\\"Volatile\\\",\\\"Wack\\\",\\\"Waspish\\\",\\\"Whiffy\\\",\\\"Wretchedly bad\\\"]}\");\n\n//# sourceURL=webpack:///./node_modules/nicejob/data/negative.json?");

/***/ }),

/***/ "./node_modules/nicejob/data/positive.json":
/*!*************************************************!*\
  !*** ./node_modules/nicejob/data/positive.json ***!
  \*************************************************/
/*! exports provided: positive, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"positive\\\":[\\\"Congratulations\\\",\\\"Bravo\\\",\\\"Well done\\\",\\\"Good on you\\\",\\\"Nice work\\\",\\\"Kudos to you\\\",\\\"Compliments\\\",\\\"Good effort\\\",\\\"Congrats\\\",\\\"Good work\\\",\\\"I'm happy to see you working like that\\\",\\\"Perfect\\\",\\\"That's great\\\",\\\"That's the way\\\",\\\"Way to go\\\",\\\"Good for you\\\",\\\"Good going\\\",\\\"Nice going\\\",\\\"You're doing a good job\\\",\\\"You must have been practising\\\",\\\"Tip-top\\\",\\\"That's the best you've ever done\\\",\\\"You are doing that much better today\\\",\\\"At-a-boy\\\",\\\"Atta boy\\\",\\\"Attaboy\\\",\\\"Awesome\\\",\\\"Awesome possum\\\",\\\"Best yet\\\",\\\"Clever\\\",\\\"Couldn't have done it better myself\\\",\\\"Dynamite\\\",\\\"Excellent\\\",\\\"Fantastic\\\",\\\"Far out\\\",\\\"Fine\\\",\\\"Genius\\\",\\\"Good call\\\",\\\"Good on you mate\\\",\\\"Good remembering\\\",\\\"Good stuff\\\",\\\"Good thinking\\\",\\\"Great\\\",\\\"Hip hip hooray\\\",\\\"I'm proud of the way you worked today\\\",\\\"I'm very proud of you\\\",\\\"I've never seen anyone do it better\\\",\\\"I appreciate your hard work\\\",\\\"I knew you could do it\\\",\\\"I like that\\\",\\\"I think you've got it now\\\",\\\"Keep it up\\\",\\\"Keep on trying\\\",\\\"Keep up the good work\\\",\\\"Keep working you're getting better\\\",\\\"Lovely jubbly\\\",\\\"Marvellous\\\",\\\"Much better\\\",\\\"Neat\\\",\\\"Nice one\\\",\\\"Nicely done\\\",\\\"Nothing can stop you now\\\",\\\"Now that's what i call a fine job\\\",\\\"Now you've figured it out\\\",\\\"Now you have it\\\",\\\"Now you have the hang of it\\\",\\\"Oh boy\\\",\\\"One more time and you'll have it\\\",\\\"Outstanding\\\",\\\"Right on\\\",\\\"Sensational\\\",\\\"Sounds perfect\\\",\\\"Splendid\\\",\\\"Super duper\\\",\\\"Superb\\\",\\\"Sweet\\\",\\\"Sweet as\\\",\\\"Terrific\\\",\\\"That's a dear\\\",\\\"That's better\\\",\\\"That's better than ever\\\",\\\"That's good\\\",\\\"That's it\\\",\\\"That's quite an improvement\\\",\\\"That's really nice\\\",\\\"That's right\\\",\\\"That's the best ever\\\",\\\"That's the right way to do it\\\",\\\"That's the shot\\\",\\\"That's the way to do it\\\",\\\"That's very much better\\\",\\\"That gives me a happy feeling\\\",\\\"Tremendous\\\",\\\"Very good\\\",\\\"Well look at you go\\\",\\\"Well played\\\",\\\"When i'm with you i feel like singing\\\",\\\"Wonderful\\\",\\\"You're a genius\\\",\\\"You're doing beautifully\\\",\\\"You're doing fine\\\",\\\"You're doing the best you can\\\",\\\"You're getting better every day\\\",\\\"You're learning fast\\\",\\\"You're on the right track now\\\",\\\"You're really going to town\\\",\\\"You're really growing up\\\",\\\"You're really improving\\\",\\\"You're right\\\",\\\"You've done a great job\\\",\\\"You've got it made\\\",\\\"You've got that down pat\\\",\\\"You've just about got it\\\",\\\"You've just about mastered that\\\",\\\"You are really learning a lot\\\",\\\"You are very good at that\\\",\\\"You certainly did well today\\\",\\\"You did a lot of work today\\\",\\\"You did it that time\\\",\\\"You did that very well\\\",\\\"You figured that out fast\\\",\\\"You got it right\\\",\\\"You're beautiful\\\",\\\"You haven't missed a thing\\\",\\\"You make it look easy\\\",\\\"You outdid yourself today\\\",\\\"You remembered\\\",\\\"You're really working hard today\\\",\\\"Hooray\\\",\\\"Hurrah\\\"]}\");\n\n//# sourceURL=webpack:///./node_modules/nicejob/data/positive.json?");

/***/ }),

/***/ "./node_modules/nicejob/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/nicejob/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nfunction get(which) {\n  var phrases = __webpack_require__(\"./node_modules/nicejob/data sync recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\"+ which + \".json\")[which],\n    n = random(0, phrases.length - 1);\n  return phrases[n];\n}\n\nfunction nicejob() {\n  return get('positive');\n}\n\nfunction not_nicejob() {\n  return get('negative');\n}\n\nfunction random(min, max) {\n  if (max == null) {\n    max = min;\n    min = 0;\n  }\n  return min + Math.floor(Math.random() * (max - min + 1));\n}\n\nnicejob.not = not_nicejob;\n\nmodule.exports = nicejob;\n\n//# sourceURL=webpack:///./node_modules/nicejob/lib/index.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nicejob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nicejob */ \"./node_modules/nicejob/lib/index.js\");\n/* harmony import */ var nicejob__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nicejob__WEBPACK_IMPORTED_MODULE_0__);\n\nsetInterval(() => {\n  chrome.runtime.sendMessage({\n    message: nicejob__WEBPACK_IMPORTED_MODULE_0___default()()\n  });\n}, 1000);\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ })

/******/ });