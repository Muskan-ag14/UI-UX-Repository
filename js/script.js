$(document).ready(function () {
  /*
------ CARD ON DESKTOP ------
*/
  $('.show-card').click(function () {
    // Display on desktop as card
    $('.outer-col').removeClass('slds-large-size--1-of-1');
    $('.outer-col').addClass('slds-large-size--3-of-12');

    $('.outer-col > div > div').removeClass(function (index, css) {
      return (css.match(/(^|\s)slds-large\S+/g) || []).join(' ');
    });
    $('.outer-col > div > div').addClass('slds-large-size--1-of-1');

    $('.text_align-left').removeClass('text_align-left');
    $('.desktop-display_none').removeClass('desktop-display_none');
    $('.slds-show_large')
      .addClass('slds-hide_large')
      .removeClass('slds-show_large');

    //Headshot Size Change
    $('.headshot').width(128).height(128);
    //Set Spacing
    $('.m-top-20').attr('style', 'margin-top: 1.25rem !important');
    $('.m-top-10').attr('style', 'margin-top: 1rem !important');
    // Add border to top
    $('.border-top').attr('style', 'border-top: 1px solid #dddbda !important');

    //Remove bottom border
    $('.card-outer_style').attr('style', 'border-bottom: none !important');

    // change container style
    var currentStyle = $('.container').attr('style') || '';
    $('.container ').attr(
      'style',
      currentStyle +
        'background: #fcfcfc !important; box-shadow: none!important'
    );
    // change card style
    $('.card-outer_style').attr(
      'style',
      'box-shadow: 2px 2px 30px 2px rgba(0, 0, 0, 0.08); padding-top: 10px !important;'
    );

    // change color and bgcolor of icons
    $(this).css('background', 'rgb(0, 160, 255)');
    $(this).find('svg').addClass('icon-fill_white');
    $('.show-table').css('background', 'rgb(255, 255, 255)');
    $('.show-table').find('svg').removeClass('icon-fill_white');
  });

  /*
------ TABLE ON DESKTOP ------
*/
  $('.show-table').click(function () {
    location.reload();
  });

  /*
------ SIDEBAR DROPDOWN ------
*/
  $('.sidebar-dropdown > a').click(function () {
    var width =
      window.innerWidth > 0
        ? window.innerWidth
        : document.documentElement.clientWidth;
    if (width < 1024) {
      $('.sidebar-submenu').slideUp(200);
      if ($(this).parent().hasClass('active')) {
        $('.sidebar-dropdown').removeClass('active');
        $(this).parent().removeClass('active');
        $(this).find('.sidebar-icon_rotate').css('transform', 'rotate(0deg)');
      } else {
        $('.sidebar-dropdown').removeClass('active');
        $(this).next('.sidebar-submenu').slideDown(200);
        $(this).parent().addClass('active');
        $(this).find('.sidebar-icon_rotate').css('transform', 'rotate(90deg)');
      }
    }
  });
  /*
------ HAMBURGUR MENU TOGGLE ------
*/
  var sidebar = $('.sidebar-nav'),
    sidebarTrigger = $('.cd-nav-trigger');
  sidebarTrigger.on('click', function (event) {
    event.preventDefault();
    $([sidebar, sidebarTrigger]).toggleClass('nav-is-visible');
  });
});
