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
    });

    // Facts Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Testimonial Carousels
    $(".testimonial-carousel-1").owlCarousel({ loop: true, dots: false, margin: 25, autoplay: true, slideTransition: 'linear', autoplayTimeout: 0, autoplaySpeed: 10000, autoplayHoverPause: false, responsive: { 0: { items: 1 }, 575: { items: 1 }, 767: { items: 2 }, 991: { items: 3 } } });
    $(".testimonial-carousel-2").owlCarousel({ loop: true, dots: false, rtl: true, margin: 25, autoplay: true, slideTransition: 'linear', autoplayTimeout: 0, autoplaySpeed: 10000, autoplayHoverPause: false, responsive: { 0: { items: 1 }, 575: { items: 1 }, 767: { items: 2 }, 991: { items: 3 } } });

    $(document).ready(function () {
        const form = $('.form');
        const submitButton = form.find('button[type="submit"]');
        const countrySelect = $('#countrySelect');
        const citySelect = $('#citySelect');
        const placeSelect = $('#placeSelect');

        // Data for cities and places
        const cities = {
            UK: ["London", "Manchester", "Birmingham", "Liverpool", "Edinburgh", "Glasgow", "Cardiff", "Belfast"],
            Nigeria: ["Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt", "Benin City", "Kaduna", "Ilorin"],
        };

        const places = {
            London: ["Westminster", "Soho", "Shoreditch", "Kensington", "Camden Town"],
            Manchester: ["City Centre", "Salford Quays", "Didsbury", "Northern Quarter"],
            Birmingham: ["City Centre", "Jewellery Quarter", "Digbeth", "Edgbaston"],
            Liverpool: ["City Centre", "Albert Dock", "Anfield", "Baltic Triangle"],
            Edinburgh: ["Old Town", "New Town", "Leith", "Stockbridge"],
            Glasgow: ["City Centre", "West End", "South Side", "East End"],
            Cardiff: ["City Centre", "Cardiff Bay", "Pontcanna", "Roath"],
            Belfast: ["City Centre", "Titanic Quarter", "Queen's Quarter", "Cathedral Quarter"],
            Lagos: ["Ikeja", "Victoria Island", "Lekki", "Surulere", "Yaba"],
            Abuja: ["Garki", "Wuse", "Maitama", "Asokoro", "Gwarimpa"],
            Kano: ["Kano Municipal", "Fagge", "Nasarawa", "Tarauni"],
            Ibadan: ["Ibadan North", "Ibadan South-West", "Oyo East", "Akinyele"],
            "Port Harcourt": ["Port Harcourt City", "Obio-Akpor", "Eleme", "Oyigbo"],
            "Benin City": ["Egor", "Oredo", "Ikpoba-Okha", "Ovia North-East"],
            Kaduna: ["Kaduna North", "Kaduna South", "Chikun", "Igabi"],
            Ilorin: ["Ilorin West", "Ilorin East", "Asa", "Ifelodun"],
            // Add more cities and their places here
        };

        // WhatsApp numbers for different countries
        const whatsappNumbers = {
            UK: "447584031408", // Replace with your UK WhatsApp number
            Nigeria: "2349068910115" // Your Nigerian WhatsApp number
        };

        // Function to populate dropdown
        function populateDropdown(selectElement, options) {
            selectElement.empty().append('<option value="">Select ' + selectElement.attr('aria-label') + '</option>');
            options.forEach(option => {
                selectElement.append(`<option value="${option}">${option}</option>`);
            });
        }

        // Event listener for country change
        countrySelect.on('change', function () {
            const selectedCountry = $(this).val();
            citySelect.prop('disabled', selectedCountry === '');
            placeSelect.prop('disabled', true);
            placeSelect.empty().append('<option value="">Select Place</option>');

            if (selectedCountry) {
                populateDropdown(citySelect, cities[selectedCountry] || []);
            } else {
                citySelect.empty().append('<option value="">Select City</option>').append('<option value="depend">Depend On Country</option>');
            }
        });

        // Event listener for city change
        citySelect.on('change', function () {
            const selectedCity = $(this).val();
            placeSelect.prop('disabled', selectedCity === '');

            if (selectedCity) {
                populateDropdown(placeSelect, places[selectedCity] || []);
            } else {
                placeSelect.empty().append('<option value="">Select Place</option>').append('<option value="depend">Depend On City</option>');
            }
        });

        submitButton.on('click', function (event) {
            event.preventDefault();

            const fullName = form.find('input[name="fullName"]').val();
            const contactNo = form.find('input[name="mobile"]').val();
            const date = form.find('input[name="date"]').val();
            const email = form.find('input[name="email"]').val();
            const selectedCountry = countrySelect.val();
            const selectedCity = citySelect.val();
            const selectedPlace = placeSelect.val();
            const eventType = $('#eventTypeSelect').val();
            const guestCount = $('#guestCountSelect').val();
            const foodType = $('#foodTypeSelect').val();

            // Basic validation
            if (!fullName || !contactNo || !date || !email || !selectedCountry || selectedCountry === "" || !selectedCity || selectedCity === "" || !selectedPlace || selectedPlace === "" || !eventType || eventType === "" || !guestCount || guestCount === "" || !foodType || foodType === "") {
                alert("Please fill in all required fields and select options from all dropdown menus");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address");
                return;
            }

            // Format WhatsApp message
            let message = `*New Catering Booking Request*\n\n`;
            message += `Full Name: ${fullName}\n`;
            message += `Country: ${selectedCountry}\n`;
            message += `City: ${selectedCity}\n`;
            message += `Place: ${selectedPlace}\n`;
            message += `Event Type: ${eventType}\n`;
            message += `Number of Guests: ${guestCount}\n`;
            message += `Food Preference: ${foodType}\n`;
            message += `Contact Number: ${contactNo}\n`;
            message += `Event Date: ${date}\n`;
            message += `Email: ${email}`;

            // Select the appropriate WhatsApp number based on country
            const whatsappNumber = whatsappNumbers[selectedCountry] || whatsappNumbers.Nigeria; // Default to Nigeria number if country not found
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.location.href = whatsappURL;
        });
    });

})(jQuery);