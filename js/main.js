(function ($) {
    "use strict";

    // Spinner
    const spinner = () => {
        setTimeout(() => {
            $('#spinner').length && $('#spinner').removeClass('show');
        }, 1);
    };
    spinner();

    // Initialize WOW.js
    const wow = new WOW();
    wow.init();
    document.addEventListener('DOMContentLoaded', () => {
        wow.sync();
    });

    // Back to top button
    $(window).scroll(function () {
        $(this).scrollTop() > 300
            ? $('.back-to-top').fadeIn('slow')
            : $('.back-to-top').fadeOut('slow');
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Modal Video
    $(document).ready(function () {
        let videoSrc;

        $('.btn-play').click(function () {
            videoSrc = $(this).data("src");
        });

        $('#videoModal').on('shown.bs.modal', function () {
            $("#video").attr('src', `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`);
        });

        $('#videoModal').on('hide.bs.modal', function () {
            $("#video").attr('src', videoSrc);
        });

        // Facts Counter
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });

        // Testimonial Carousels
        $(".testimonial-carousel-1").owlCarousel({ loop: true, dots: false, margin: 25, autoplay: true, slideTransition: 'linear', autoplayTimeout: 0, autoplaySpeed: 10000, autoplayHoverPause: false, responsive: { 0: { items: 1 }, 575: { items: 1 }, 767: { items: 2 }, 991: { items: 3 } } });
        $(".testimonial-carousel-2").owlCarousel({ loop: true, dots: false, rtl: true, margin: 25, autoplay: true, slideTransition: 'linear', autoplayTimeout: 0, autoplaySpeed: 10000, autoplayHoverPause: false, responsive: { 0: { items: 1 }, 575: { items: 1 }, 767: { items: 2 }, 991: { items: 3 } } });

        // WhatsApp Form Integration
        const form = $('.form');
        const submitButton = form.find('button[type="submit"]');

        submitButton.on('click', function (event) {
            event.preventDefault();

            const fullName = form.find('input[name="fullName"]').val();
            const contactNo = form.find('input[name="mobile"]').val();
            const date = form.find('input[name="date"]').val();
            const email = form.find('input[name="email"]').val();

            // Basic validation
            if (!fullName || !contactNo || !date || !email) {
                alert("Please fill in all required fields (Full Name, Contact Number, Date, and Email)");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address");
                return;
            }

            // Get dropdown selections - Using IDs for reliability
            const country = $('#countrySelect').val();
            const city = $('#citySelect').val();
            const place = $('#placeSelect').val();
            const eventType = $('#eventTypeSelect').val();
            const guestCount = $('#guestCountSelect').val();
            const foodType = $('#foodTypeSelect').val();

            // Check for default dropdown values - Using values directly
            if (
                country === "Select Country" ||
                city === "Select City" ||
                place === "Select Place" ||
                eventType === "Event Type" ||
                guestCount === "No. Of People" ||
                foodType === "Vegetarian"
            ) {
                alert("Please select options from all dropdown menus");
                return;
            }

            // Format WhatsApp message
            let message = `*New Catering Booking Request*\n\n`;
            message += `Full Name: ${fullName}\n`;
            message += `Country: ${country}\n`;
            message += `City: ${city}\n`;
            message += `Place: ${place}\n`;
            message += `Event Type: ${eventType}\n`;
            message += `Number of Guests: ${guestCount}\n`;
            message += `Food Preference: ${foodType}\n`;
            message += `Contact Number: ${contactNo}\n`;
            message += `Event Date: ${date}\n`;
            message += `Email: ${email}`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappNumber = '2349048239391'; // Replace with your actual number
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.location.href = whatsappURL;
        });
    });

})(jQuery);