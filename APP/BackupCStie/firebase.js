$(function() {

  var element1 = new Firebase('http://communal.firebaseIO.com/element1');
  var element2= new Firebase('http://communal.firebaseIO.com/element2');
  var element3 = new Firebase('http://communal.firebaseIO.com/element3');
  var element4 = new Firebase('http://communal.firebaseIO.com/element4');
  var element5 = new Firebase('http://communal.firebaseIO.com/element5');
  var element6 = new Firebase('http://communal.firebaseIO.com/element6');
 	
  element1.once('value', function(data) {
    position = data.val();
    $( "#draggable1" ).css("left", position.left);
    $( "#draggable1" ).css("top", position.top);
  });


    $( "#draggable1" ).draggable({
      drag: function() {
        element1.set({left:$( "#draggable1" ).position().left,top:$( "#draggable1" ).position().top});
      }
    });

    element1.on('value', function(data){
      positionset = data.val();
      $( "#draggable1" ).css({position:"absolute",left: positionset.left,top:positionset.top});
      
    });

  
  

  element2.once('value', function(data) {
    position = data.val();
    $( "#draggable2" ).css("left", position.left);
    $( "#draggable2" ).css("top", position.top);
  });


    $( "#draggable2" ).draggable({
      drag: function() {
        element2.set({left:$( "#draggable2" ).position().left,top:$( "#draggable2" ).position().top});
      }
    });

    element2.on('value', function(data){
      positionset = data.val();
      $( "#draggable2" ).css({position:"absolute",left: positionset.left,top:positionset.top});
      
    });

  
  

  element3.once('value', function(data) {
    position = data.val();
    $( "#draggable3" ).css("left", position.left);
    $( "#draggable3" ).css("top", position.top);
  });


    $( "#draggable3" ).draggable({
      drag: function() {
        element3.set({left:$( "#draggable3" ).position().left,top:$( "#draggable3" ).position().top});
      }
    });

    element3.on('value', function(data){
      positionset = data.val();
      $( "#draggable3" ).css({position:"absolute",left: positionset.left,top:positionset.top});
      
    });

  
  

  element4.once('value', function(data) {
    position = data.val();
    $( "#draggable4" ).css("left", position.left);
    $( "#draggable4" ).css("top", position.top);
  });


    $( "#draggable4" ).draggable({
      drag: function() {
        element4.set({left:$( "#draggable4" ).position().left,top:$( "#draggable4" ).position().top});
      }
    });

    element4.on('value', function(data){
      positionset = data.val();
      $( "#draggable4" ).css({position:"absolute",left: positionset.left,top:positionset.top});
      
    });

  
  

  element5.once('value', function(data) {
    position = data.val();
    $( "#draggable5" ).css("left", position.left);
    $( "#draggable5" ).css("top", position.top);
  });


    $( "#draggable5" ).draggable({
      drag: function() {
        element5.set({left:$( "#draggable5" ).position().left,top:$( "#draggable5" ).position().top});
      }
    });

    element5.on('value', function(data){
      positionset = data.val();
      $( "#draggable5" ).css({position:"absolute",left: positionset.left,top:positionset.top});
      
    });

  
  

	element6.once('value', function(data) {
 		position = data.val();
	  $( "#draggable6" ).css("left", position.left);
	  $( "#draggable6" ).css("top", position.top);
	});


    $( "#draggable6" ).draggable({
      drag: function() {
      	element6.set({left:$( "#draggable6" ).position().left,top:$( "#draggable6" ).position().top});
      }
    });

    element6.on('value', function(data){
    	positionset = data.val();
    	$( "#draggable6" ).css({position:"absolute",left: positionset.left,top:positionset.top});
	    
    });

	
  });

