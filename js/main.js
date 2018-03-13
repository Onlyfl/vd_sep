

	$(document).on('click','.closfon , .close_popup', function() {

        $('.wrapper_filter').fadeOut('slow');
		$('#form1 .form_main').removeAttr("style");
		

    });
	
	$(document).on('click','.form_button_primary span', function() {

        $('#form1').fadeIn('slow');

    });
	
	$(document).on('click','.product_drawing_img_wrapp img', function() {

        $('#popup_img').fadeIn('slow');
		var img_popup = $(this).attr('src');
		 $('.popup_img_modal img').attr('src',img_popup);

    });
	
	$(document).on('click','.form_button_primary.bottom', function() {
		var coor =  $('.form_button_primary.bottom').position();
		$('#form1 .form_main').css("top", coor.top-500);
        $('#form1').fadeIn('slow');

    });
	
	$(document).on('click','.additional_information', function() {
			$('.additional_information').addClass('opened');
			  $('.form_main_short_form_wrapp2').show();
    });
	
	
	
	
	
	



	
	
	

	
	