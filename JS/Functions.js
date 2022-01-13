        $(document).ready(function(){

            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            var XMid = windowWidth / 2;
            var YMid = windowHeight / 2;
            var currentMousePos = {x: -1, y: -1};
            var q = 1
            var n = 1
            var bgArray = ["royalblue","lightsalmon", "lightseagreen", "violet", "khaki", "darkcyan" ]
            var textColors = ["white","lightcoral","blue","lightgrey", "darkcyan", "white"]
            var links = document.querySelectorAll(".link")
            var nots = document.querySelectorAll(".notation")
            for (let i = 0; i < links.length; i++) {
                $(links[i]).click(function(){
                    switch (n) {
                        case 1:
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
                            n++
                            return n;
                            break;
                    
                        case 2: 
                            $(".notation-container").css({bottom:"-50%"})
                            $(".notation").css({bottom:"0%"})
                            $(".container").css({background:"#fff"})
                            $(".container>.section>.section-main>.section-text-container>.section-para>p").css({color:"#000"})
                            $(".container>.section>.section-main>.section-header").css({color:"#000"})
                            $(".container>.section>.section-main>.section-underline").css({background:"#000"})
                            $(".title").css({color:"#000"})
                            $(".author").css({color:"#000"})
                            $(".date").css({color:"#000"})
                            n--
                            return n;
                            break;

                        default:

                            break;
                    }
                    
                })

                //here line attr
            }

            var zArray = []

            for (let i = 0; i < nots.length; i++) {
                zArray.push(20-i)
                $(nots[i]).css({zIndex:zArray[i]})
                $(nots[i]).mouseleave(function(){
                    $(".notation-container").css({bottom:"-50%"})
                    $(".notation").css({bottom:"0%"})
                    $(".container").css({background:"#fff"})
                            $(".container>.section>.section-main>.section-text-container>.section-para>p").css({color:"#000"})
                            $(".container>.section>.section-main>.section-header").css({color:"#000"})
                            $(".container>.section>.section-main>.section-underline").css({background:"#000"})
                            $(".title").css({color:"#000"})
                            $(".author").css({color:"#000"})
                            $(".date").css({color:"#000"})
                    n = 1;
                    q = 1;
                    return q;
                    return n;
                })
            }

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

        $(document).mousemove(function(event) {
                currentMousePos.x = event.pageX;
                currentMousePos.y = event.pageY;

                var transX = currentMousePos.x - 15
                var transY = currentMousePos.y - 15
                $(".container").css({transformOrigin:transX + "px " + transY + "px" })
                
                switch (true) {
                    case (currentMousePos.x <= (windowWidth * 0.4) && currentMousePos.y <= (windowHeight / 5)):
                        $(".container").addClass("size2")
                        $(".container").removeClass("size1")
                        break;

                    case (currentMousePos.x <= (windowWidth * 0.4) && currentMousePos.y >= (windowHeight / 5)):
                        $(".container").addClass("size2")
                        $(".container").removeClass("size1")
                        break;

                    case (currentMousePos.x >= (windowWidth * 0.7) && currentMousePos.y <= (windowHeight / 5)):
                        $(".container").addClass("size2")
                        $(".container").removeClass("size1")
                        break;

                    case (currentMousePos.x >= (windowWidth * 0.6) && currentMousePos.y >= (windowHeight / 5)):
                        $(".container").addClass("size2")
                        $(".container").removeClass("size1")
                        break;

                    case (currentMousePos.y <= (windowWidth / 5)):
                        $(".container").addClass("size2")
                        $(".container").removeClass("size1")
                        break;

                    case (currentMousePos.y >= (windowWidth * 0.4)):
                        $(".container").addClass("size2")
                        $(".container").removeClass("size1")
                        break;

                    default:
                        $(".container").removeClass("size2")
                        $(".container").addClass("size1")
                        break;
                }  
            })

            $(".not-mode-container").click(function(){
                switch (q) {
                    case 1:
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
                        q++
                        return q;
                        break;
                
                    case 2:
                    $(".container").css({transform:"", background:"#fff"})
                        $(".thumb").css({opacity:"0"})
                        $(".container>.section>.section-main>.section-text-container>.section-para>p").css({color:"#000"})
                        $(".container>.section>.section-main>.section-header").css({color:"#000"})
                        $(".container>.section>.section-main>.section-underline").css({background:"#000"})
                        $(".title").css({color:"#000"})
                        $(".author").css({color:"#000"})
                        $(".date").css({color:"#000"})
                        $(".not-mode-container").css({color:"#000", borderColor:"#000"})
                        $(".link").css({borderWidth:"0px", padding:"0px"})
                        $(".canvas").css({opacity:"0"})
                        q--
                        return q;
                        break;
        
                    default:
                        break;
                }
                
            })

            var lines = document.querySelectorAll(".line")
            var thumbs = document.querySelectorAll(".thumb")
            var thumbsPos = []
            var linksPos = []

            
            
            

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

                            $(lines[i]).attr({"points":linkRight + 20 + "," + linkBottom 
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
                            console.log("link Move started");
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