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
	var answerTxts = ["#answer-one-txt","#answer-two-txt","#answer-three-txt","#answer-four-txt"];
	var answerBtns = ["#answer-one","#answer-two","#answer-three","#answer-four"];
	var qOne = {
		question:'Stanley Kubrick and _________________ were the two writers of the screenplay for the 1968 film "2001: A Space Odyssey"?',
		answers:["Arthur C. Clarke","Robert A. Heinlein", "L. Ron Hubbard", "Isaac Asimov"],
		correctAnswer:"Arthur C. Clarke"
	}
	console.log(qOne.answers);
	$.fn.extend({
	    animateCss: function (animationName) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	        });
	        return this;
    	}
	});
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	console.log("ready")
	$("#mainGameBox, #hud").hide();
	$("#startYes").on("click", function(){
		$("#startBox").addClass("animated bounceOut");
		setTimeout(wait, 800);
		function wait(){
			shuffle(qOne.answers);
			mainGame();
		}
	});

	function mainGame(){
		$("#startBox, #questionTextDiv, #timerDiv, .answers, #hintDiv").hide();
		$("#mainGameBox").show().animateCss("bounceIn");
		$("#hud").show().animateCss("fadeInUpBig");
		setTimeout(wait, 1000);
		function wait(){
			$("#questionTextDiv").show().animateCss("zoomIn");
			$("#timerDiv").show().animateCss("zoomIn");
		}
		setTimeout(btn1, 1800);
		function btn1(){
			$("#answer-one").show().animateCss("lightSpeedIn");
		}
		setTimeout(btn2, 2000);
		function btn2(){
			$("#answer-two").show().animateCss("lightSpeedIn");
		}
		setTimeout(btn3, 2200);
		function btn3(){
			$("#answer-three").show().animateCss("lightSpeedIn");
		}
		setTimeout(btn4, 2400);
		function btn4(){
			$("#answer-four").show().animateCss("lightSpeedIn");
		}
		setTimeout(btn5, 2800);
		function btn5(){
			$("#hintDiv").show().animateCss("bounceInUp");
		}
		for (var i = 0; i < 4; i++) {
			$(answerTxts[i]).html(qOne.answers[i]);
			$(answerBtns[i]).attr("value", qOne.answers[i]);

		};
		$(".answers").on("click",function(){
			var thisVal = $(this).val();
			console.log(thisVal);
			
			if(thisVal === qOne.correctAnswer){
				console.log("YEAS");
			}
			else{
				console.log("NARP");
			}
		})
		console.log(qOne.answers);
	}




	
});