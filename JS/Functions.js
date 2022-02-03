// FUNCTIONS

//DYNAMIC MENU STATE




// NOTATION MODE - BUTTON - CLICK FUNCTION 
function notModeOn (){
    $(".thumb").css({opacity:"1"})
    $(".container").css({transform:"scale(1,1)", background:"#000"})
    $(".container>.section>.section-main>.section-text-container>.section-para>p").css({color:"#fff"})
    $(".container>.section>.section-main>.section-header").css({color:"#fff"})
    $(".container>.section>.section-main>.section-underline").css({background:"#fff"})
    $(".title").css({color:"#fff"})
    $(".author").css({color:"#fff"})
    $(".date").css({color:"#fff"})
    $(".not-mode-container").css({color:"#fff", borderColor:"#fff"})
    $(".link").css({borderWidth:"1px", padding:"1vh", fontSize:"1.5vh"})
    $(".canvas").css({opacity:"1"})
    $(".dynamic-menu").css({opacity:"0"})
    $(".container").removeClass("cursor-black")
    $(".container").addClass("cursor-white")
    $(".notation-container").css({bottom:"-51%"})
    $(".notation").css({bottom:"0%"})
    console.log("not mode on")
}

function notModeOff (){
    $(".container").css({transform:"", background:"#fff"})
    $(".thumb").css({opacity:"0"})
    $(".container>.section>.section-main>.section-text-container>.section-para>p").css({color:"#000"})
    $(".container>.section>.section-main>.section-header").css({color:"#000"})
    $(".container>.section>.section-main>.section-underline").css({background:"#000"})
    $(".title").css({color:"#000"})
    $(".author").css({color:"#000"})
    $(".date").css({color:"#000"})
    $(".not-mode-container").css({color:"#000", borderColor:"#000"})
    $(".link").css({borderWidth:"0px", padding:"0px", fontSize:""})
    $(".canvas").css({opacity:"0"})
    $(".container").addClass("cursor-black")
    $(".container").removeClass("cursor-white")
    $(".dynamic-menu").css({opacity:""})
   console.log(q, "notmodeoff")
}

function notModeToggle(){
    switch (q)
    {
        case 1:
            notModeOn()
            break;
        case 2:
            notModeOff()
            q = 0
            break;
    }
    
}




function something() 
{
   console.log("func2") 
}
function Info() 
{
   switch (InfoSwich)
   {
       case 1:
        $(".container").css({transform:"scale(1,1)", filter:"blur(6px)"})
        $(".info-container").css({top:"30%", left:"35%"})
        $(".dynamic-menu").css({opacity:"0"})
        InfoSwich++
        break; 

        case 2:
        $(".container").css({transform:"", filter:"blur(0px)"})
        $(".info-container").css({top:"100%", left:"35%"})
        $(".dynamic-menu").css({opacity:""})
        InfoSwich--
        break; 
   }
}


// SWITCHES
var allowClick = true;
var q = 1 // NOTATION MODE - BUTTON - CLICK
var n = 1 // LINKS - BUTTON - CLICK
var notMode = false
var InfoSwich = 1

// ARRAYS

var thumbsPos = []
var linksPos = []
var zArray = []
var bgArray = ["royalblue","lightsalmon", "lightseagreen", "violet", "khaki", "darkcyan", "grey", "lavender"]
var textColors = ["white","lightcoral","blue","lightgrey", "darkcyan", "white", "navy", "teal"]
var dynamicMenuSwitch = [1,2,3]
var dynamicMenuFunctions = 
[
    notModeToggle, something, Info
]
var dynamicButtons = 
    [
    dynamicButton1 = true,
    dynamicButton2 = false,
    dynamicButton3 = false
    ]
$(document).ready(function(){

    $(".container").addClass("cursor-black")

    function fadeDynamicMenu() {
        setTimeout(function(){
            $(".dynamic-menu").addClass("dynamicMenuOff") 
            $(".dynamic-menu").removeClass("dynamicMenuOn") 
            scrollAmount = scrollAmount * 0
            return scrollAmount;
        }, 2000)
    }
   
    if(q > 3)
    {
        q = q * 0
    }
    

    function DynamicMenuToggleButtons() {
        const DIVIDE_AMOUNT = 2;
        scrollAmount += event.deltaY / DIVIDE_AMOUNT;
        const dividerLimit = 20
        if (scrollAmount >= 0 && scrollAmount < dividerLimit)
        {
            scrollSwitches[0] = true
            scrollSwitches[1] = false
            scrollSwitches[2] = false
            console.log("state1")
            dynamicButtons[0] = true
            dynamicButtons[1] = false
            dynamicButtons[2] = false
            
        }
        if (scrollAmount > dividerLimit && scrollAmount <= dividerLimit * 2)
        {
            scrollSwitches[0] = false
            scrollSwitches[1] = true
            scrollSwitches[2] = false
            console.log("state2")
            dynamicButtons[0] = false
            dynamicButtons[1] = true
            dynamicButtons[2] = false
        }
        if (scrollAmount >= dividerLimit * 2)
        {
            scrollSwitches[0] = false
            scrollSwitches[1] = false
            scrollSwitches[2] = true
            console.log("state3")
            dynamicButtons[0] = false
            dynamicButtons[1] = false
            dynamicButtons[2] = true
        }
        if (scrollAmount > dividerLimit * 3) {
            scrollAmount = scrollAmount * 0
            return scrollAmount
        }
        if (scrollAmount < 0) {
            scrollAmount = dividerLimit * 3
            return scrollAmount
        }

        var strokes = document.querySelectorAll("path")
        for (let i = 0; i < scrollSwitches.length; i++) {
            if (scrollSwitches[i]) {
                $(".dynamic-menu-item").css({background:"#fff"})
                $(dynamicMenuItems[i]).css({background:"#000"})
                $(".dynamic-item-icon").css({fill:"#000"})
                $(dynamicMenuIcons[i]).css({fill:"#fff"})
            }
        }
    }

    for (let i = 0; i < dynamicButtons.length; i++) {
        document.addEventListener('click', () => {
            if (q > 3)
            {
                q = 0
            }
            if (dynamicButtons[i])
            {
                if(allowClick)
                {
                    dynamicMenuFunctions[i]()
                    q++
                    console.log("q is " + q)
                    return q;
                }
            }
        })
        
    }
// TOGGLE BETWEEN DYNAMIC MENU BUTTONS


    let scrollAmount = 0;
    var dynamicMenuItems = document.querySelectorAll(".dynamic-menu-item")
    var dynamicMenuIcons = document.querySelectorAll(".dynamic-item-icon")
    var scrollSwitches = 
        [
            scroll1 = false, scroll2 = false, scroll3 = false
        ]
    document.addEventListener('wheel', (event) => {
        DynamicMenuToggleButtons()
        });

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var XMid = windowWidth / 2;
    var YMid = windowHeight / 2;
    var currentMousePos = {x: -1, y: -1};
    var links = document.querySelectorAll(".link")
    var nots = document.querySelectorAll(".notation")
    var lines = document.querySelectorAll(".line")
    var thumbs = document.querySelectorAll(".thumb")





// LINKS CLICK FUNCTION

for (let i = 0; i < links.length; i++) {
    $(links[i]).click(function(){
        switch (n) {
            case 1:
                console.log(allowClick)
                $(".notation-container").css({bottom:"0%"})
                $(".notation").css({bottom:"-100%"})
                $(nots[i]).css({bottom:"0%"})
                $(".container").css({background:bgArray[i]})
                $(".container>.section>.section-main>.section-text-container>.section-para>p").css({color:textColors[i]})
                $(".container>.section>.section-main>.section-header").css({color:textColors[i]})
                $(".container>.section>.section-main>.section-underline").css({background:textColors[i]})
                $(".title").css({color:textColors[i]})
                $(".author").css({color:textColors[i]})
                $(".date").css({color:textColors[i]})
                $(".dynamic-menu").css({opacity:"0"})
                n++
                q = 0
                return n;
                break;
        
            case 2: 
            if (notMode)
            {
                allowClick = false
                console.log(allowClick)
                $(".notation-container").css({bottom:"-51%"})
                $(".notation").css({bottom:"0%"})
                $(".container").css({background:"#000"})
                $(".container>.section>.section-main>.section-text-container>.section-para>p").css({color:"#fff"})
                $(".container>.section>.section-main>.section-header").css({color:"#fff"})
                $(".container>.section>.section-main>.section-underline").css({background:"#fff"})
                $(".title").css({color:"#fff"})
                $(".author").css({color:"#fff"})
                $(".date").css({color:"#fff"})
                $(".dynamic-menu").css({opacity:"0"})
    
                n = 1;
                q = 0;
                return q;
                return n;
            }
            else
            {
                allowClick = true
                q = 0
                $(".notation-container").css({bottom:"-51%"})
                $(".notation").css({bottom:"0%"})
                $(".container").css({background:"#fff"})
                $(".container>.section>.section-main>.section-text-container>.section-para>p").css({color:"#000"})
                $(".container>.section>.section-main>.section-header").css({color:"#000"})
                $(".container>.section>.section-main>.section-underline").css({background:"#000"})
                $(".title").css({color:"#000"})
                $(".author").css({color:"#000"})
                $(".date").css({color:"#000"})
                $(".dynamic-menu").css({opacity:""})
    
                n = 1;
                q = 1;
                return q;
                return n;
            }
            break;

            default:

                break;
            }
    
    })
}


// MOUSELEAVE FUNCTION AND Z-INDEX - NOTATIONS


for (let i = 0; i < nots.length; i++) {
    zArray.push(20-i)
    $(nots[i]).css({zIndex:zArray[i]})
    $(nots[i]).mouseleave(function(){
        if (notMode)
        {
            allowClick = false
            $(".notation-container").css({bottom:"-51%"})
            $(".notation").css({bottom:"0%"})
            $(".container").css({background:"red"})
            $(".container>.section>.section-main>.section-text-container>.section-para>p").css({color:"#000"})
            $(".container>.section>.section-main>.section-header").css({color:"#000"})
            $(".container>.section>.section-main>.section-underline").css({background:"#000"})
            $(".title").css({color:"#000"})
            $(".author").css({color:"#000"})
            $(".date").css({color:"#000"})
            $(".dynamic-menu").css({opacity:"0"})
            n = 1;
            q = 2;
            return q;
            return n;
        }
        else
        {
            allowClick = true
            $(".notation-container").css({bottom:"-51%"})
            $(".notation").css({bottom:"0%"})
            $(".container").css({background:"#000"})
            $(".container>.section>.section-main>.section-text-container>.section-para>p").css({color:"#fff"})
            $(".container>.section>.section-main>.section-header").css({color:"#fff"})
            $(".container>.section>.section-main>.section-underline").css({background:"#fff"})
            $(".title").css({color:"#fff"})
            $(".author").css({color:"#fff"})
            $(".date").css({color:"#fff"})
            $(".dynamic-menu").css({opacity:"0"})

            n = 1;
            q = 2;
            return q;
            return n;
        }  
    })
}


// MOUSEMOVE FUNCTIONS


$(document).mousemove(function(event) {

        // MOUSE TRACKING

currentMousePos.x = event.pageX;
currentMousePos.y = event.pageY;

var transX = currentMousePos.x - 15
var transY = currentMousePos.y - 15


        // DYNAMIC MENU POSITION

        var dynamicMenuDist = 20

        // CONTAINER SCALING MECHANISM


$(".container").css({transformOrigin:transX + "px " + transY + "px" })


        // SACLING CONSTRAINTS


switch (true) {
    case (currentMousePos.x <= (windowWidth * 0.4) && currentMousePos.y <= (windowHeight / 5)):
        $(".container").addClass("size2")
        $(".container").removeClass("size1")
        $(".dynamic-menu").addClass("dynamicMenuOn")
        $(".dynamic-menu").removeClass("dynamicMenuOff")
        $(".dynamic-menu").css({top:currentMousePos.y + dynamicMenuDist * 3 + "px", left:currentMousePos.x - dynamicMenuDist * 1.5 + "px"})
        break;

    case (currentMousePos.x <= (windowWidth * 0.4) && currentMousePos.y >= (windowHeight / 5)):
        $(".container").addClass("size2")
        $(".dynamic-menu").addClass ("dynamicMenuOn")
        $(".dynamic-menu").removeClass ("dynamicMenuOff")
        $(".container").removeClass("size1")
        $(".dynamic-menu").css({top:currentMousePos.y + dynamicMenuDist * 3 + "px", left:currentMousePos.x - dynamicMenuDist * 1.5 + "px"})
        break;

    case (currentMousePos.x >= (windowWidth * 0.7) && currentMousePos.y <= (windowHeight / 5)):
        $(".container").addClass("size2")
        $(".dynamic-menu").addClass ("dynamicMenuOn")
        $(".container").removeClass("size1")
        $(".dynamic-menu").removeClass ("dynamicMenuOff")
        $(".dynamic-menu").css({top:currentMousePos.y + dynamicMenuDist * 3 + "px", left:currentMousePos.x - dynamicMenuDist * 7 + "px"})
        break;

    case (currentMousePos.x >= (windowWidth * 0.6) && currentMousePos.y >= (windowHeight / 5)):
        $(".container").addClass("size2")
        $(".dynamic-menu").addClass ("dynamicMenuOn")
        $(".container").removeClass("size1")
        $(".dynamic-menu").removeClass ("dynamicMenuOff")
        $(".dynamic-menu").css({ttop:currentMousePos.y + dynamicMenuDist * 1 + "px", left:currentMousePos.x - dynamicMenuDist * 7 + "px"})
        break;

    case (currentMousePos.y <= (windowWidth / 5)):
        $(".container").addClass("size2")
        $(".dynamic-menu").addClass ("dynamicMenuOn")
        $(".container").removeClass("size1")
        $(".dynamic-menu").removeClass ("dynamicMenuOff")
        $(".dynamic-menu").css({top:currentMousePos.y + dynamicMenuDist * 3 + "px", left:currentMousePos.x - dynamicMenuDist * 1.5})
        break;

    case (currentMousePos.y >= (windowWidth * 0.36)):
        $(".container").addClass("size2")
        $(".dynamic-menu").addClass ("dynamicMenuOn")
        $(".container").removeClass("size1")
        $(".dynamic-menu").removeClass ("dynamicMenuOff")
        $(".dynamic-menu").css({top:currentMousePos.y - dynamicMenuDist * 5 + "px", left:currentMousePos.x - dynamicMenuDist * 1.5})
        break;

    default:
        $(".container").removeClass("size2")
        $(".dynamic-menu").addClass ("dynamicMenuOff")
        $(".dynamic-menu").removeClass ("dynamicMenuOn")
        $(".container").addClass("size1")
        break;
}  
})


// NOTATION MODE - BUTTON -  SACLING MECHANICS INTERACTION


$(".not-mode-container").mouseover(function(){
    $(this).css({background:""})
    $(".container").addClass("size1")
    $(".container").removeClass("size2")    
})

$(".not-mode-container").mouseleave(function(){
    $(this).css({background:""})
    $(".container").removeClass("size1")
    $(".container").addClass("size2")    
})


        // THUMBNAIL & LINKS - POSITION



for (let i = 0; i < thumbs.length; i++) {
    
    var thumbTop = $(thumbs[i]).offset().top
        var thumbLeft = $(thumbs[i]).offset().left
        var thumbHeight = $(thumbs[i]).height();
        var thumbWidth = $(thumbs[i]).width();
        thumbsPos.push({top:thumbTop, left:thumbLeft, bottom:(thumbTop + thumbHeight), right:(thumbLeft + thumbWidth)})  

        var linkTop = $(links[i]).offset().top;
        var linkLeft = $(links[i]).offset().left
        var linkHeight = $(links[i]).height()
        var linkWidth = $(links[i]).width()
        linksPos.push({top:linkTop, left:linkLeft, bottom:(linkTop + linkHeight), right:(linkLeft + linkWidth)})
   
}


        // TRACKING THUMBNAIL MOTION - RENDERING SVG LINE

function checkForMove() {

    for (let i = 0; i < thumbs.length; i++)
    {
        var thumbTop = $(thumbs[i]).offset().top
        var thumbLeft = $(thumbs[i]).offset().left
        var thumbHeight = $(thumbs[i]).height();
        var thumbWidth = $(thumbs[i]).width();
        var linkTop = $(links[i]).offset().top;
        var linkLeft = $(links[i]).offset().left
        var linkHeight = $(links[i]).height()
        var linkWidth = $(links[i]).width()
        var linkRight = linkLeft + linkWidth
        var linkBottom = linkTop + linkHeight 

        if ($(thumbs[i]).prop('user_default_left') === undefined) {
            $(thumbs[i]).prop('user_default_left', thumbLeft);
            $(thumbs[i]).prop('user_is_moving', false);
    }
        
        if (thumbLeft != $(thumbs[i]).prop('user_default_left') && !$(thumbs[i]).prop('user_is_moving')) {
            
            $(linksPos[i]).prop('user_is_moving', true);

            var thumbTop = $(thumbs[i]).offset().top
            var thumbLeft = $(thumbs[i]).offset().left
            var thumbHeight = $(thumbs[i]).height();
            var thumbWidth = $(thumbs[i]).width();
            var thumbBottom = thumbTop + thumbHeight
            var thumbRight = thumbLeft + thumbWidth
            var linkTop = $(links[i]).offset().top;
            var linkLeft = $(links[i]).offset().left
            var linkHeight = $(links[i]).height()
            var linkWidth = $(links[i]).width()
            var linkRight = linkLeft + linkWidth
            var linkBottom = linkTop + linkHeight

            $(lines[i]).attr({"points":linkRight + 12 + "," + linkBottom
            + " " + thumbLeft + "," + thumbTop})

            

        }

        if (thumbLeft == $(thumbs[i]).prop('user_default_left') && $(thumbs[i]).prop('user_is_moving')) {

            $(thumbs[i]).prop('user_is_moving', false);
        }

        if ($(links[i]).prop('user_default_left') === undefined) {
            $(links[i]).prop('user_default_left', linkLeft);
            $(links[i]).prop('user_is_moving', false);
        }
        
        if (linkLeft != $(links[i]).prop('user_default_left') && !$(links[i]).prop('user_is_moving')) {
            
            $(linksPos[i]).prop('user_is_moving', true);
        }
        if (linkLeft == $(links[i]).prop('user_default_left') && $(links[i]).prop('user_is_moving')) {
            
            $(links[i]).prop('user_is_moving', false);
        }
    }
    
        setTimeout(checkForMove, 1);
    }
    
    
checkForMove();







})