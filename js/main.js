/// <reference types="../@types/jquery"/>
new WOW().init();

{/* <><><><><><><><><><><><><><><><><><><><><><> */}
$('#openBtn').on('click',()=>{
    $("main").animate({marginLeft :'35%'},1000)
    $('#openBtn').fadeOut(100)
    $("aside").animate({ width:'35%'},1000,()=>{
        $('aside .container').removeClass('d-none')
    })
})

$(window).on('scroll',function(){
    let offset=$('#aDetails').offset().top
    let scrollTop=$(window).scrollTop()
    if(scrollTop>offset){
    $('#openBtn').css({color:'black'})
    }else{
    $('#openBtn').css({color:'white'})
    }
})

$('#closeBtn').on('click',()=>{
    $("main").animate({marginLeft :'0%'},1000)
    $("aside").animate({ width:'0%'},1000,()=>{
        $('aside .container').addClass('d-none')
        $('#openBtn').fadeIn(700)
    })
})


{/* <><><><><><><><><><><><><><><><><><><><><><> */}
$('aside a').on('click',function(e){
    let targetHref=e.target.getAttribute('href')
    // console.log(targetHref);
    let offset=$(targetHref).offset().top
    // console.log(offset);
    $('html').animate({scrollTop:offset},500)
    $(this).css({color:'rgba(214, 46, 51, 1)'}).siblings().css({color:'white'})
})
{/* <><><><><><><><><><><><><><><><><><><><><><> */}


{/* <><><><><><><><><><><><><><><><><><><><><><> */}
$('.slide').on('click',function(){
        $('p',this).slideToggle(700)
        $('p').not($('p',this)).slideUp(700)
})
{/* <><><><><><><><><><><><><><><><><><><><><><> */}


{/* <><><><><><><><><><><><><><><><><><><><><><> */}
function count(){
    let targetDate = new Date("January 25, 2025 23:59:59").getTime();

    let countdown = setInterval(function() {
        let now = new Date().getTime();
        let difference = targetDate - now;
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        let cartona=``;
        
        cartona+=`
        <div class="col-lg-3 col-md-6 col-sm-12 p-5">${days} D</div>
        <div class="col-lg-3 col-md-6 col-sm-12 p-5">${hours} H</div>
        <div class="col-lg-3 col-md-6 col-sm-12 p-5">${minutes} M</div>
        <div class="col-lg-3 col-md-6 col-sm-12 p-5">${seconds} S</div>
        `
        document.getElementById('demo').innerHTML= cartona
        
        if (difference < 0) {
            clearInterval(countdown);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
 }
 count()
{/* <><><><><><><><><><><><><><><><><><><><><><> */}

let maxChars=100
document.getElementById('countOfChars').innerHTML=maxChars
$('textarea').on('keyup',function(){
    let amount=maxChars-$(this).val().length
    // console.log(amount);
    if(amount==0){
        document.getElementById('countOfChars').innerHTML=amount
        document.getElementById('textarea').disabled=true
        $('#completedChars').slideDown(500)
    }else{
        document.getElementById('countOfChars').innerHTML=amount
    }
    
})
{/* <><><><><><><><><><><><><><><><><><><><><><> */}


$(function(){
    $('.loader').fadeOut(1000,()=>{
        $('#loadScreen').fadeOut(1000)
    })
})



