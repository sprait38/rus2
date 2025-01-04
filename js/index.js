function ShowHideDiv(chkPassport) {
  var dvPassport = document.getElementById("dvPassport");
dvPassport.style.display = chkPassport.checked ? "block" : "none";
}

function ShowDiv(chkPassport_2) {
  var dvPassport_2 = document.getElementById("dvPassport_2");
dvPassport_2.style.display = chkPassport_2.checked ? "block" : "none";
}

function Show(chkPassport_3) {
  var dvPassport_3 = document.getElementById("dvPassport_3");
dvPassport_3.style.display = chkPassport_3.checked ? "block" : "none";
}

function Show2(chkPassport_4) {
  var dvPassport_4 = document.getElementById("dvPassport_4");
dvPassport_4.style.display = chkPassport_4.checked ? "block" : "none";
}

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {

  autoPlay: true,
  lazyLoad: true, 
  freeScroll: true, 
  wrapAround: true, 
  cellAlign: 'left', 
  lazyLoad: 2, 
  initialIndex: 2
});

var elem_2 = document.querySelector('.slider');
var flkty = new Flickity( elem_2, {

  autoPlay: true,
  lazyLoad: true, 
  freeScroll: true, 
  wrapAround: true,
  rightToLeft: true, 
  cellAlign: 'left', 
  lazyLoad: 2, 
  initialIndex: 2
});
