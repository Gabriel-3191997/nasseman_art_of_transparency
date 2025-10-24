  $(document).ready(function(){

    $('span#read').click(function(){

      $('span#readmore').toggle();
    });
  });

  $(document).ready(function(){

    $('div#img2').css('display','none');

    $('#seemore_btn').click(function(){

      $('#img2').toggle();
    });

  });

  $(document).ready(function(){

    $('div#img4').hide();

    $('#see_btn').click(function(){

      $('#img4').toggle();
    });

  });