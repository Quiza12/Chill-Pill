var supportedWebsites = ['trivago', 'kayak', 'hotelscombined', 'expedia', 'booking', 'wotif'];
var currentUrl = window.location.href;
var currentWebsite;

var bookingElements = [
  'msg_low_avail_block',
  'js_sr_persuation_msg',
  'lastbooking',
  'sr_no_desc_users',
  'lastbooked-style-bold',
  'sr_item--soldout',
  'soldout_property',
  'soldout_3rd_pos',
  'ribbon',
  'js-fly-content-tooltip',
  'price scarcity_color'
];

function determineCurrentLocation(currentUrl) {
  supportedWebsites.forEach(function (website) {
    var index = 0;
    if (currentUrl.indexOf(website) >= 0) {
      currentWebsite = website;
    }
    index++;
  });
}

console.log('Chill Pill says hi.');
console.log('You are currently on: ' + currentUrl);
determineCurrentLocation(currentUrl);

switch(currentWebsite) {
    case 'trivago':
        chillOutTrivago();
        break;
    case 'kayak':
        chillOutKayak();
        break;
    case 'hotelscombined':
        chillOutHotelsCombined();
        break;
    case 'expedia':
        chillOutExpedia();
        break;
    case 'booking':
        chillOutBooking();
        break;
    case 'wotif':
        chillOutWotif();
        break;
    default:
        console.log('Cannot detect which booking site you\'re on.');
}

function chillOutBooking() {
  console.log('This is the Booking.com function.');
  bookingElements.forEach(function (element) {
    var index = 0;
    var retrievedElements = document.getElementsByClassName(element);
    if (retrievedElements.length > 0) {
      console.log(retrievedElements);
      hideElements(retrievedElements);
    }
    index++;
  });
}

function hideElements(elements) {
  //element.style.visibility = 'hidden';
  for (var i = 0; i < elements.length; ++i) {
    console.log('Hiding: ' + elements[i]);
    elements[i].style.display = 'none';
  }
}

function chillOutTrivago() {
  console.log('This is the Trivago function.');
}

function chillOutKayak() {
  console.log('This is the Kayak function.');
}

function chillOutHotelsCombined() {
  console.log('This is the HotelsCombined function.');
}

function chillOutExpedia() {
  console.log('This is the Expedia function.');
}

function chillOutWotif() {
  console.log('This is the Wotif function.');
}
