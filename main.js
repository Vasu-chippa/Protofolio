
// On Click hand emoji will take you to the top of the page
// document.getElementById('top-button').addEventListener('click',function(){
//     window.scrollTo(0,0);
// });

// $(window).scroll(function(){
//   var threshold = 208; // number of pixels before bottom of page that you want to start fading
//   var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
//   if( op <= 13 ){
//     $("#top-button").show();
//   } else {
//     $("#top-button").hide();
//   }
// });


const body=document.getElementById('body')

function dark() {
    body.style.background="black"
    body.style.color="white"
    console.log("Vasu18")
}
function white() {
    body.style.background="white"
    body.style.color="black"
}





// const dark=document.getElementById('dark')
// const white=document.getElementById('white');
// const body_bg =document.getElementById('body-bg');

// body_bg.addEventListener("click",() => {
//     body_bg.style.background="black"
//     body_bg.style.color="white"
// });

// function dark() {
//     body_bg.style.background="black"
//     body_bg.style.color="white"
//     body_bg.log("vasu18")
// }
// function white() {
//     body_bg.style.background="white"
//     body_bg.style.color="black"
// }


// // Toggle between DAy and Night Mode
// $('#switch1').on('click', function(){
//   $('body').toggleClass('night')
// })


// If user visit after 7 pm in night the body will change the style to night class
// $(document).ready(function(){
//   var date = new Date();
//   var current_time = date.getHours();
//   if (current_time > 19 || current_time < 6)
//     // If time is after 7PM or before 6AM, apply night theme to ‘body’
//     document.body.className = "night";
//   else
//     // Else use ‘day’ theme
//     document.body.className = "";
// });

// $(window).load(function() {
//       $("#top-button").hide();
// });


// // If you hover over the languages I used in project Box it will do fade in animation
// $('.project_used span').on({
//     mouseover: function() {
//         event.preventDefault();
//         $(this).animate({opacity: 0.25});
//     },
//     mouseout: function() {
//         event.preventDefault();
//         $(this).animate({opacity: 1});
//     }
// });


