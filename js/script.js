/*
------ VIEWPORT'S WIDTH ------
*/
function getWidth() {
  return window.innerWidth > 0
    ? window.innerWidth
    : document.documentElement.clientWidth;
}
var show_card = false;
var flag = '1';

$(document).ready(function () {
  /*
------ CARD ON DESKTOP ------
*/
  $('.show-card').click(function () {
    show_card = true;
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
    show_card = false;
    location.reload();
  });

  /*
------ SIDEBAR DROPDOWN ------
*/
  $('.sidebar-dropdown > a').click(function () {
    var width = getWidth();
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

$(window).resize(function () {
  var width = getWidth();
  // console.log(flag !== '2');
  if (width < 1000) {
  } else if (width < 1024) {
    // console.log('here');
    location.reload();
    // flag = '2';
  } else if (width < 1150 && show_card === true) {
    $('.outer-col').removeClass('slds-large-size--3-of-12');
    $('.outer-col').addClass('slds-large-size--4-of-12');
  }
});

// fetch data
fetch('https://reqres.in/api/users?page=2')
  .then((res) => res.json())
  .then((res) => {
    res.data.map((user, i) => {
      $('#content-div').append(
        '<div class="outer-col slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size--1-of-1 slds-p-around--medium"><div class="slds-card slds-grid slds-wrap slds-grid--vertical-align-center slds-p-around--medium card-outer_style"><div class="slds-col slds-size_1-of-1 slds-large-size--1-of-12 slds-align_absolute-center headshot-size slds-order_2 slds-large-order--1"><span><img id="img6" class="headshot" src="' +
          user.avatar +
          '"/></span></div><div class="slds-col slds-size_1-of-1 slds-large-size--3-of-12 slds-align_absolute-center slds-order_3 slds-large-order--2 text_align-left"><span id="name6" class="font-size m-top-20">' +
          user.first_name +
          ' ' +
          user.last_name +
          '</span></div><div class="slds-col slds-size_1-of-1 slds-align_absolute-center desktop-display_none slds-order_4 slds-large-order--2"><span id="email6" class="color-light">' +
          user.email +
          '</span></div><div class="slds-col slds-size_1-of-1 slds-align_absolute-center desktop-display_none slds-order_4 slds-large-order--3"><span class="color-light m-top-20">Total Contributions</span></div><div class="slds-col slds-size_1-of-1 slds-large-size--2-of-12 slds-align_absolute-center slds-show_large slds-order_5 slds-large-order--4 text_align-left"><span class="font-size">$ 821,243</span></div><div class="slds-col slds-size_1-of-1 slds-large-size--2-of-12 slds-align_absolute-center slds-show_large slds-order_5 slds-large-order--5 text_align-left"><span class="font-size">$ 821,243</span></div><div class="slds-col slds-size_1-of-1 slds-large-size--2-of-12 slds-align_absolute-center slds-order_5 slds-large-order--6 text_align-left"><span class="font-size">$ 821,243</span></div><div class="slds-col slds-size_1-of-1 slds-large-size--1-of-12 slds-text-align--center color-lightblue slds-order_6 slds-large-order--7 border-top m-top-20 font-size text_align-left"><p class="m-top-10"><span class="slds-icon_container slds-icon-utility-announcement slds-show_large" title="Description of icon when needed"><svg class="slds-icon slds-icon-text-default slds-icon--x-small icon_style" aria-hidden="true"><use xlink:href="../salesforce-lightning-design-system-2.13.7/assets/icons/utility-sprite/svg/symbols.svg#open"></use></svg><span class="slds-assistive-text m-top-10">View More</span> </span>View</p></div><div class="slds-col slds-size_1-of-1 slds-large-size--1-of-12 color-lightblue slds-text-align_right slds-order_1 slds-large-order--8"><span class="slds-m-top--x-small"><span class="slds-icon_container slds-icon-utility-announcement" title="Description of icon when needed"><svg class="slds-icon slds-icon-text-default slds-icon--x-small" aria-hidden="true"><use xlink:href="../salesforce-lightning-design-system-2.13.7/assets/icons/utility-sprite/svg/symbols.svg#threedots"></use></svg><span class="slds-assistive-text">Expand</span></span></span></div></div></div>'
      );
    });
  });
