// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$.getJSON('https://dashboard-control.herokuapp.com/baby', function(data) {
    alert('загрузил');
});

  var schedule = [
    {
      link: "https://rocketbank.ru/",
      type: "webpage",
      time: 10
    },
    {
      link: "http://rocketscreen.herokuapp.com/",
      type: "webpage",
      time: 10
    },
    {
      link: "https://www.youtube.com/embed/OP4XCzh0WOY?enablejsapi=1",
      type: "youtube",
      time: 2
    }
  ]

  var step = 0;
  var player;

  window.onload = function(){
    window.iframeCool = document.getElementById('existing-iframe-example');
    executeSlide(schedule[step]);
  }


  function executeSlide(slide){
    if (slide.type == "webpage") {
      iframeCool.setAttribute('src',slide.link);
      setTimeout(nextSlide, slide.time*1000);
    }else if (slide.type == "youtube"){
      iframeCool.setAttribute('src',slide.link);

      window.tag = document.createElement('script');
      tag.id = 'iframe-demo';
      tag.src = 'https://www.youtube.com/iframe_api';
      window.firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }

  function nextSlide(){
    if (step == schedule.length - 1){
      step = 0
    } else {
      step = step + 1
    }
    executeSlide(schedule[step]);
  }




  function onYouTubeIframeAPIReady() {
    player = new YT.Player('existing-iframe-example', {
        playervars:{
          'hd':1
        },
        events: {
          'onReady': onPlayerReady,
          // 'onStateChange': onPlayerStateChange
        }
    });
  }

  function onPlayerReady(event) {
    console.log("выполняю функцию onPlayerReady")

    player.playVideo();

    int1 = setInterval(function(){
      if (player.getPlayerState() == 0){
        removeScripts();
        nextSlide();
        clearInterval(int1);
      }
    },10);
  }

  function removeScripts(){
    var scripts = document.getElementsByTagName('script');
    console.log("у нас ",scripts.length,"скриптов");
    while (scripts.length > 1){
      var parent = scripts[0].parentNode;
      parent.removeChild(scripts[0]);
    }
  }



  function onPlayerStateChange(event) {
    console.log(event.data);
    console.log('я тут поменял состояние');
    if (event.data == 0)
      {
        removeScripts();
        nextSlide();
      }
  }
// }
