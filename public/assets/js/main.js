$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter')
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


/////////////////////

let $btnss = $('.project-area .button-group button');


$btnss.click(function (e) {

    $('.project-area .button-group button  ').removeClass('active');
    e.target.classList.add('active');

    let selectors = $((e.target).attr('data-filter'))
    $('.project-area .grid ').isotope({
        filter: selectors
    });

    return false;
})




    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    
 
    $(document).ready(function(){
    $(window).scroll(function () {
       if ($(this).scrollTop() > 10) {
           $('#back-to-top').fadeIn();
       } else {
           $('#back-to-top').fadeOut();
       }
   });
   // scroll body to 0px on click
   $('#back-to-top').click(function () {
       $('body,html').animate({
           scrollTop: 0
       }, 400);
       return false;
   });
});

function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 10){
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 140){
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
    }

  
});