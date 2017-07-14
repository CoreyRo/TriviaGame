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

	//question objects
	var qOne = {
		question:'Stanley Kubrick and _________________ were the two writers of the screenplay for the 1968 film "2001: A Space Odyssey"?',
		answers:["Arthur C. Clarke","Robert A. Heinlein", "L. Ron Hubbard", "Isaac Asimov"],
		correctAnswer:"Arthur C. Clarke"
	}
	var qTwo = {
		question:"Neill Blomkamp, director of movies such as District 9 and Elysium, recently started _________________, the experimental online VFX studio.",
		answers:["Oats Studios","Zygote Studios", "Rakka Limited", "Chappie Unchained"],
		correctAnswer:"Oats Studios"
	}
	var qThr = {
		question:'The 2014 Sci Fi adventure "Edge of Tomorrow" was influced by the 2004 light novel _________________.',
		answers:["Live, Die, Repeat","All You Need Is Kill", "Love, Live, Kill", "Killing in the Name of: Tomorrow"],
		correctAnswer:"All You Need Is Kill"
	}
	var thisVal;
	var qsArray = [qOne, qTwo, qThr];
	var q1;
	var qPos = 0; 
	
	

	//for the animate.css library
	$.fn.extend({
	    animateCss: function (animationName) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	        });
	        return this;
    	}
	});

	//shuffles arrays
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;
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
	$("#mainGameBox, #hud").hide();
	$("#startYes").on("click", function(){
		$("#startBox").addClass("animated bounceOut");
		setTimeout(wait, 800);
		function wait(){
			//shuffles questions array
			shuffle(qsArray);
			//starts main game loop
			mainGame();
		}
	});

	//main game loop
	function mainGame(){
		setTimeout(runMain,500);
		function runMain(){
			//qPos is the position of the index, qPos starts at 0 so the index of the array will be 0
			console.log("Question Array index " + qPos);
			
			// q1 is the question at index qPos of the array, default qPos=0
			q1 = qsArray[qPos];
			console.log("current question" + qsArray[qPos].correctAnswer);

			//shuffles the answers array for the buttons.
			shuffle(q1.answers);

			//********************DOM animations********************
			$("#questionText").html(q1.question);
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
				$("#answer-one").show().animateCss("bounceInLeft");
			}
			setTimeout(btn2, 2000);
			function btn2(){
				$("#answer-two").show().animateCss("bounceInRight");
			}
			setTimeout(btn3, 2200);
			function btn3(){
				$("#answer-three").show().animateCss("bounceInLeft");
			}
			setTimeout(btn4, 2400);
			function btn4(){
				$("#answer-four").show().animateCss("bounceInRight");
			}
			setTimeout(btn5, 2800);
			function btn5(){
				$("#hintDiv").show().animateCss("bounceInUp");
			}
			//**************************************************

			//adds the answers to the buttons and gives them a value for the answers
			for (var i = 0; i < 4; i++) {
				$(answerTxts[i]).html(q1.answers[i]);
				$(answerBtns[i]).attr("value", q1.answers[i]);
			};

			//checks the value of the clicked button vs. the property of the object "correct answer"
			$(".answers").on("click",function(){
				thisVal = $(this).val();
				console.log(thisVal);
				debugger;
				if(thisVal == q1.correctAnswer){
					//Right Answer
					console.log("YEAS");
					setTimeout(correctA, 100);
					function correctA(){

						//on the second question it brings up, right here it is running twice. it runs through the 3 lines
						//normally it runs once.
						//it adds 1 to qPos
						//it logs the qPos,
						//then it goes to main game
						//the index of the question array is now increased by 1, so it goes to the next question.
						//however when this runs again, it runs twice.
						
						qPos += 1;
						console.log("Question Array index " + qPos);
						mainGame();
					}
				}
				else{
					//Wrong Answer
					console.log("NARP");
				}
			});
		}	// console.log(q1.answers);
	}




	
});