$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    
    $('.exercise-button').click(clickedExerciseButton);
    $('.stamina-button').click(clickedStaminaButton);
    
  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"My Giga Pet", weight:"??", happiness:"??", stamina:"??"};
    pet_info['name'] = "Charchar";
    pet_info['weight'] = 250;
    pet_info['happiness'] = 15;
    pet_info['hunger'] = 10;
    pet_info['stamina'] = 50;
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info['happiness']=pet_info['happiness'] + 1;
      // Increase pet weight
      pet_info['weight']=pet_info['weight'] + 10;
      var sound = document.getElementById("treat.mp3");
      sound.play();
      document.getElementById('charchar').style.display='none';
      document.getElementById('charhunger').style.display='block';
      setTimeout(()=>{document.getElementById('charhunger').style.display='none';},2200);
      setTimeout(()=>{document.getElementById('charchar').style.display='block';},2200);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info['happiness'] = pet_info['happiness'] + 5;
      // Decrease pet weight
      pet_info['weight'] = pet_info['weight'] - 5;
      // Decrease pet Stamina
      pet_info['stamina'] = pet_info['stamina'] - 5;
      var audio = document.getElementById("pokemon-battle.mp3");
      audio.play();
      setTimeout(function() {
        audio.pause();
      }, 3150);
      document.getElementById('charchar').style.display='none';
      document.getElementById('charchu').style.display='block';
      setTimeout(()=>{document.getElementById('charchu').style.display='none';},3150);
      setTimeout(()=>{document.getElementById('charchar').style.display='block';},3150);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info['happiness'] = pet_info['happiness'] - 1;
      // Decrease pet weight
      pet_info['weight'] = pet_info['weight'] - 5;
      var audio = document.getElementById("Flamethrower.mp3");
      // Decrease pet stamina
      pet_info['stamina'] = pet_info['stamina'] - 10;
      audio.play();
      document.getElementById('charchar').style.display='none';
      document.getElementById('chargif').style.display='block';
      setTimeout(()=>{document.getElementById('chargif').style.display='none';},1650);
      setTimeout(()=>{document.getElementById('charchar').style.display='block';},1650);
      
      
      checkAndUpdatePetInfoInHtml();
    }
    function clickedStaminaButton() {
      // Increase pet happiness greatly
      pet_info['happiness'] = pet_info['happiness'] + 100;
      // Increase pet weight
      pet_info['weight'] = pet_info['weight'] + 10;
      // Increase pet stamina
      pet_info['stamina'] = pet_info['stamina'] = 100;
      var audio = document.getElementById("pokemon-center.mp3");
      audio.play();
      document.getElementById('charchar').style.display='none';
      document.getElementById('pokecenter').style.display='block';
      setTimeout(()=>{document.getElementById('pokecenter').style.display='none';},5800);
      setTimeout(()=>{document.getElementById('charchar').style.display='block';},5800);
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if(pet_info['weight'] < 0 ){
        pet_info['weight'] = 0;
      }
      if(pet_info['weight'] > 350 ){
        pet_info['weight'] = 350;
      }
      if(pet_info['happiness'] < 0 ){
        pet_info['happiness'] = 0;
      }
      if(pet_info['happiness'] > 100 ){
        pet_info['happiness'] = 100;
      }
      if(pet_info['hunger'] < 0 ){
        pet_info['hunger'] = 0;
      }
      if(pet_info['stamina'] < 0){
        pet_info['stamina'] = 0;
      }
      if(pet_info['stamina'] > 100){
        pet_info['stamina'] = 100;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.stamina').text(pet_info['stamina']);
    }
  

    

    //level up
    // https://www.myinstants.com/instant/level-up-video-game-sound-85006/?utm_source=copy&utm_medium=share

    //pokemon center
    // https://www.myinstants.com/instant/pokemon-recovery-sound-70928/?utm_source=copy&utm_medium=share
    //full pokemon center sound
    // https://www.myinstants.com/instant/pokemon-rby-healing-sound-25604/?utm_source=copy&utm_medium=share

    //pokemon collision
    // https://www.myinstants.com/instant/pokemon-collision-sound-effect/?utm_source=copy&utm_medium=share

    //pokemon battle
    // https://www.myinstants.com/instant/pokemon-battle/?utm_source=copy&utm_medium=share

    //charizard and pikachu burning and zapping
    // https://giphy.com/gifs/pokemon-pikachu-fighting-HZpCCbcWc0a3u

    