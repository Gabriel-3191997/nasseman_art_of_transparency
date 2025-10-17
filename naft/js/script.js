(function($){
  // Put your actual public/images filenames here (avoid spaces or rename files).
  const slides = [
    "/images/WhatsApp Image 2025-10-13 at 8.14.08 PM (2).jpeg",
    "/images/514502651_18365812969196814_8888835078465199744_n (1).jpeg",
    "/images/slide3.jpg"
  ];

  const $img = $('#hero-slide');
  if (!$img.length) {
    console.warn('hero-slideshow: #hero-slide not found in DOM.');
    return;
  }

  // filter and encode existing-looking slide paths
  const safeSlides = slides
    .filter(Boolean)
    .map(s => encodeURI(s));

  if (!safeSlides.length) {
    console.warn('hero-slideshow: no slides configured.');
    return;
  }

  // preload
  safeSlides.forEach(s => { const i = new Image(); i.src = s; });

  let idx = 0;
  const intervalMs = 4000;
  let slideInterval = null;

  function showSlide(i){
    $img.stop(true, true).fadeOut(400, function(){
      $img.attr('src', safeSlides[i]).fadeIn(400);
    });
  }

  function nextSlide(){
    idx = (idx + 1) % safeSlides.length;
    showSlide(idx);
  }

  $(function(){
    // set initial slide
    $img.attr('src', safeSlides[0]);

    // start slideshow
    slideInterval = setInterval(nextSlide, intervalMs);

    // pause/resume on hover (mobile won't trigger hover)
    $img.on('mouseenter', function(){
      if (slideInterval) { clearInterval(slideInterval); slideInterval = null; }
    }).on('mouseleave', function(){
      if (!slideInterval) slideInterval = setInterval(nextSlide, intervalMs);
    });

    // helpful debug info
    console.log('hero-slideshow started, slides:', safeSlides);
  });
})(jQuery);