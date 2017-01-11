  $(document).ready(function(){
    var adviceSource=[
      {
      advice: "Express your true feelings."
      },
      {
        advice:"Make sure your needs are being met."
      },
      {
        advice:"I do not know. System resources dangerously low. Powering down..."
      },
      {
        advice:"Be honest with yourself."
      },
      {
        advice:"There is always a peaceful alternative to conflict"
      },
      {
        advice:"It's always a good idea to eat pizza."  
      },
      {
        advice:"Keep your thoughts positive."
      },
      {
        advice:"What, again?! I need some time alone."
      },
      {
        advice:"Yes"
      },
      {
        advice:"Stop doing that!"
      },
      {
        advice:"Get back to work!"
      },
      {
        advice:"Why?"
      },
      {
        advice:"What are your true intentions?"
      },
      {
        advice:"No"
      },
      {
        advice:"You should sleep on it."
      },
      {
        advice:"Whatevs."
      },
      {
        advice:"Let go of judgments about yourself and others."
      },
      {
        advice:"Let go of attempts to make everyone happy."
      },
      {
        advice:"Don't eat the yellow snow."
      },
      {
        advice:"Drink more water."
      },
      {
        advice:"Avoid situations, places or relationships with harsh energy."
      },
      {
        advice:"Let go of worries of guilt and enjoy. YOLO."
      },
      {
        advice:"Just chillax."
      },
      {
        advice:"Trust your gut."
      },
      {
        advice:"Be assertive."
      },
      {
        advice:"Do it."
      },
      {
        advice:"Forgive yourself."
      },
      {
        advice:"Yo, real talk. Your situation is wack."
      },
      {
        advice:"Follow your dreams."
      },
      {
        advice:"Find the humor in your situation."
      },
      {
        advice:"Better done than perfect."
      },
      {
        advice:"Ain't nobody got time for that."
      },
      {
        advice:"You're on the right path."
      }

  ];
    

    $('#button').click(function(evt){
      //define the containers of the info we target
      var advice = $('#adviceContainer p').text();
      //var adviceGenius = $('#adviceGenius').text();

      //prevent browser's default action
      evt.preventDefault();

      //getting a new random number to attach to advice and setting a limit
      var sourceLength = adviceSource.length;
      var randomNumber= Math.floor(Math.random()*sourceLength);

      //set new advice
      for(i=0;i<=sourceLength;i+=1){
      var newAdviceText = adviceSource[randomNumber].advice;
      //var newAdviceGenius = adviceSource[randomNumber].name;

      //console.log(newAdviceText,newAdviceGenius);
      var timeAnimation = 500;
      var adviceContainer = $('#adviceContainer');

      //fade out animation with callback
      adviceContainer.fadeOut(timeAnimation, function(){
        adviceContainer.html('');
        adviceContainer.append('<p>'+newAdviceText+'</p>');
        
        //fadein animation.
        adviceContainer.fadeIn(timeAnimation);
      });  
      
      break;
    };//end for loop
  
  });//end adviceButton function
    
    
});//end document ready