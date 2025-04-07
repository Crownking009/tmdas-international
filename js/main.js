// (function ($) {
//     "use strict";

//     // Spinner
//     var spinner = function () {
//         setTimeout(function () {
//             if ($('#spinner').length > 0) {
//                 $('#spinner').removeClass('show');
//             }
//         }, 1);
//     };
//     spinner(0);
    
    
//     // Initiate the wowjs
//     new WOW().init();
    
    
//    // Back to top button
//    $(window).scroll(function () {
//     if ($(this).scrollTop() > 300) {
//         $('.back-to-top').fadeIn('slow');
//     } else {
//         $('.back-to-top').fadeOut('slow');
//     }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//         return false;
//     });


//     // Modal Video
//     $(document).ready(function () {
//         var $videoSrc;
//         $('.btn-play').click(function () {
//             $videoSrc = $(this).data("src");
//         });
//         console.log($videoSrc);

//         $('#videoModal').on('shown.bs.modal', function (e) {
//             $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
//         })

//         $('#videoModal').on('hide.bs.modal', function (e) {
//             $("#video").attr('src', $videoSrc);
//         })
//     });


//     // Facts counter
//     $('[data-toggle="counter-up"]').counterUp({
//         delay: 10,
//         time: 2000
//     });


//     // Testimonial carousel
//     $(".testimonial-carousel-1").owlCarousel({
//         loop: true,
//         dots: false,
//         margin: 25,
//         autoplay: true,
//         slideTransition: 'linear',
//         autoplayTimeout: 0,
//         autoplaySpeed: 10000,
//         autoplayHoverPause: false,
//         responsive: {
//             0:{
//                 items:1
//             },
//             575:{
//                 items:1
//             },
//             767:{
//                 items:2
//             },
//             991:{
//                 items:3
//             }
//         }
//     });

//     $(".testimonial-carousel-2").owlCarousel({
//         loop: true,
//         dots: false,
//         rtl: true,
//         margin: 25,
//         autoplay: true,
//         slideTransition: 'linear',
//         autoplayTimeout: 0,
//         autoplaySpeed: 10000,
//         autoplayHoverPause: false,
//         responsive: {
//             0:{
//                 items:1
//             },
//             575:{
//                 items:1
//             },
//             767:{
//                 items:2
//             },
//             991:{
//                 items:3
//             }
//         }
//     });







// // Add this JavaScript code to your website

// document.addEventListener('DOMContentLoaded', function() {
//     // Get your booking form - selecting the form class since there's no ID in your HTML
//     const form = document.querySelector('.form');
    
//     // Add submit event listener to the Submit Now button
//     const submitButton = form.querySelector('button[type="submit"]');
//     submitButton.addEventListener('click', function(event) {
//       // Prevent the default form submission
//       event.preventDefault();
      
//       // Get form values from your form
//       const country = form.querySelector('select:nth-of-type(1)').options[form.querySelector('select:nth-of-type(1)').selectedIndex].text;
//       const city = form.querySelector('select:nth-of-type(2)').options[form.querySelector('select:nth-of-type(2)').selectedIndex].text;
//       const place = form.querySelector('select:nth-of-type(3)').options[form.querySelector('select:nth-of-type(3)').selectedIndex].text;
//       const eventType = form.querySelector('select:nth-of-type(4)').options[form.querySelector('select:nth-of-type(4)').selectedIndex].text;
//       const guestCount = form.querySelector('select:nth-of-type(5)').options[form.querySelector('select:nth-of-type(5)').selectedIndex].text;
//       const foodType = form.querySelector('select:nth-of-type(6)').options[form.querySelector('select:nth-of-type(6)').selectedIndex].text;
//       const contactNo = form.querySelector('input[type="mobile"]').value;
//       const date = form.querySelector('input[type="date"]').value;
//       const email = form.querySelector('input[type="email"]').value;
      
//       // Format the message for WhatsApp
//       let message = `*New Catering Booking Request*\n\n`;
//       message += `Country: ${country}\n`;
//       message += `City: ${city}\n`;
//       message += `Place: ${place}\n`;
//       message += `Event Type: ${eventType}\n`;
//       message += `Number of Guests: ${guestCount}\n`;
//       message += `Food Preference: ${foodType}\n`;
//       message += `Contact Number: ${contactNo}\n`;
//       message += `Event Date: ${date}\n`;
//       message += `Email: ${email}`;
      
//       // Encode the message for URL
//       const encodedMessage = encodeURIComponent(message);
      
//       // Replace with your actual WhatsApp number with country code (no + or spaces)
//       const whatsappNumber = '1234567890'; // REPLACE THIS WITH YOUR ACTUAL NUMBER
      
//       // Create WhatsApp URL
//       const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
//       // Redirect to WhatsApp
//       window.location.href = whatsappURL;
//     });
//   });


    

// })(jQuery);








(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    // Initiate the wowjs
    new WOW().init();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Testimonial carousel
    $(".testimonial-carousel-1").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-2").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    // WhatsApp Form Integration - using jQuery for consistency
    $(document).ready(function() {
        const form = $('.form');
        const submitButton = form.find('button[type="submit"]');
        
        submitButton.on('click', function(event) {
            event.preventDefault();
            
            // Basic validation
            const contactNo = form.find('input[type="mobile"]').val();
            const date = form.find('input[type="date"]').val();
            const email = form.find('input[type="email"]').val();
            
            // Simple validation
            if (!contactNo || !date || !email) {
                alert("Please fill in all required fields (Contact Number, Date, and Email)");
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address");
                return;
            }
            
            // Get form values
            const country = form.find('select:nth-of-type(1) option:selected').text();
            const city = form.find('select:nth-of-type(2) option:selected').text();
            const place = form.find('select:nth-of-type(3) option:selected').text();
            const eventType = form.find('select:nth-of-type(4) option:selected').text();
            const guestCount = form.find('select:nth-of-type(5) option:selected').text();
            const foodType = form.find('select:nth-of-type(6) option:selected').text();
            
            // Check if default options are selected
            if (country === "Select Country" || city === "Select City" || place === "Select Palace" || 
                eventType === "Small Event" || guestCount === "No. Of Palace" || foodType === "Vegetarian") {
                alert("Please select options from all dropdown menus");
                return;
            }
            
            // Format the message for WhatsApp
            let message = `*New Catering Booking Request*\n\n`;
            message += `Country: ${country}\n`;
            message += `City: ${city}\n`;
            message += `Place: ${place}\n`;
            message += `Event Type: ${eventType}\n`;
            message += `Number of Guests: ${guestCount}\n`;
            message += `Food Preference: ${foodType}\n`;
            message += `Contact Number: ${contactNo}\n`;
            message += `Event Date: ${date}\n`;
            message += `Email: ${email}`;
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);
            
            // YOUR WHATSAPP NUMBER - Replace with your actual number including country code (no + or spaces)
            const whatsappNumber = '2349048239391'; // REPLACE THIS WITH YOUR ACTUAL NUMBER
            
            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Redirect to WhatsApp
            window.location.href = whatsappURL;
        });
    });

})(jQuery);
