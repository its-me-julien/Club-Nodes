function showprojects(){
    $("#projects_container").css("display","inherit");
    $("#projects_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideInDown");
    },800);
}
function closeprojects(){
    $("#projects_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideOutUp");
        $("#projects_container").css("display","none");
    },800);
}
function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
    },1000);
},1500);


document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
  
    dropdownBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownContent.classList.toggle('show');
  
      // Update ARIA attribute for accessibility
      const expanded = dropdownBtn.getAttribute('aria-expanded') === 'true';
      dropdownBtn.setAttribute('aria-expanded', !expanded);
    });
  
    // Close dropdown if clicking outside
    document.addEventListener('click', function (e) {
      if (!dropdownContent.contains(e.target) && !dropdownBtn.contains(e.target)) {
        dropdownContent.classList.remove('show');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });