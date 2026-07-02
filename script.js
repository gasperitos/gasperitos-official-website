  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  navToggle.addEventListener('click', function(){
    var isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('.nav-links a').forEach(function(link){
    link.addEventListener('click', function(){
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  var revealTargets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(function(t){ io.observe(t); });
  } else {
    revealTargets.forEach(function(t){ t.classList.add('revealed'); });
  }
