"use strict";function asyncGeneratorStep(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function _asyncToGenerator(s){return function(){var t=this,i=arguments;return new Promise(function(e,r){var n=s.apply(t,i);function o(t){asyncGeneratorStep(n,e,r,o,a,"next",t)}function a(t){asyncGeneratorStep(n,e,r,o,a,"throw",t)}o(void 0)})}}var pause;document.querySelector("#clickMe").addEventListener("click",openPopup),document.querySelector("#clickMe1").addEventListener("click",openPopup),document.querySelector("#closePopup").addEventListener("click",closePopup);var el=$("#popup"),inner=$(".popup-inner");function openPopup(){inner.attr("style","margin-right:20px"),el.removeClass("fade-out").addClass("fade-in"),el.attr("style","visibility:visible"),$("body").css({overflow:"hidden"}),chatbot()}function closePopup(){inner.attr("style","margin-right:0px"),el.removeClass("fade-in").addClass("fade-out"),el.attr("style","visibility:hidden"),$("body").css({overflow:"auto"})}var privacyLink="http://integrityfinancialservicellc.com/wp-content/uploads/2015/05/IFS-Privacy-Pledge-and-Notification.pdf",fields={name:"",email:"",phone:"",portfolioSize:""},chatbot=function(){var e=!1;return _asyncToGenerator(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=36;break}return e=!0,t.next=4,writeText({text:"Our book has been requested over NaN times!",style:"text",writer:"bot"});case 4:return t.next=6,writeText({text:"All we need some information to determine whether this book suits your needs.",style:"text",writer:"bot"});case 6:return t.next=8,writeText({text:"First of all, what is your name?",style:"form",field:"name",writer:"bot"});case 8:return fields.name=t.sent,t.next=11,writeText({text:fields.name,style:"text",writer:"user"});case 11:return t.next=13,writeText({text:"Great! Nice to meet you ".concat(fields.name,"!"),style:"text",writer:"bot"});case 13:return t.next=15,writeText({text:"Before we go any further, we want you to know we take your data VERY seriously.",style:"text",writer:"bot"});case 15:return t.next=17,writeText({text:"<a href=".concat(privacyLink,' target="_blank">Here</a> is our privacy policy.'),style:"text",writer:"bot"});case 17:return t.next=19,writeText({text:"What's a good phone number to reach you at? (We won't spam you; only a one time confirmation)",style:"form",field:"phone",writer:"bot"});case 19:return fields.phone=t.sent,t.next=22,writeText({text:fields.phone,style:"text",writer:"user"});case 22:return t.next=24,writeText({text:"Great! And what is a good email we can send your book to? (Again, we won't spam you)",style:"form",field:"email",writer:"bot"});case 24:return fields.email=t.sent,t.next=27,writeText({text:"".concat(fields.email),style:"text",writer:"user"});case 27:return t.next=29,writeText({text:"Perfect ".concat(fields.name,". What would best describe the amount of investable assets you have saved for retirement? (We customize the information we send based on your situation)"),style:"portfolio",writer:"bot"});case 29:return fields.portfolioSize=t.sent,t.next=32,writeText({text:"".concat(fields.portfolioSize),style:"text",writer:"user"});case 32:return t.next=34,writeText({text:"Great ".concat(fields.name,", one last thing.  We need to make sure you're a real person!  Solve the captcha below and we'll get that book sent over to you!"),style:"text",writer:"bot"});case 34:return t.next=36,writeText({text:fields.email,style:"captcha",writer:"bot"});case 36:case"end":return t.stop()}},t)}))}();function writeText(t){return _writeText.apply(this,arguments)}function _writeText(){return(_writeText=_asyncToGenerator(regeneratorRuntime.mark(function t(e){var r,n,o,a,i,s,c,l,u,d,p,f,m,b,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:$(".row-current").removeClass("row-current"),$("#bot-chat-current").removeAttr("id"),$("#user-chat-current").removeAttr("id"),$("#left-tag-current").removeAttr("id"),$("#right-tag-current").removeAttr("id"),$("#popup-window").append('<div class="row align-items-center chat-row row-current"> \t\t\t\t\t\t<div class="col-md-1 col-xl-2 padding-column"> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div id="left-tag-current" class="col-2 col-sm-1 logo-column"> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="col-8 col-sm-10 col-md-8 col-xl-6 content-column"> \t\t\t\t\t\t\t<div id="bot-chat-current" class="chat-bubble bot chat-fade-in"> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t<div id="user-chat-current" class="chat-bubble user float-right chat-fade-in"> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div id="right-tag-current" class="col-2 col-sm-1 logo-column"> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="col-md-1 col-xl-2 padding-column"> \t\t\t\t\t\t</div> \t\t\t\t\t</div>'),"bot"===e.writer?(r=1<$(".chat-row").length?'<img id="bot-logo-current" src="images/IFSLogo.png" class="bot-logo logo-pop-in">':'<img id="bot-logo-current" src="images/IFSLogo.png" class="bot-logo">',$("#right-tag-current").append('<div id="bot-clock-current" class="bot-clock"></div>')):$("#left-tag-current").append('<div id="user-clock-current" class="user-clock"></div>'),c=new Date,c=c.getHours()+":"+c.getMinutes()+":"+c.getSeconds(),"bot"===e.writer?(n=$("#bot-chat-current"),o=$("#bot-clock-current"),i=$("#user-chat-current"),a=$("#user-clock-current"),s='<div class="clock-text bot-clock-text">'+c+"</div>",$(".bot.last").removeClass("last")):(n=$("#user-chat-current"),o=$("#user-clock-current"),i=$("#bot-chat-current"),a=$("#bot-clock-current"),$(".row-current").addClass("height-shift"),s='<div class="clock-text user-clock-text" style="height:100%;max-height:100%">'+c+"</div>",$(".user.last").removeClass("last")),n.addClass("last"),a.remove(),i.remove(),o.append(s),o.removeAttr("id"),t.t0=e.style,t.next="text"===t.t0?19:"form"===t.t0?22:"portfolio"===t.t0?28:"captcha"===t.t0?38:40;break;case 19:return n.append('<p class="chat-text">'.concat(e.text,"</p>")),l=delay(1e3),t.abrupt("break",40);case 22:return n.append('<p class="chat-text">'+e.text+'</p><div class="input-group mb-3"> \t\t\t<input type="text" id="'.concat(e.field,'-input" class="form-control" placeholder="Your ').concat(e.field,'" aria-label="Your ').concat(e.field,'" aria-describedby="').concat(e.field,'-submit">  \n  \t\t\t<div class="input-group-append"> \t\t\t<span class="input-group-text" id="').concat(e.field,'-submit"> ok</span></div></div>')),u=$("#".concat(e.field,"-submit")),pause=!0,u.on("click",unpause),l=pauseUntil("#".concat(e.field,"-input"),function(t){return t.val()}),t.abrupt("break",40);case 28:for(n.append('<p class="chat-text">'+e.text+"</p>"),u=["Less than $100,000 of investable assets saved for retirement","Between $100,000 and $250,000 of investable assets saved for retirement","Between $250,000 and $500,000 of investable assets saved for retirement","Between $500,000 and $1,000,000 of investable assets saved for retirement","Over $1,000,000 of investable assets saved for retirement"],n.append('<div class="portfolio-selection">'),d=$(".portfolio-selection"),p=0,f=u;p<f.length;p++)m=f[p],d.append('<button type="button" class="btn btn-light portfolio-button">'.concat(m,"</button>"));return d.on("click","button",function(){$(this).attr("id","portfolio-size"),unpause()}),n.append("</div>"),pause=!0,l=pauseUntil("#portfolio-size",function(t){return t.text()}),t.abrupt("break",40);case 38:return n.append('<p class="chat-text">'+e.text+"</p>"),t.abrupt("break",40);case 40:return"bot"===e.writer&&(1<$(".content-column").length&&(b=$(".row-current").height()/2+$("#last-bot-row").height()/2,0!==(h=$(".height-shift")).length&&h.each(function(){b+=$(this).height()}),$("#bot-logo-current").velocity({top:b},{duration:400,easing:"easeInQuad",complete:function(t){setTimeout(function(){$(t).css("visibility","hidden").removeAttr("id"),h.removeClass("height-shift")},300)}}),$("#last-bot-row").removeAttr("id"),$("#bot-logo-current").removeAttr("id"),$("bot-logo").last().attr("id","bot-logo-current")),$("#left-tag-current").append(r),$(".row-current").attr("id","last-bot-row")),t.next=43,l;case 43:return t.abrupt("return",t.sent);case 44:case"end":return t.stop()}},t)}))).apply(this,arguments)}function delay(r){return new Promise(function(t,e){setTimeout(function(){t(null)},r)})}function unpause(){pause=!1}function pauseUntil(t,e){return _pauseUntil.apply(this,arguments)}function _pauseUntil(){return(_pauseUntil=_asyncToGenerator(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(pause)return t.next=3,delay(100);t.next=5;break;case 3:t.next=0;break;case 5:return t.abrupt("return",r($(e)));case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function encryptFormData(t){}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsicGF1c2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwib3BlblBvcHVwIiwiY2xvc2VQb3B1cCIsIiQiLCJlbCIsImF0dHIiLCJpbm5lciIsImFkZENsYXNzIiwib3ZlcmZsb3ciLCJyZW1vdmVDbGFzcyIsImNoYXRib3QiLCJjc3MiLCJwcml2YWN5TGluayIsImZpZWxkcyIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwicG9ydGZvbGlvU2l6ZSIsImV4ZWN1dGVkIiwiX2NhbGxlZSIsInJlZ2VuZXJhdG9yUnVudGltZSIsIndyYXAiLCJfY29udGV4dCIsInByZXYiLCJuZXh0Iiwid3JpdGVUZXh0IiwidGV4dCIsInN0eWxlIiwid3JpdGVyIiwic2VudCIsImNvbmNhdCIsImZpZWxkIiwic3RvcCIsIm9wdGlvbnMiLCJyZW1vdmVBdHRyIiwiYXBwZW5kIiwibG9nb1RleHQiLCJsZW5ndGgiLCJkIiwiRGF0ZSIsInRpbWUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiY2xvY2tUb1JlbW92ZSIsImNsb2NrVGV4dCIsImNoYXQiLCJjbG9jayIsImNoYXRUb1JlbW92ZSIsInJlbW92ZSIsImJ1YmJsZUhUTUwiLCJyZXR1cm5WYWx1ZSIsImRlbGF5IiwiZ28iLCJvbiIsInVucGF1c2UiLCJwYXVzZVVudGlsIiwidmFsdWUiLCJ2YWwiLCJzZWxlY3Rpb24iLCJzaXplcyIsIl9zaXplcyIsIl9pIiwic2l6ZSIsImhlaWdodCIsImVhY2giLCJsb2dvU2hpZnREb3duIiwidGhpcyIsInRvcCIsImR1cmF0aW9uIiwiY29tcGxldGUiLCJlbGVtZW50Iiwic2V0VGltZW91dCIsInJvd3NUb1NoaWZ0IiwibGFzdCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmbiIsImVuY3J5cHRGb3JtRGF0YSIsImRhdGEiXSwibWFwcGluZ3MiOiIwWUFFQSxJQUFJ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LCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBwYXVzZTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGlja01lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUG9wdXApO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsaWNrTWUxXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUG9wdXApO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlUG9wdXBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wdXApO1xyXG5sZXQgZWwgPSAkKFwiI3BvcHVwXCIpO1xyXG5sZXQgaW5uZXIgPSAkKFwiLnBvcHVwLWlubmVyXCIpO1xyXG5cclxuZnVuY3Rpb24gb3BlblBvcHVwKCkge1xyXG4gICAgaW5uZXIuYXR0cihcInN0eWxlXCIsIFwibWFyZ2luLXJpZ2h0OjIwcHhcIik7XHJcbiAgICBlbC5yZW1vdmVDbGFzcyhcImZhZGUtb3V0XCIpLmFkZENsYXNzKFwiZmFkZS1pblwiKTtcclxuICAgIGVsLmF0dHIoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6dmlzaWJsZVwiKTtcclxuICAgICQoXCJib2R5XCIpLmNzcyh7IG92ZXJmbG93OiBcImhpZGRlblwiIH0pO1xyXG4gICAgY2hhdGJvdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZVBvcHVwKCkge1xyXG4gICAgaW5uZXIuYXR0cihcInN0eWxlXCIsIFwibWFyZ2luLXJpZ2h0OjBweFwiKTtcclxuICAgIGVsLnJlbW92ZUNsYXNzKFwiZmFkZS1pblwiKS5hZGRDbGFzcyhcImZhZGUtb3V0XCIpO1xyXG4gICAgZWwuYXR0cihcInN0eWxlXCIsIFwidmlzaWJpbGl0eTpoaWRkZW5cIik7XHJcbiAgICAvLyBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gNzY4KSB7XHJcbiAgICAkKFwiYm9keVwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbi8qR2V0IGV4aXN0aW5nIHJvdyBoZWlnaHQsIGFkZCAxcmVtIGZvciBldmVyeSB0aW1lIGNoYXQtYnViYmxlIHRleHQgd2lsbCB3cmFwLCBhbmltYXRlIGJvdC1sb2dvJ3Mgc2hpZnQgZG93biB3aXRoIHRvcDpcclxuICBtb3ZlIGJvdC1sb2dvIHRvIG5ldyByb3cgYWZ0ZXIgYW5pbWF0aW9uIHRpbWVvdXQqL1xyXG5sZXQgcHJpdmFjeUxpbmsgPVxyXG4gICAgXCJodHRwOi8vaW50ZWdyaXR5ZmluYW5jaWFsc2VydmljZWxsYy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDUvSUZTLVByaXZhY3ktUGxlZGdlLWFuZC1Ob3RpZmljYXRpb24ucGRmXCI7XHJcbmxldCBmaWVsZHMgPSB7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIHBvcnRmb2xpb1NpemU6IFwiXCIsXHJcbn07XHJcblxyXG5sZXQgY2hhdGJvdCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFleGVjdXRlZCkge1xyXG4gICAgICAgICAgICBleGVjdXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGF3YWl0IHdyaXRlVGV4dCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIk91ciBib29rIGhhcyBiZWVuIHJlcXVlc3RlZCBvdmVyIE5hTiB0aW1lcyFcIixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgIHdyaXRlcjogXCJib3RcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHdyaXRlVGV4dCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgICAgICAgICAgIFwiQWxsIHdlIG5lZWQgc29tZSBpbmZvcm1hdGlvbiB0byBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGJvb2sgc3VpdHMgeW91ciBuZWVkcy5cIixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgIHdyaXRlcjogXCJib3RcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZpZWxkcy5uYW1lID0gYXdhaXQgd3JpdGVUZXh0KHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRmlyc3Qgb2YgYWxsLCB3aGF0IGlzIHlvdXIgbmFtZT9cIixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcImZvcm1cIixcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgIHdyaXRlcjogXCJib3RcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHdyaXRlVGV4dCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBmaWVsZHMubmFtZSxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgIHdyaXRlcjogXCJ1c2VyXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCB3cml0ZVRleHQoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogYEdyZWF0ISBOaWNlIHRvIG1lZXQgeW91ICR7ZmllbGRzLm5hbWV9IWAsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICB3cml0ZXI6IFwiYm90XCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCB3cml0ZVRleHQoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDpcclxuICAgICAgICAgICAgICAgICAgICBcIkJlZm9yZSB3ZSBnbyBhbnkgZnVydGhlciwgd2Ugd2FudCB5b3UgdG8ga25vdyB3ZSB0YWtlIHlvdXIgZGF0YSBWRVJZIHNlcmlvdXNseS5cIixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgIHdyaXRlcjogXCJib3RcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHdyaXRlVGV4dCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBgPGEgaHJlZj0ke3ByaXZhY3lMaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5IZXJlPC9hPiBpcyBvdXIgcHJpdmFjeSBwb2xpY3kuYCxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgIHdyaXRlcjogXCJib3RcIixcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmaWVsZHMucGhvbmUgPSBhd2FpdCB3cml0ZVRleHQoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDpcclxuICAgICAgICAgICAgICAgICAgICBcIldoYXQncyBhIGdvb2QgcGhvbmUgbnVtYmVyIHRvIHJlYWNoIHlvdSBhdD8gKFdlIHdvbid0IHNwYW0geW91OyBvbmx5IGEgb25lIHRpbWUgY29uZmlybWF0aW9uKVwiLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwiZm9ybVwiLFxyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwicGhvbmVcIixcclxuICAgICAgICAgICAgICAgIHdyaXRlcjogXCJib3RcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHdyaXRlVGV4dCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBmaWVsZHMucGhvbmUsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICB3cml0ZXI6IFwidXNlclwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZmllbGRzLmVtYWlsID0gYXdhaXQgd3JpdGVUZXh0KHtcclxuICAgICAgICAgICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJHcmVhdCEgQW5kIHdoYXQgaXMgYSBnb29kIGVtYWlsIHdlIGNhbiBzZW5kIHlvdXIgYm9vayB0bz8gKEFnYWluLCB3ZSB3b24ndCBzcGFtIHlvdSlcIixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcImZvcm1cIixcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICB3cml0ZXI6IFwiYm90XCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCB3cml0ZVRleHQoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogYCR7ZmllbGRzLmVtYWlsfWAsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICB3cml0ZXI6IFwidXNlclwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZmllbGRzLnBvcnRmb2xpb1NpemUgPSBhd2FpdCB3cml0ZVRleHQoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogYFBlcmZlY3QgJHtmaWVsZHMubmFtZX0uIFdoYXQgd291bGQgYmVzdCBkZXNjcmliZSB0aGUgYW1vdW50IG9mIGludmVzdGFibGUgYXNzZXRzIHlvdSBoYXZlIHNhdmVkIGZvciByZXRpcmVtZW50PyAoV2UgY3VzdG9taXplIHRoZSBpbmZvcm1hdGlvbiB3ZSBzZW5kIGJhc2VkIG9uIHlvdXIgc2l0dWF0aW9uKWAsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJwb3J0Zm9saW9cIixcclxuICAgICAgICAgICAgICAgIHdyaXRlcjogXCJib3RcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHdyaXRlVGV4dCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBgJHtmaWVsZHMucG9ydGZvbGlvU2l6ZX1gLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgd3JpdGVyOiBcInVzZXJcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHdyaXRlVGV4dCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBgR3JlYXQgJHtmaWVsZHMubmFtZX0sIG9uZSBsYXN0IHRoaW5nLiAgV2UgbmVlZCB0byBtYWtlIHN1cmUgeW91J3JlIGEgcmVhbCBwZXJzb24hICBTb2x2ZSB0aGUgY2FwdGNoYSBiZWxvdyBhbmQgd2UnbGwgZ2V0IHRoYXQgYm9vayBzZW50IG92ZXIgdG8geW91IWAsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICB3cml0ZXI6IFwiYm90XCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCB3cml0ZVRleHQoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogZmllbGRzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwiY2FwdGNoYVwiLFxyXG4gICAgICAgICAgICAgICAgd3JpdGVyOiBcImJvdFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gd3JpdGVUZXh0KG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGJ1YmJsZUhUTUwgPVxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBjaGF0LXJvdyByb3ctY3VycmVudFwiPiBcXFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEgY29sLXhsLTIgcGFkZGluZy1jb2x1bW5cIj4gXFxcclxuXHRcdFx0XHRcdFx0PC9kaXY+IFxcXHJcblx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJsZWZ0LXRhZy1jdXJyZW50XCIgY2xhc3M9XCJjb2wtMiBjb2wtc20tMSBsb2dvLWNvbHVtblwiPiBcXFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4gXFxcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC04IGNvbC1zbS0xMCBjb2wtbWQtOCBjb2wteGwtNiBjb250ZW50LWNvbHVtblwiPiBcXFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJib3QtY2hhdC1jdXJyZW50XCIgY2xhc3M9XCJjaGF0LWJ1YmJsZSBib3QgY2hhdC1mYWRlLWluXCI+IFxcXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+IFxcXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cInVzZXItY2hhdC1jdXJyZW50XCIgY2xhc3M9XCJjaGF0LWJ1YmJsZSB1c2VyIGZsb2F0LXJpZ2h0IGNoYXQtZmFkZS1pblwiPiBcXFxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PiBcXFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4gXFxcclxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cInJpZ2h0LXRhZy1jdXJyZW50XCIgY2xhc3M9XCJjb2wtMiBjb2wtc20tMSBsb2dvLWNvbHVtblwiPiBcXFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4gXFxcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xIGNvbC14bC0yIHBhZGRpbmctY29sdW1uXCI+IFxcXHJcblx0XHRcdFx0XHRcdDwvZGl2PiBcXFxyXG5cdFx0XHRcdFx0PC9kaXY+JztcclxuXHJcbiAgICAkKFwiLnJvdy1jdXJyZW50XCIpLnJlbW92ZUNsYXNzKFwicm93LWN1cnJlbnRcIik7XHJcbiAgICAkKFwiI2JvdC1jaGF0LWN1cnJlbnRcIikucmVtb3ZlQXR0cihcImlkXCIpO1xyXG4gICAgJChcIiN1c2VyLWNoYXQtY3VycmVudFwiKS5yZW1vdmVBdHRyKFwiaWRcIik7XHJcbiAgICAkKFwiI2xlZnQtdGFnLWN1cnJlbnRcIikucmVtb3ZlQXR0cihcImlkXCIpO1xyXG4gICAgJChcIiNyaWdodC10YWctY3VycmVudFwiKS5yZW1vdmVBdHRyKFwiaWRcIik7XHJcblxyXG4gICAgbGV0IGxvZ29UZXh0O1xyXG4gICAgJChcIiNwb3B1cC13aW5kb3dcIikuYXBwZW5kKGJ1YmJsZUhUTUwpO1xyXG4gICAgaWYgKG9wdGlvbnMud3JpdGVyID09PSBcImJvdFwiKSB7XHJcbiAgICAgICAgaWYgKCQoXCIuY2hhdC1yb3dcIikubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBsb2dvVGV4dCA9XHJcbiAgICAgICAgICAgICAgICAnPGltZyBpZD1cImJvdC1sb2dvLWN1cnJlbnRcIiBzcmM9XCJpbWFnZXMvSUZTTG9nby5wbmdcIiBjbGFzcz1cImJvdC1sb2dvIGxvZ28tcG9wLWluXCI+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2dvVGV4dCA9XHJcbiAgICAgICAgICAgICAgICAnPGltZyBpZD1cImJvdC1sb2dvLWN1cnJlbnRcIiBzcmM9XCJpbWFnZXMvSUZTTG9nby5wbmdcIiBjbGFzcz1cImJvdC1sb2dvXCI+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNyaWdodC10YWctY3VycmVudFwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiYm90LWNsb2NrLWN1cnJlbnRcIiBjbGFzcz1cImJvdC1jbG9ja1wiPjwvZGl2PidcclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2xlZnQtdGFnLWN1cnJlbnRcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInVzZXItY2xvY2stY3VycmVudFwiIGNsYXNzPVwidXNlci1jbG9ja1wiPjwvZGl2PidcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjaGF0LCBjbG9jaywgY2xvY2tUb1JlbW92ZSwgY2hhdFRvUmVtb3ZlLCBjbG9ja1RleHQ7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgdGltZSA9IGQuZ2V0SG91cnMoKSArIFwiOlwiICsgZC5nZXRNaW51dGVzKCkgKyBcIjpcIiArIGQuZ2V0U2Vjb25kcygpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLndyaXRlciA9PT0gXCJib3RcIikge1xyXG4gICAgICAgIGNoYXQgPSAkKFwiI2JvdC1jaGF0LWN1cnJlbnRcIik7XHJcbiAgICAgICAgY2xvY2sgPSAkKFwiI2JvdC1jbG9jay1jdXJyZW50XCIpO1xyXG4gICAgICAgIGNoYXRUb1JlbW92ZSA9ICQoXCIjdXNlci1jaGF0LWN1cnJlbnRcIik7XHJcbiAgICAgICAgY2xvY2tUb1JlbW92ZSA9ICQoXCIjdXNlci1jbG9jay1jdXJyZW50XCIpO1xyXG4gICAgICAgIGNsb2NrVGV4dCA9ICc8ZGl2IGNsYXNzPVwiY2xvY2stdGV4dCBib3QtY2xvY2stdGV4dFwiPicgKyB0aW1lICsgXCI8L2Rpdj5cIjtcclxuICAgICAgICAkKFwiLmJvdC5sYXN0XCIpLnJlbW92ZUNsYXNzKFwibGFzdFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hhdCA9ICQoXCIjdXNlci1jaGF0LWN1cnJlbnRcIik7XHJcbiAgICAgICAgY2xvY2sgPSAkKFwiI3VzZXItY2xvY2stY3VycmVudFwiKTtcclxuICAgICAgICBjaGF0VG9SZW1vdmUgPSAkKFwiI2JvdC1jaGF0LWN1cnJlbnRcIik7XHJcbiAgICAgICAgY2xvY2tUb1JlbW92ZSA9ICQoXCIjYm90LWNsb2NrLWN1cnJlbnRcIik7XHJcbiAgICAgICAgJChcIi5yb3ctY3VycmVudFwiKS5hZGRDbGFzcyhcImhlaWdodC1zaGlmdFwiKTtcclxuICAgICAgICBjbG9ja1RleHQgPVxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNsb2NrLXRleHQgdXNlci1jbG9jay10ZXh0XCIgc3R5bGU9XCJoZWlnaHQ6MTAwJTttYXgtaGVpZ2h0OjEwMCVcIj4nICtcclxuICAgICAgICAgICAgdGltZSArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgJChcIi51c2VyLmxhc3RcIikucmVtb3ZlQ2xhc3MoXCJsYXN0XCIpO1xyXG4gICAgfVxyXG4gICAgY2hhdC5hZGRDbGFzcyhcImxhc3RcIik7XHJcbiAgICBjbG9ja1RvUmVtb3ZlLnJlbW92ZSgpO1xyXG4gICAgY2hhdFRvUmVtb3ZlLnJlbW92ZSgpO1xyXG4gICAgY2xvY2suYXBwZW5kKGNsb2NrVGV4dCk7XHJcbiAgICBjbG9jay5yZW1vdmVBdHRyKFwiaWRcIik7XHJcbiAgICBsZXQgcmV0dXJuVmFsdWU7XHJcblxyXG4gICAgc3dpdGNoIChvcHRpb25zLnN0eWxlKSB7XHJcbiAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgICAgY2hhdC5hcHBlbmQoYDxwIGNsYXNzPVwiY2hhdC10ZXh0XCI+JHtvcHRpb25zLnRleHR9PC9wPmApO1xyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGRlbGF5KDEwMDApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZm9ybVwiOlxyXG4gICAgICAgICAgICBjaGF0LmFwcGVuZChcclxuICAgICAgICAgICAgICAgICc8cCBjbGFzcz1cImNoYXQtdGV4dFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudGV4dCArXHJcbiAgICAgICAgICAgICAgICAgICAgYDwvcD48ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPiBcXFxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIiR7b3B0aW9ucy5maWVsZH0taW5wdXRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciAke29wdGlvbnMuZmllbGR9XCIgYXJpYS1sYWJlbD1cIllvdXIgJHtvcHRpb25zLmZpZWxkfVwiIGFyaWEtZGVzY3JpYmVkYnk9XCIke29wdGlvbnMuZmllbGR9LXN1Ym1pdFwiPiBcXCBcclxuICBcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+IFxcXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIGlkPVwiJHtvcHRpb25zLmZpZWxkfS1zdWJtaXRcIj4gb2s8L3NwYW4+PC9kaXY+PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbGV0IGdvID0gJChgIyR7b3B0aW9ucy5maWVsZH0tc3VibWl0YCk7XHJcbiAgICAgICAgICAgIHBhdXNlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGdvLm9uKFwiY2xpY2tcIiwgdW5wYXVzZSk7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gcGF1c2VVbnRpbChgIyR7b3B0aW9ucy5maWVsZH0taW5wdXRgLCAodmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS52YWwoKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInBvcnRmb2xpb1wiOlxyXG4gICAgICAgICAgICBjaGF0LmFwcGVuZCgnPHAgY2xhc3M9XCJjaGF0LXRleHRcIj4nICsgb3B0aW9ucy50ZXh0ICsgXCI8L3A+XCIpO1xyXG4gICAgICAgICAgICBsZXQgc2l6ZXMgPSBbXHJcbiAgICAgICAgICAgICAgICBcIkxlc3MgdGhhbiAkMTAwLDAwMCBvZiBpbnZlc3RhYmxlIGFzc2V0cyBzYXZlZCBmb3IgcmV0aXJlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJCZXR3ZWVuICQxMDAsMDAwIGFuZCAkMjUwLDAwMCBvZiBpbnZlc3RhYmxlIGFzc2V0cyBzYXZlZCBmb3IgcmV0aXJlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJCZXR3ZWVuICQyNTAsMDAwIGFuZCAkNTAwLDAwMCBvZiBpbnZlc3RhYmxlIGFzc2V0cyBzYXZlZCBmb3IgcmV0aXJlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJCZXR3ZWVuICQ1MDAsMDAwIGFuZCAkMSwwMDAsMDAwIG9mIGludmVzdGFibGUgYXNzZXRzIHNhdmVkIGZvciByZXRpcmVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcIk92ZXIgJDEsMDAwLDAwMCBvZiBpbnZlc3RhYmxlIGFzc2V0cyBzYXZlZCBmb3IgcmV0aXJlbWVudFwiLFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY2hhdC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tc2VsZWN0aW9uXCI+Jyk7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3Rpb24gPSAkKFwiLnBvcnRmb2xpby1zZWxlY3Rpb25cIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2l6ZSBvZiBzaXplcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpZ2h0IHBvcnRmb2xpby1idXR0b25cIj4ke3NpemV9PC9idXR0b24+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxlY3Rpb24ub24oXCJjbGlja1wiLCBcImJ1dHRvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJpZFwiLCBcInBvcnRmb2xpby1zaXplXCIpO1xyXG4gICAgICAgICAgICAgICAgdW5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2hhdC5hcHBlbmQoXCI8L2Rpdj5cIik7XHJcblxyXG4gICAgICAgICAgICBwYXVzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gcGF1c2VVbnRpbChcIiNwb3J0Zm9saW8tc2l6ZVwiLCAodmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS50ZXh0KClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImNhcHRjaGFcIjpcclxuICAgICAgICAgICAgY2hhdC5hcHBlbmQoJzxwIGNsYXNzPVwiY2hhdC10ZXh0XCI+JyArIG9wdGlvbnMudGV4dCArIFwiPC9wPlwiKTtcclxuICAgICAgICAvLyAgICAgY2hhdC5hcHBlbmQoYDxidXR0b24gaWQ9XCJzdWJtaXQtYnV0dG9uXCIgXHJcbiAgICAgICAgLy8gICAgIGNsYXNzPVwiZy1yZWNhcHRjaGEgYnRuIGJ0bi1saWdodFwiIFxyXG4gICAgICAgIC8vIGRhdGEtc2l0ZWtleT1cInJlQ0FQVENIQV9zaXRlX2tleVwiIFxyXG4gICAgICAgIC8vIGRhdGEtY2FsbGJhY2s9XCJvblN1Ym1pdFwiIFxyXG4gICAgICAgIC8vIGRhdGEtYWN0aW9uPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+YCk7XHJcblxyXG4gICAgICAgIC8vICAgICAkKFwiI3N1Ym1pdC1idXR0b25cIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBncmVjYXB0Y2hhLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBncmVjYXB0Y2hhXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC5leGVjdXRlKFwiNkxkNEx5UWFBQUFBQUFjSmdJQU1KUUNRM0ItQXJjaHpuQmtXUjdBOVwiLCB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwic3VibWl0XCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vdXMtc291dGguZnVuY3Rpb25zLmFwcGRvbWFpbi5jbG91ZC9hcGkvdjEvd2ViL2R3c3RhbmxleSU0MGludGVncml0eWZpbmFuY2lhbHNlcnZpY2VsbGMuY29tX2Rldi9teXNpdGUvY29udGFjdHVzXCI7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB4bWxodHRwLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB4bWxodHRwLnNldFJlcXVlc3RIZWFkZXIoXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgeG1saHR0cC5vbmxvYWQgPSAoKSA9PiBjb25zb2xlLmxvZyh4bWxodHRwLnN0YXR1cyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB4bWxodHRwLnNlbmQoXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYG5hbWU9JHtmaWVsZHMubmFtZX0mcGhvbmU9JHtmaWVsZHMucGhvbmV9JmVtYWlsPSR7ZmllbGRzLmVtYWlsfSZwb3J0Zm9saW9TaXplPSR7ZmllbGRzLnBvcnRmb2xpb1NpemV9JnRva2VuPSR7dG9rZW59YFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMud3JpdGVyID09PSBcImJvdFwiKSB7XHJcbiAgICAgICAgaWYgKCQoXCIuY29udGVudC1jb2x1bW5cIikubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBsZXQgbG9nb1NoaWZ0RG93biA9XHJcbiAgICAgICAgICAgICAgICAkKFwiLnJvdy1jdXJyZW50XCIpLmhlaWdodCgpIC8gMiArXHJcbiAgICAgICAgICAgICAgICAkKFwiI2xhc3QtYm90LXJvd1wiKS5oZWlnaHQoKSAvIDI7XHJcbiAgICAgICAgICAgIGxldCByb3dzVG9TaGlmdCA9ICQoXCIuaGVpZ2h0LXNoaWZ0XCIpO1xyXG4gICAgICAgICAgICBpZiAocm93c1RvU2hpZnQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByb3dzVG9TaGlmdC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dvU2hpZnREb3duICs9ICQodGhpcykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI2JvdC1sb2dvLWN1cnJlbnRcIikudmVsb2NpdHkoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBsb2dvU2hpZnREb3duLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5RdWFkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NUb1NoaWZ0LnJlbW92ZUNsYXNzKFwiaGVpZ2h0LXNoaWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICQoXCIjbGFzdC1ib3Qtcm93XCIpLnJlbW92ZUF0dHIoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjYm90LWxvZ28tY3VycmVudFwiKS5yZW1vdmVBdHRyKFwiaWRcIik7XHJcbiAgICAgICAgICAgICQoXCJib3QtbG9nb1wiKS5sYXN0KCkuYXR0cihcImlkXCIsIFwiYm90LWxvZ28tY3VycmVudFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNsZWZ0LXRhZy1jdXJyZW50XCIpLmFwcGVuZChsb2dvVGV4dCk7XHJcbiAgICAgICAgJChcIi5yb3ctY3VycmVudFwiKS5hdHRyKFwiaWRcIiwgXCJsYXN0LWJvdC1yb3dcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IHJldHVyblZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxheShtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9LCBtcyk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiB1bnBhdXNlKCkge1xyXG4gICAgcGF1c2UgPSBmYWxzZTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBwYXVzZVVudGlsKGVsZW1lbnQsIGZuKSB7XHJcbiAgICB3aGlsZSAocGF1c2UpIHtcclxuICAgICAgICBhd2FpdCBkZWxheSgxMDApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZuKCQoZWxlbWVudCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmNyeXB0Rm9ybURhdGEoZGF0YSkge1xyXG4gICAgbGV0IHB1YmxpY0tleTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gb25DbGljayhlKSB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBncmVjYXB0Y2hhLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICBncmVjYXB0Y2hhXHJcbi8vICAgICAgICAgICAgIC5leGVjdXRlKFwiNkxkNEx5UWFBQUFBQUFjSmdJQU1KUUNRM0ItQXJjaHpuQmtXUjdBOVwiLCB7XHJcbi8vICAgICAgICAgICAgICAgICBhY3Rpb246IFwic3VibWl0XCIsXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh0b2tlbikge1xyXG4vLyAgICAgICAgICAgICAgICAgLy8gQWRkIHlvdXIgbG9naWMgdG8gc3VibWl0IHRvIHlvdXIgYmFja2VuZCBzZXJ2ZXIgaGVyZS5cclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuLy8gfVxyXG4iXX0=
