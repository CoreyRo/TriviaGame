//***************TriviaGame***************
//  By Corey Rodems
// To Do
//Layout webpages
//Come up with questions
//Time questions/Score questions
// if question is right, 1 point move on
// if questions is wrong, -1 point move on
// if out of time -1 point move on
//*********************************************
$(document).ready(function($) {
	var answerTxts = ["#answer-one-txt", "#answer-two-txt", "#answer-three-txt", "#answer-four-txt"];
	var answerBtns = ["#answer-one", "#answer-two", "#answer-three", "#answer-four"];
	var hintsArray = [];
	var hintsLft = 3;
	//question objects
	var qOne = {
		question: 'Stanley Kubrick and _________________ were the two writers of the screenplay for the 1968 film "2001: A Space Odyssey".',
		answers: ["Arthur C. Clarke", "Robert A. Heinlein", "L. Ron Hubbard", "Isaac Asimov"],
		correctAnswer: "Arthur C. Clarke",
		link:"https://www.youtube.com/embed/XHjIqQBsPjk?autoplay=1&controls=1"
		// 
	}
	var qTwo = {
		question: "Neill Blomkamp, director of movies such as District 9 and Elysium, recently started _________________, the experimental online VFX studio.",
		answers: ["Oats Studios", "Zygote Studios", "Rakka Limited", "Chappie Unchained"],
		correctAnswer: "Oats Studios",
		link:"https://www.youtube.com/embed/zoiezEB9n2Q?autoplay=1&controls=1"
	}
	var qThr = {
		question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
		answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
		correctAnswer: "All You Need Is Kill",
		link:"https://www.youtube.com/embed/vw61gCe2oqI?autoplay=1&controls=1"
	}
	var qFr = {
		question: 'The child hero who defeated the Formics was named _________________.',
		answers: ["Ender Wiggin", "Mazer Rackham", "Bonzo Madrid", "Asa Butterfield"],
		correctAnswer: "Ender Wiggin",
		link:"https://youtu.be/2UNWLgY-wuo?autoplay=1&controls=1&t=7"
	}
	var qFv = {
		question: "Ripley's legendary fight in the mech loader against the Queen is in which movie?",
		answers: ["Alien", "Aliens", "Alien 3", "Alien: Resurrection"],
		correctAnswer: "Aliens",
		link:"https://www.youtube.com/embed/DnOIvn8hMS4?autoplay=1&controls=1"
	}
	// var qSx = {
	// 	question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
	// 	answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
	// 	correctAnswer: "All You Need Is Kill",
	// 	link:"https://www.youtube.com/embed/XHjIqQBsPjk?autoplay=1&controls=1"
	// }
	// var qSvn = {
	// 	question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
	// 	answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
	// 	correctAnswer: "All You Need Is Kill",
	// 	link:"https://www.youtube.com/embed/XHjIqQBsPjk?autoplay=1&controls=1"
	// }
	// var qEt = {
	// 	question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
	// 	answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
	// 	correctAnswer: "All You Need Is Kill",
	// 	link:"https://www.youtube.com/embed/XHjIqQBsPjk?autoplay=1&controls=1"
	// }
	// var qNn = {
	// 	question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
	// 	answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
	// 	correctAnswer: "All You Need Is Kill",
	// 	link:"https://www.youtube.com/embed/XHjIqQBsPjk?autoplay=1&controls=1"
	// }
	// var qTn = {
	// 	question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
	// 	answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
	// 	correctAnswer: "All You Need Is Kill",
	// 	link:"https://www.youtube.com/embed/XHjIqQBsPjk?autoplay=1&controls=1"
	// }
	var thisVal;
	var qsArray = [qOne, qTwo, qThr, qFr, qFv]
	// , qSx, qSvn, qEt, qNn, qTn];
	var q1;
	var qPos = 0;
	var points = 0;
	var fails = 0;
	var intervalID;
	var time = 15;
	var hintsbtn;
	var hinthide;
	var hA;




	function reset() {
		time = 0;
		$("#timer").html("00:30");
	}

	function start() {
		intervalId = setInterval(count, 1000);
	}

	function stop() {
		console.log("stopping");
		clearInterval(intervalId);
	}

	function count() {
		time--;
		$("#timer").html(time);
		if (time === 0) {
			stop();
			fails += 1;;
			$("#fail").html("Incorrect: " + fails).addClass("shake");
			$("#mainGameBox").animateCss("zoomOut");
			setTimeout(toPoints, 800);

			function toPoints() {

				$("#mainGameBox").hide();
				$("#mainPointsBox").show().animateCss("zoomIn");
				$("#pointsText").html('<h2 id="" class="points center-block">Sorry! Ran out of time!</h2><h2 class="points">The correct answer was ' + q1.correctAnswer + '.');
			}
			clearTimeout(intervalID);
			intervalID = setTimeout(correctb, 3400);

			function correctb() {
				qPos += 1;
				console.log("Question Array index " + qPos);
				mainGame();
			}
		}
	}
	//for the animate.css library
	$.fn.extend({
		animateCss: function(animationName) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			this.addClass('animated ' + animationName).one(animationEnd, function() {
				$(this).removeClass('animated ' + animationName);
			});
			return this;
		}
	});
	//shuffles arrays
	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}
	//when page loads effects
	$("#mainGameBox, #hud, #mainPointsBox").hide();
	$("#startYes").on("click", function() {
		$("#startBox").addClass("animated bounceOut");
		setTimeout(wait, 800);

		function wait() {
			//shuffles questions array
			shuffle(qsArray);
			//starts main game loop
			mainGame();
		}
	});
	//main game loop
	function mainGame() {
		if(qPos < 4){
			clearTimeout(intervalID)
			intervalID = setTimeout(runMain, 1200);

			function runMain() {
				time = 30;
				$("#hintsLeft").html("Hints Left: " + hintsLft);
				start();
				//qPos is the position of the index, qPos starts at 0 so the index of the array will be 0
				console.log("Question Array index " + qPos);
				// q1 is the question at index qPos of the array, default qPos=0
				q1 = qsArray[qPos];
				console.log("current question" + qsArray[qPos].correctAnswer);

				//shuffles the answers array for the buttons.
				shuffle(q1.answers);
				for (var i = 0; i < 4; i++) {
					hintsArray.push(q1.answers[i]);
					
				}
				
				console.log(hintsArray.indexOf(q1.correctAnswer));
				var removeAnswer = hintsArray.indexOf(q1.correctAnswer);
				hintsArray.splice(removeAnswer, 1);
				console.log("H array " + hintsArray);
				$(".answers").prop("disabled", false);
				$("#hintBtn").prop("disabled", false);


				//********************DOM animations********************
				$("#questionText").html(q1.question);
				$("#startBox, #questionTextDiv, #timerDiv, .answers, #hintDiv, #mainPointsBox").hide();
				$(".answers").removeClass("answersRight");
				$(".answers").removeClass("answersWrong");
				$("#mainGameBox").show().animateCss("bounceIn");
				$("#hud").show().animateCss("fadeInUpBig");
				setTimeout(wait, 1000);

				function wait() {
					$("#questionTextDiv").show().animateCss("fadeIn");
					$("#timerDiv").show().animateCss("fadeIn");
				}
				setTimeout(btn1, 1800);

				function btn1() {
					$("#answer-one").show().animateCss("fadeIn");
				}
				setTimeout(btn2, 2000);

				function btn2() {
					$("#answer-two").show().animateCss("fadeIn");
				}
				setTimeout(btn3, 2200);

				function btn3() {
					$("#answer-three").show().animateCss("fadeIn");
				}
				setTimeout(btn4, 2400);

				function btn4() {
					$("#answer-four").show().animateCss("fadeIn");
				}
				

				if(hintsLft === 0){
					$("#hintDiv").hide()
				}
				else{
					setTimeout(btn5, 2800);
					function btn5() {
						$("#hintDiv").show().animateCss("fadeIn");
					}
				}
				//**************************************************
				//adds the answers to the buttons and gives them a value for the answers
				for (var i = 0; i < 4; i++) {
					$(answerTxts[i]).html(q1.answers[i]);
					$(answerBtns[i]).attr("value", q1.answers[i]);
					$(answerBtns[i]).addClass(q1.answers[i]);
				};
				//checks the value of the clicked button vs. the property of the object "correct answer"
			} // console.log(q1.answers);
		}
		else{
			alert("game over");
		}

		//Hint button
		$("#hintBtn").on("click", function(){
		$("#hintBtn").prop("disabled", true);
		if(hintsLft >= 1){
			hintsLft --;
			
			$("#hintsLeft").html("Hints Left: " + hintsLft);

			for (var i = 0; i < 2; i++) {
				
				hA = hintsArray[i];
				for (var j = 0; j < answerBtns.length; j++) {
					hintsbtn = $(answerBtns[j]).val();
					if(hintsbtn == hA){

						$(answerBtns[j]).hide();
					}
				}
			}		
				
		}
		else{
			alert("no hints left")
		}	
	});
	}
	$(".answers").on("click", function() {
		thisVal = $(this).val();
		stop();
		$("#vidTextDiv").show();
		$(".answers").prop("disabled", true);
		console.log(thisVal);
		var guessVal = $(this).val();
		var guess = $(this);
		debugger;
		if (thisVal === q1.correctAnswer) {
			//Right Answer
			console.log("YEAS");
			$(this).addClass("answersRight");
			points += 1;
			$("#right").html("Correct: " + points).animateCss("rubberBand");
			console.log("Question Array index " + qPos);
			$("#mainGameBox").animateCss("zoomOut");
			setTimeout(toPoints, 800);

			function toPoints() {
				$("#mainGameBox").hide();
				// $("#videoPlay").replaceWith('<iframe class="center-block" id="videoPlay" width="560" height="315"' + q1.link + ' frameborder="0" allowfullscreen></iframe>');
				$("#videoPlay").attr('src', q1.link);
				$("#mainPointsBox, vidTextDiv").show().animateCss("zoomIn");
				$("#pointsText").html('<h2 id="" class="points center-block">Correct! ' + guessVal + ' was right.</h2>');
			}
			clearTimeout(intervalID);
			intervalID = setTimeout(correctb, 3400);

			function correctb() {
				qPos += 1;
				$("#contBtnTxt").on("click", function(){
					$("#vidTextDiv").hide();
					clearTimeout(intervalID);
					$("#videoPlay").attr('src', "#");
					mainGame();
				})
				console.log("Question Array index " + qPos);
				// mainGame();
			}
		} else {
			//Wrong Answer
			fails += 1;;
			$("#fail").html("Incorrect: " + fails).addClass("shake");
			$(this).addClass("answersWrong");
			console.log("NARP");
			$("#mainGameBox").animateCss("zoomOut");
			setTimeout(toPoints, 800);

			function toPoints() {
				$("#mainGameBox").hide();
				$("#videoPlay").attr('src', q1.link);
				$("#mainPointsBox").show().animateCss("zoomIn");
				$("#pointsText").html('<h2 id="" class="points center-block">Sorry! ' + guessVal + ' was incorrect.</h2><h2 class="points">The correct answer was ' + q1.correctAnswer + '.');
			}
			clearTimeout(intervalID);
			intervalID = setTimeout(correctb, 3400);

			function correctb() {
				qPos += 1;
				$("#contBtnTxt").on("click", function(){
					$("#vidTextDiv").hide();
					$("#videoPlay").attr('src', "#");
					clearTimeout(intervalID);
					mainGame();
				});
				console.log("Question Array index " + qPos);
				mainGame();
			}
		}
	});
	
});