// Slider main container
  var swiper = new Swiper(".swiper", {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
        // Lấy tất cả thẻ trong container
        const tabs = document.querySelectorAll('div[id^="tab"]');
        const content = document.getElementById("tab-content");
        tabs.forEach((tab) => {
          tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));

            tab.classList.add("active");
            console.log(tab.id);
            if (tab.id === "tab1") {
              content.textContent = "Solid UI with Solid Features.";
            } else if (tab.id === "tab2") {
              content.textContent =
                "Pages and UI Components You Need for a SaaS.";
            } else {
              content.textContent = "Functional Blog, DB, Auth and Many More";
            }
          });
        });
// Navbar
  const navbar = document.getElementById("navbar");
        window.addEventListener("scroll", () => {
          if (window.scrollY > 0) {
            navbar.classList.add("border-b", "border-gray-200", "shadow-md");
          } else {
            navbar.classList.remove("border-b", "border-gray-200", "shadow-md");
          }
        });
// Back To Top
(function(){
    // Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
		offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		scrollDuration = 700,
		scrolling = false;

	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});

		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();