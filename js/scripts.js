"use strict";document.querySelector("#clickMe").addEventListener("click",openPopup),document.querySelector("#clickMe1").addEventListener("click",openPopup),document.querySelector("#closePopup").addEventListener("click",closePopup);var el=$("#popup"),inner=$(".popup-inner");function openPopup(){inner.attr("style","margin-right:20px"),el.removeClass("fade-out").addClass("fade-in"),el.attr("style","visibility:visible"),$("body").css({overflow:"hidden"})}function closePopup(){inner.attr("style","margin-right:0px"),el.removeClass("fade-in").addClass("fade-out"),el.attr("style","visibility:hidden"),$("body").css({overflow:"auto"})}function writeText(t){var e,o,r,c,i,n,l=$("#popup-window");($("#bot-chat-current").length||$("#user-chat-current").length)&&("bot"===t.writer&&(e=$("#bot-logo-current"),o=$(".row-current").offset().top+$(".row-current").height()-$("#last-bot-row").offset().top,console.log(o),e.animate({top:o.toString()},550,function(){e.css("visibility","hidden"),e.removeAttr("id")}),$("#last-bot-row").removeAttr("id")),$("#bot-chat-current").removeAttr("id"),$("#user-chat-current").removeAttr("id"),$(".row-current").removeClass("row-current")),l.append('<div id="last-bot-row" class="row align-items-center chat-row row-current"> \t\t\t\t\t\t<div class="col-md-1 col-xl-2 padding-column"> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div id="left-tag-current" class="col-2 col-sm-1 logo-column"> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="col-8 col-sm-10 col-md-8 col-xl-6 content-column"> \t\t\t\t\t\t\t<div id="bot-chat-current" class="chat-bubble bot-bubble chat-fade-in"> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t<div id="user-chat-current" class="chat-bubble user-bubble float-right chat-fade-in"> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div id="right-tag-current" class="col-2 col-sm-1 logo-column"> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="col-md-1 col-xl-2 padding-column"> \t\t\t\t\t\t</div> \t\t\t\t\t</div>'),"bot"===t.writer?(s=1<$(".chat-row").length?'<img id="bot-logo-current" src="images/IFSLogo.png" class="bot-logo logo-pop-in">':'<img id="bot-logo-current" src="images/IFSLogo.png" class="bot-logo">',$("#left-tag-current").append(s),$("#right-tag-current").append('<div id="bot-clock-current" class="bot-clock"></div>')):$("#left-tag-current").append('<div id="user-clock-current" class="user-clock"></div>'),$("#left-tag-current").removeAttr("id"),$("#right-tag-current").removeAttr("id");var s=new Date,s=s.getHours()+":"+s.getMinutes()+":"+s.getSeconds(),s="bot"===t.writer?(r=$("#bot-chat-current"),c=$("#bot-clock-current"),n=$("#user-chat-current"),i=$("#user-clock-current"),'<div class="clock-text bot-clock-text">'+s+"</div>"):(r=$("#user-chat-current"),c=$("#user-clock-current"),n=$("#bot-chat-current"),i=$("#bot-clock-current"),'<div class="clock-text user-clock-text" style="height:100%;max-height:100%">'+s+"</div>");switch(i.remove(),n.remove(),c.append(s),c.removeAttr("id"),t.style){case"text":r.append('<p class="chat-text">'+t.text+"</p>");break;case"form":r.append('<p class="chat-text">'+t.text+'</p><input type="text" id="chat-form" class="form-bubble"></input>');break;case"button":r.append('<p class="chat-text">'+t.text+'</p><button type="button" id="continue-button" class="button-bubble">'+t.label+"</button>"),$("#continue-button").click(function(){})}}$(document).ready(function(){setTimeout(function(){writeText({text:"Lets get you your free book",style:"text",writer:"bot"})},1e3),setTimeout(function(){writeText({text:"Here's your book",style:"form",label:"answer here",writer:"bot"})},2e3),setTimeout(function(){writeText({text:"Here's your book",style:"button",label:"clickMe",writer:"user"})},3e3),setTimeout(function(){writeText({text:"Here's your book",style:"text",writer:"user"})},4e3),setTimeout(function(){writeText({text:"Here's your book",style:"form",label:"answer here",writer:"bot"})},5e3)});