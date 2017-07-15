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
	//question objects
	var qOne = {
		question: 'Stanley Kubrick and _________________ were the two writers of the screenplay for the 1968 film "2001: A Space Odyssey".',
		answers: ["Arthur C. Clarke", "Robert A. Heinlein", "L. Ron Hubbard", "Isaac Asimov"],
		correctAnswer: "Arthur C. Clarke"
	}
	var qTwo = {
		question: "Neill Blomkamp, director of movies such as District 9 and Elysium, recently started _________________, the experimental online VFX studio.",
		answers: ["Oats Studios", "Zygote Studios", "Rakka Limited", "Chappie Unchained"],
		correctAnswer: "Oats Studios"
	}
	var qThr = {
		question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
		answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
		correctAnswer: "All You Need Is Kill"
	}
	var qFr = {
		question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
		answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
		correctAnswer: "All You Need Is Kill"
	}
	var qFv = {
		question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
		answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
		correctAnswer: "All You Need Is Kill"
	}
	var qSx = {
		question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
		answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
		correctAnswer: "All You Need Is Kill"
	}
	var qSvn = {
		question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
		answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
		correctAnswer: "All You Need Is Kill"
	}
	var qEt = {
		question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
		answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
		correctAnswer: "All You Need Is Kill"
	}
	var qNn = {
		question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
		answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
		correctAnswer: "All You Need Is Kill"
	}
	var qTn = {
		question: 'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
		answers: ["Live, Die, Repeat", "All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
		correctAnswer: "All You Need Is Kill"
	}
	var thisVal;
	var qsArray = [qOne, qTwo, qThr];
	var q1;
	var qPos = 0;
	var points = 0;
	var fails = 0;
	var intervalID;
	var time = 15;

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
		if(qPos < 10){
		clearTimeout(intervalID)
		intervalID = setTimeout(runMain, 1200);

		function runMain() {
			time = 15;
			start();
			//qPos is the position of the index, qPos starts at 0 so the index of the array will be 0
			console.log("Question Array index " + qPos);
			// q1 is the question at index qPos of the array, default qPos=0
			q1 = qsArray[qPos];
			console.log("current question" + qsArray[qPos].correctAnswer);
			//shuffles the answers array for the buttons.
			shuffle(q1.answers);
			//********************DOM animations********************
			$("#questionText").html(q1.question);
			$("#startBox, #questionTextDiv, #timerDiv, .answers, #hintDiv, #mainPointsBox").hide();
			$(".answers").removeClass("answersRight");
			$(".answers").removeClass("answersWrong");
			$("#mainGameBox").show().animateCss("bounceIn");
			$("#hud").show().animateCss("fadeInUpBig");
			setTimeout(wait, 1000);

			function wait() {
				$("#questionTextDiv").show().animateCss("zoomIn");
				$("#timerDiv").show().animateCss("zoomIn");
			}
			setTimeout(btn1, 1800);

			function btn1() {
				$("#answer-one").show().animateCss("bounceInLeft");
			}
			setTimeout(btn2, 2000);

			function btn2() {
				$("#answer-two").show().animateCss("bounceInRight");
			}
			setTimeout(btn3, 2200);

			function btn3() {
				$("#answer-three").show().animateCss("bounceInLeft");
			}
			setTimeout(btn4, 2400);

			function btn4() {
				$("#answer-four").show().animateCss("bounceInRight");
			}
			setTimeout(btn5, 2800);

			function btn5() {
				$("#hintDiv").show().animateCss("bounceInUp");
			}
			//**************************************************
			//adds the answers to the buttons and gives them a value for the answers
			for (var i = 0; i < 4; i++) {
				$(answerTxts[i]).html(q1.answers[i]);
				$(answerBtns[i]).attr("value", q1.answers[i]);
			};
			//checks the value of the clicked button vs. the property of the object "correct answer"
		} // console.log(q1.answers);
	}
	$(".answers").on("click", function() {
		thisVal = $(this).val();
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
				$("#mainPointsBox").show().animateCss("zoomIn");
				$("#pointsText").html('<h2 id="" class="points center-block">Correct! ' + guessVal + ' was right.</h2>');
			}
			clearTimeout(intervalID);
			intervalID = setTimeout(correctb, 3400);

			function correctb() {
				qPos += 1;
				console.log("Question Array index " + qPos);
				mainGame();
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
				$("#mainPointsBox").show().animateCss("zoomIn");
				$("#pointsText").html('<h2 id="" class="points center-block">Sorry! ' + guessVal + ' was incorrect.</h2><h2 class="points">The correct answer was ' + q1.correctAnswer + '.');
			}
			clearTimeout(intervalID);
			intervalID = setTimeout(correctb, 3400);

			function correctb() {
				qPos += 1;
				console.log("Question Array index " + qPos);
				mainGame();
			}
		}
	});
});