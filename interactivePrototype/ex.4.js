$(document).ready(function() {
  console.log("ready");

  $('#img1').hover(function() {
    $(this).attr('src', 'images/keys_color.png').animate({
    opacity:1,
    });

  }, function() {
 $(this).attr('src','images/keys_b_w.png').animate({
      opacity:.5,
    });
    })
  
    $('#img2').hover(function() {
    $(this).attr('src', 'images/phone_color.png').animate({
    opacity:1,
    });

  }, function() {
 $(this).attr('src','images/phone_b_w.png').animate({
      opacity:.5,
    });
    })
    
    
    
   $('#img3').hover(function() {
    $(this).attr('src', 'images/ring_color.png').animate({
    opacity:1,
    });

  }, function() {
 $(this).attr('src','images/ring_b_w.png').animate({
      opacity:.5,
    });
    })



   $('#img4').hover(function() {
    $(this).attr('src', 'images/usb_color.png').animate({
    opacity:1,
    });

  }, function() {
 $(this).attr('src','images/usb_b_w.png').animate({
      opacity:.5,
    });
    })


   $('#img5').hover(function() {
    $(this).attr('src', 'images/pen_color.png').animate({
    opacity:1,
    });

  }, function() {
 $(this).attr('src','images/pen_b_w.png').animate({
      opacity:.5,
    });
    })

  
  
  
  
  });

 