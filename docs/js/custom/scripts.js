"use strict";function asyncGeneratorStep(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(c){return function(){var t=this,i=arguments;return new Promise(function(e,r){var n=c.apply(t,i);function o(t){asyncGeneratorStep(n,e,r,o,a,"next",t)}function a(t){asyncGeneratorStep(n,e,r,o,a,"throw",t)}o(void 0)})}}var pause;document.querySelector("#clickMe").addEventListener("click",openPopup),document.querySelector("#clickMe1").addEventListener("click",openPopup),document.querySelector("#closePopup").addEventListener("click",closePopup);var el=$("#popup"),inner=$(".popup-inner");function openPopup(){inner.attr("style","margin-right:20px"),el.removeClass("fade-out").addClass("fade-in"),el.attr("style","visibility:visible"),$("body").css({overflow:"hidden"})}function closePopup(){inner.attr("style","margin-right:0px"),el.removeClass("fade-in").addClass("fade-out"),el.attr("style","visibility:hidden"),768<=$(window).width()&&$("body").css({overflow:"auto"})}var privacyLink="http://integrityfinancialservicellc.com/wp-content/uploads/2015/05/IFS-Privacy-Pledge-and-Notification.pdf",fields={name:"",email:"",phone:"",portfolioSize:""};function writeText(t){return _writeText.apply(this,arguments)}function _writeText(){return(_writeText=_asyncToGenerator(regeneratorRuntime.mark(function t(e){var r,n,o,a,i,c,s,u,l,d,p;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:$(".row-current").removeClass("row-current"),$("#bot-chat-current").removeAttr("id"),$("#user-chat-current").removeAttr("id"),$("#left-tag-current").removeAttr("id"),$("#right-tag-current").removeAttr("id"),$("#popup-window").append('<div class="row align-items-center chat-row row-current"> \t\t\t\t\t\t<div class="col-md-1 col-xl-2 padding-column"> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div id="left-tag-current" class="col-2 col-sm-1 logo-column"> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="col-8 col-sm-10 col-md-8 col-xl-6 content-column"> \t\t\t\t\t\t\t<div id="bot-chat-current" class="chat-bubble bot chat-fade-in"> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t<div id="user-chat-current" class="chat-bubble user float-right chat-fade-in"> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div id="right-tag-current" class="col-2 col-sm-1 logo-column"> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="col-md-1 col-xl-2 padding-column"> \t\t\t\t\t\t</div> \t\t\t\t\t</div>'),"bot"===e.writer?(r=1<$(".chat-row").length?'<img id="bot-logo-current" src="images/IFSLogo.png" class="bot-logo logo-pop-in">':'<img id="bot-logo-current" src="images/IFSLogo.png" class="bot-logo">',$("#right-tag-current").append('<div id="bot-clock-current" class="bot-clock"></div>')):$("#left-tag-current").append('<div id="user-clock-current" class="user-clock"></div>'),s=new Date,s=s.getHours()+":"+s.getMinutes()+":"+s.getSeconds(),"bot"===e.writer?(n=$("#bot-chat-current"),o=$("#bot-clock-current"),i=$("#user-chat-current"),a=$("#user-clock-current"),c='<div class="clock-text bot-clock-text">'+s+"</div>",$(".bot.last").removeClass("last")):(n=$("#user-chat-current"),o=$("#user-clock-current"),i=$("#bot-chat-current"),a=$("#bot-clock-current"),$(".row-current").addClass("height-shift"),c='<div class="clock-text user-clock-text" style="height:100%;max-height:100%">'+s+"</div>",$(".user.last").removeClass("last")),n.addClass("last"),a.remove(),i.remove(),o.append(c),o.removeAttr("id"),t.t0=e.style,t.next="text"===t.t0?19:"form"===t.t0?22:"button"===t.t0?28:38;break;case 19:return n.append('<p class="chat-text">'+e.text+"</p>"),u=delay(1e3),t.abrupt("break",38);case 22:return n.append('<p class="chat-text">'+e.text+'</p><div class="input-group mb-3"> \t\t\t<input type="text" id="'.concat(e.field,'-input" class="form-control" placeholder="Your ').concat(e.field,'" aria-label="Your ').concat(e.field,'" aria-describedby="').concat(e.field,'-submit">  \n  \t\t\t<div class="input-group-append"> \t\t\t<span class="input-group-text" id="').concat(e.field,'-submit"> ok</span></div></div>')),l=$("#".concat(e.field,"-submit")),pause=!0,l.on("click",unpause),u=pauseUntil("#".concat(e.field,"-input")),t.abrupt("break",38);case 28:return l=document.createElement("a"),n[0].parentNode.replaceChild(l,n[0]),l.appendChild(n[0]),l.classList.add("chat-button"),n.append('<p class="chat-text">'+e.text+"</p>"),pause=!0,n.on("click",unpause),u=pauseUntil(),t.abrupt("break",38);case 38:return"bot"===e.writer&&(1<$(".content-column").length&&(d=$(".row-current").height()/2+$("#last-bot-row").height()/2,0!==(p=$(".height-shift")).length&&p.each(function(){d+=$(this).height()}),$("#bot-logo-current").velocity({top:d},{duration:400,easing:"easeInQuad",complete:function(t){setTimeout(function(){$(t).css("visibility","hidden").removeAttr("id"),p.removeClass("height-shift")},300)}}),$("#last-bot-row").removeAttr("id"),$("#bot-logo-current").removeAttr("id"),$("bot-logo").last().attr("id","bot-logo-current")),$("#left-tag-current").append(r),$(".row-current").attr("id","last-bot-row")),t.next=41,u;case 41:return t.abrupt("return",t.sent);case 42:case"end":return t.stop()}},t)}))).apply(this,arguments)}function delay(r){return new Promise(function(t,e){setTimeout(function(){t(null)},r)})}function unpause(){pause=!1}function pauseUntil(t){return _pauseUntil.apply(this,arguments)}function _pauseUntil(){return(_pauseUntil=_asyncToGenerator(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(pause)return t.next=3,delay(100);t.next=5;break;case 3:t.next=0;break;case 5:return t.abrupt("return",$(e).val());case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function encryptFormData(t){}$(_asyncToGenerator(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,writeText({text:"Our book has been requested over NaN times!",style:"text",writer:"bot"});case 2:return t.next=4,writeText({text:"All we need some information to determine whether this book suits your needs.",style:"text",writer:"bot"});case 4:return t.next=6,writeText({text:"First let's make sure you're not a robot.  Click on this bubble.",style:"button",writer:"bot"});case 6:return t.next=8,writeText({text:"I'm not a robot!",style:"text",writer:"user"});case 8:return t.next=10,writeText({text:"Perfect! What's your name?",style:"form",field:"name",writer:"bot"});case 10:return fields.name=t.sent,t.next=13,writeText({text:fields.name,style:"text",writer:"user"});case 13:return t.next=15,writeText({text:"Great! Nice to meet you ".concat(fields.name,"!"),style:"text",writer:"bot"});case 15:return t.next=17,writeText({text:"Before we go any further, we want you to know we take your data VERY seriously.",style:"text",writer:"bot"});case 17:return t.next=19,writeText({text:"<a href=".concat(privacyLink,' target="_blank">Here</a> is our privacy policy.'),style:"text",writer:"bot"});case 19:return t.next=21,writeText({text:"What's a good phone number to reach you at? (We won't spam you; only a one time confirmation)",style:"form",field:"phone",writer:"bot"});case 21:return fields.phone=t.sent,t.next=24,writeText({text:fields.phone,style:"text",writer:"user"});case 24:case"end":return t.stop()}},t)})));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsicGF1c2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwib3BlblBvcHVwIiwiaW5uZXIiLCJhdHRyIiwiZWwiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwib3ZlcmZsb3ciLCIkIiwid2luZG93IiwiY2xvc2VQb3B1cCIsImNzcyIsImZpZWxkcyIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwicG9ydGZvbGlvU2l6ZSIsIndyaXRlVGV4dCIsIl9jYWxsZWUyIiwib3B0aW9ucyIsImxvZ29UZXh0IiwiY2hhdCIsImNsb2NrIiwiY2xvY2tUb1JlbW92ZSIsImNoYXRUb1JlbW92ZSIsImNsb2NrVGV4dCIsInRpbWUiLCJyZXR1cm5WYWx1ZSIsIndyYXBwZXIiLCJsb2dvU2hpZnREb3duIiwicm93c1RvU2hpZnQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJ3cmFwIiwiX2NvbnRleHQyIiwicHJldiIsIm5leHQiLCJ0ZXh0IiwicmVtb3ZlQXR0ciIsInN0eWxlIiwid3JpdGVyIiwiYXBwZW5kIiwiZCIsIkRhdGUiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInJlbW92ZSIsInQwIiwiZGVsYXkiLCJhYnJ1cHQiLCJjb25jYXQiLCJmaWVsZCIsInVucGF1c2UiLCJwYXVzZVVudGlsIiwiY3JlYXRlRWxlbWVudCIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRIb3VycyIsImxlbmd0aCIsImhlaWdodCIsInZlbG9jaXR5IiwiZWFzaW5nIiwiY29tcGxldGUiLCJlbGVtZW50Iiwic2VudCIsInN0b3AiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInBhcmVudCIsInZhbCIsIl9hc3luY1RvR2VuZXJhdG9yIiwibWFyayIsIl9jYWxsZWUiLCJfY29udGV4dCIsInByaXZhY3lMaW5rIl0sIm1hcHBpbmdz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QUFzQyxFQUFBWCxTQUFBVSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsaWNrTWUnKS5vbmNsaWNrKGNoYXRib3QoKSk7XHJcbi8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsaWNrTWUxJykub25jbGljayhjaGF0Ym90KCkpO1xyXG5cclxuLy9JdCBXT3JrZWQhfn5cclxuXHJcbi8qZnVuY3Rpb24gY2hhdGJvdCgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yXHRcclxufVxyXG4qL1xyXG5cclxudmFyIHBhdXNlO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsaWNrTWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qb3B1cCk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xpY2tNZTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qb3B1cCk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VQb3B1cFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQb3B1cCk7XHJcbmxldCBlbCA9ICQoXCIjcG9wdXBcIik7XHJcbmxldCBpbm5lciA9ICQoXCIucG9wdXAtaW5uZXJcIik7XHJcblxyXG5mdW5jdGlvbiBvcGVuUG9wdXAoKSB7XHJcbiAgaW5uZXIuYXR0cihcInN0eWxlXCIsIFwibWFyZ2luLXJpZ2h0OjIwcHhcIik7XHJcbiAgZWwucmVtb3ZlQ2xhc3MoXCJmYWRlLW91dFwiKS5hZGRDbGFzcyhcImZhZGUtaW5cIik7XHJcbiAgZWwuYXR0cihcInN0eWxlXCIsIFwidmlzaWJpbGl0eTp2aXNpYmxlXCIpO1xyXG4gICQoXCJib2R5XCIpLmNzcyh7IG92ZXJmbG93OiBcImhpZGRlblwiIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZVBvcHVwKCkge1xyXG4gIGlubmVyLmF0dHIoXCJzdHlsZVwiLCBcIm1hcmdpbi1yaWdodDowcHhcIik7XHJcbiAgZWwucmVtb3ZlQ2xhc3MoXCJmYWRlLWluXCIpLmFkZENsYXNzKFwiZmFkZS1vdXRcIik7XHJcbiAgZWwuYXR0cihcInN0eWxlXCIsIFwidmlzaWJpbGl0eTpoaWRkZW5cIik7XHJcbiAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDc2OCkge1xyXG4gICAgJChcImJvZHlcIikuY3NzKHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLypHZXQgZXhpc3Rpbmcgcm93IGhlaWdodCwgYWRkIDFyZW0gZm9yIGV2ZXJ5IHRpbWUgY2hhdC1idWJibGUgdGV4dCB3aWxsIHdyYXAsIGFuaW1hdGUgYm90LWxvZ28ncyBzaGlmdCBkb3duIHdpdGggdG9wOlxyXG4gIG1vdmUgYm90LWxvZ28gdG8gbmV3IHJvdyBhZnRlciBhbmltYXRpb24gdGltZW91dCovXHJcbmxldCBwcml2YWN5TGluayA9ICdodHRwOi8vaW50ZWdyaXR5ZmluYW5jaWFsc2VydmljZWxsYy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDUvSUZTLVByaXZhY3ktUGxlZGdlLWFuZC1Ob3RpZmljYXRpb24ucGRmJztcclxubGV0IGZpZWxkcyA9IHtcclxuXHQgIG5hbWU6IFwiXCIsXHJcblx0ICBlbWFpbDogXCJcIixcclxuXHQgIHBob25lOiBcIlwiLFxyXG5cdCAgcG9ydGZvbGlvU2l6ZTogXCJcIlxyXG4gIH1cclxuJChhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgYXdhaXQgd3JpdGVUZXh0KHtcclxuICAgIHRleHQ6IFwiT3VyIGJvb2sgaGFzIGJlZW4gcmVxdWVzdGVkIG92ZXIgTmFOIHRpbWVzIVwiLFxyXG4gICAgc3R5bGU6IFwidGV4dFwiLFxyXG4gICAgd3JpdGVyOiBcImJvdFwiLFxyXG4gIH0pO1xyXG4gIGF3YWl0IHdyaXRlVGV4dCh7XHJcbiAgICB0ZXh0OlxyXG4gICAgICBcIkFsbCB3ZSBuZWVkIHNvbWUgaW5mb3JtYXRpb24gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBib29rIHN1aXRzIHlvdXIgbmVlZHMuXCIsXHJcbiAgICBzdHlsZTogXCJ0ZXh0XCIsXHJcbiAgICB3cml0ZXI6IFwiYm90XCIsXHJcbiAgfSk7XHJcbiAgYXdhaXQgd3JpdGVUZXh0KHtcclxuICAgIHRleHQ6IFwiRmlyc3QgbGV0J3MgbWFrZSBzdXJlIHlvdSdyZSBub3QgYSByb2JvdC4gIENsaWNrIG9uIHRoaXMgYnViYmxlLlwiLFxyXG4gICAgc3R5bGU6IFwiYnV0dG9uXCIsXHJcbiAgICB3cml0ZXI6IFwiYm90XCIsXHJcbiAgfSk7XHJcbiAgYXdhaXQgd3JpdGVUZXh0KHsgdGV4dDogXCJJJ20gbm90IGEgcm9ib3QhXCIsIHN0eWxlOiBcInRleHRcIiwgd3JpdGVyOiBcInVzZXJcIiB9KTtcclxuICBmaWVsZHMubmFtZSA9IGF3YWl0IHdyaXRlVGV4dCh7XHJcbiAgICB0ZXh0OiBcIlBlcmZlY3QhIFdoYXQncyB5b3VyIG5hbWU/XCIsXHJcbiAgICBzdHlsZTogXCJmb3JtXCIsXHJcbiAgICBmaWVsZDogXCJuYW1lXCIsXHJcbiAgICB3cml0ZXI6IFwiYm90XCIsXHJcbiAgfSk7XHJcbiAgYXdhaXQgd3JpdGVUZXh0KHsgdGV4dDogZmllbGRzLm5hbWUsIHN0eWxlOiBcInRleHRcIiwgd3JpdGVyOiBcInVzZXJcIiB9KTtcclxuICBhd2FpdCB3cml0ZVRleHQoe1xyXG4gICAgdGV4dDogYEdyZWF0ISBOaWNlIHRvIG1lZXQgeW91ICR7ZmllbGRzLm5hbWV9IWAsXHJcbiAgICBzdHlsZTogXCJ0ZXh0XCIsXHJcbiAgICB3cml0ZXI6IFwiYm90XCIsXHJcbiAgfSk7XHJcbiAgYXdhaXQgd3JpdGVUZXh0KHtcclxuICAgIHRleHQ6XHJcbiAgICAgIFwiQmVmb3JlIHdlIGdvIGFueSBmdXJ0aGVyLCB3ZSB3YW50IHlvdSB0byBrbm93IHdlIHRha2UgeW91ciBkYXRhIFZFUlkgc2VyaW91c2x5LlwiLFxyXG4gICAgc3R5bGU6IFwidGV4dFwiLFxyXG4gICAgd3JpdGVyOiBcImJvdFwiLFxyXG4gIH0pO1xyXG4gIGF3YWl0IHdyaXRlVGV4dCh7XHJcbiAgICB0ZXh0OmA8YSBocmVmPSR7cHJpdmFjeUxpbmt9IHRhcmdldD1cIl9ibGFua1wiPkhlcmU8L2E+IGlzIG91ciBwcml2YWN5IHBvbGljeS5gLFxyXG4gICAgc3R5bGU6IFwidGV4dFwiLFxyXG4gICAgd3JpdGVyOiBcImJvdFwiLFxyXG4gIH0pO1xyXG5cclxuICBmaWVsZHMucGhvbmUgPSBhd2FpdCB3cml0ZVRleHQoe1xyXG4gICAgdGV4dDpcclxuICAgICAgXCJXaGF0J3MgYSBnb29kIHBob25lIG51bWJlciB0byByZWFjaCB5b3UgYXQ/IChXZSB3b24ndCBzcGFtIHlvdTsgb25seSBhIG9uZSB0aW1lIGNvbmZpcm1hdGlvbilcIixcclxuICAgIHN0eWxlOiBcImZvcm1cIixcclxuICAgIGZpZWxkOiBcInBob25lXCIsXHJcbiAgICB3cml0ZXI6IFwiYm90XCIsXHJcbiAgfSk7XHJcbiAgYXdhaXQgd3JpdGVUZXh0KHsgdGV4dDogZmllbGRzLnBob25lLCBzdHlsZTogXCJ0ZXh0XCIsIHdyaXRlcjogXCJ1c2VyXCIgfSk7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gd3JpdGVUZXh0KG9wdGlvbnMpIHtcclxuICBjb25zdCBidWJibGVIVE1MID1cclxuICAgICc8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBjaGF0LXJvdyByb3ctY3VycmVudFwiPiBcXFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEgY29sLXhsLTIgcGFkZGluZy1jb2x1bW5cIj4gXFxcclxuXHRcdFx0XHRcdFx0PC9kaXY+IFxcXHJcblx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJsZWZ0LXRhZy1jdXJyZW50XCIgY2xhc3M9XCJjb2wtMiBjb2wtc20tMSBsb2dvLWNvbHVtblwiPiBcXFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4gXFxcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC04IGNvbC1zbS0xMCBjb2wtbWQtOCBjb2wteGwtNiBjb250ZW50LWNvbHVtblwiPiBcXFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJib3QtY2hhdC1jdXJyZW50XCIgY2xhc3M9XCJjaGF0LWJ1YmJsZSBib3QgY2hhdC1mYWRlLWluXCI+IFxcXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+IFxcXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cInVzZXItY2hhdC1jdXJyZW50XCIgY2xhc3M9XCJjaGF0LWJ1YmJsZSB1c2VyIGZsb2F0LXJpZ2h0IGNoYXQtZmFkZS1pblwiPiBcXFxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PiBcXFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4gXFxcclxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cInJpZ2h0LXRhZy1jdXJyZW50XCIgY2xhc3M9XCJjb2wtMiBjb2wtc20tMSBsb2dvLWNvbHVtblwiPiBcXFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4gXFxcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xIGNvbC14bC0yIHBhZGRpbmctY29sdW1uXCI+IFxcXHJcblx0XHRcdFx0XHRcdDwvZGl2PiBcXFxyXG5cdFx0XHRcdFx0PC9kaXY+JztcclxuXHJcbiAgJChcIi5yb3ctY3VycmVudFwiKS5yZW1vdmVDbGFzcyhcInJvdy1jdXJyZW50XCIpO1xyXG4gICQoXCIjYm90LWNoYXQtY3VycmVudFwiKS5yZW1vdmVBdHRyKFwiaWRcIik7XHJcbiAgJChcIiN1c2VyLWNoYXQtY3VycmVudFwiKS5yZW1vdmVBdHRyKFwiaWRcIik7XHJcbiAgJChcIiNsZWZ0LXRhZy1jdXJyZW50XCIpLnJlbW92ZUF0dHIoXCJpZFwiKTtcclxuICAkKFwiI3JpZ2h0LXRhZy1jdXJyZW50XCIpLnJlbW92ZUF0dHIoXCJpZFwiKTtcclxuXHJcbiAgbGV0IGxvZ29UZXh0O1xyXG4gICQoXCIjcG9wdXAtd2luZG93XCIpLmFwcGVuZChidWJibGVIVE1MKTtcclxuICBpZiAob3B0aW9ucy53cml0ZXIgPT09IFwiYm90XCIpIHtcclxuICAgIGlmICgkKFwiLmNoYXQtcm93XCIpLmxlbmd0aCA+IDEpIHtcclxuICAgICAgbG9nb1RleHQgPSAnPGltZyBpZD1cImJvdC1sb2dvLWN1cnJlbnRcIiBzcmM9XCJpbWFnZXMvSUZTTG9nby5wbmdcIiBjbGFzcz1cImJvdC1sb2dvIGxvZ28tcG9wLWluXCI+JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZ29UZXh0ID0gJzxpbWcgaWQ9XCJib3QtbG9nby1jdXJyZW50XCIgc3JjPVwiaW1hZ2VzL0lGU0xvZ28ucG5nXCIgY2xhc3M9XCJib3QtbG9nb1wiPic7XHJcbiAgICB9XHJcbiAgICAkKFwiI3JpZ2h0LXRhZy1jdXJyZW50XCIpLmFwcGVuZChcclxuICAgICAgJzxkaXYgaWQ9XCJib3QtY2xvY2stY3VycmVudFwiIGNsYXNzPVwiYm90LWNsb2NrXCI+PC9kaXY+J1xyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJChcIiNsZWZ0LXRhZy1jdXJyZW50XCIpLmFwcGVuZChcclxuICAgICAgJzxkaXYgaWQ9XCJ1c2VyLWNsb2NrLWN1cnJlbnRcIiBjbGFzcz1cInVzZXItY2xvY2tcIj48L2Rpdj4nXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNoYXQsIGNsb2NrLCBjbG9ja1RvUmVtb3ZlLCBjaGF0VG9SZW1vdmUsIGNsb2NrVGV4dDtcclxuICBsZXQgZCA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IHRpbWUgPSBkLmdldEhvdXJzKCkgKyBcIjpcIiArIGQuZ2V0TWludXRlcygpICsgXCI6XCIgKyBkLmdldFNlY29uZHMoKTtcclxuXHJcbiAgaWYgKG9wdGlvbnMud3JpdGVyID09PSBcImJvdFwiKSB7XHJcbiAgICBjaGF0ID0gJChcIiNib3QtY2hhdC1jdXJyZW50XCIpO1xyXG4gICAgY2xvY2sgPSAkKFwiI2JvdC1jbG9jay1jdXJyZW50XCIpO1xyXG4gICAgY2hhdFRvUmVtb3ZlID0gJChcIiN1c2VyLWNoYXQtY3VycmVudFwiKTtcclxuICAgIGNsb2NrVG9SZW1vdmUgPSAkKFwiI3VzZXItY2xvY2stY3VycmVudFwiKTtcclxuXHRjbG9ja1RleHQgPSAnPGRpdiBjbGFzcz1cImNsb2NrLXRleHQgYm90LWNsb2NrLXRleHRcIj4nICsgdGltZSArIFwiPC9kaXY+XCI7XHJcblx0JCgnLmJvdC5sYXN0JykucmVtb3ZlQ2xhc3MoJ2xhc3QnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2hhdCA9ICQoXCIjdXNlci1jaGF0LWN1cnJlbnRcIik7XHJcbiAgICBjbG9jayA9ICQoXCIjdXNlci1jbG9jay1jdXJyZW50XCIpO1xyXG4gICAgY2hhdFRvUmVtb3ZlID0gJChcIiNib3QtY2hhdC1jdXJyZW50XCIpO1xyXG4gICAgY2xvY2tUb1JlbW92ZSA9ICQoXCIjYm90LWNsb2NrLWN1cnJlbnRcIik7XHJcbiAgICAkKFwiLnJvdy1jdXJyZW50XCIpLmFkZENsYXNzKFwiaGVpZ2h0LXNoaWZ0XCIpO1xyXG4gICAgY2xvY2tUZXh0ID1cclxuICAgICAgJzxkaXYgY2xhc3M9XCJjbG9jay10ZXh0IHVzZXItY2xvY2stdGV4dFwiIHN0eWxlPVwiaGVpZ2h0OjEwMCU7bWF4LWhlaWdodDoxMDAlXCI+JyArXHJcbiAgICAgIHRpbWUgK1xyXG4gICAgICBcIjwvZGl2PlwiO1xyXG5cdCQoJy51c2VyLmxhc3QnKS5yZW1vdmVDbGFzcygnbGFzdCcpO1xyXG4gIH1cclxuICBjaGF0LmFkZENsYXNzKFwibGFzdFwiKTtcclxuICBjbG9ja1RvUmVtb3ZlLnJlbW92ZSgpO1xyXG4gIGNoYXRUb1JlbW92ZS5yZW1vdmUoKTtcclxuICBjbG9jay5hcHBlbmQoY2xvY2tUZXh0KTtcclxuICBjbG9jay5yZW1vdmVBdHRyKFwiaWRcIik7XHJcbiAgbGV0IHJldHVyblZhbHVlO1xyXG5cclxuICBzd2l0Y2ggKG9wdGlvbnMuc3R5bGUpIHtcclxuICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgIGNoYXQuYXBwZW5kKCc8cCBjbGFzcz1cImNoYXQtdGV4dFwiPicgKyBvcHRpb25zLnRleHQgKyBcIjwvcD5cIik7XHJcbiAgICAgIHJldHVyblZhbHVlID0gZGVsYXkoMTAwMCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImZvcm1cIjpcclxuICAgICAgY2hhdC5hcHBlbmQoXHJcbiAgICAgICAgJzxwIGNsYXNzPVwiY2hhdC10ZXh0XCI+JyArXHJcbiAgICAgICAgICBvcHRpb25zLnRleHQgK1xyXG4gICAgICAgICAgYDwvcD48ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPiBcXFxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIiR7b3B0aW9ucy5maWVsZH0taW5wdXRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciAke29wdGlvbnMuZmllbGR9XCIgYXJpYS1sYWJlbD1cIllvdXIgJHtvcHRpb25zLmZpZWxkfVwiIGFyaWEtZGVzY3JpYmVkYnk9XCIke29wdGlvbnMuZmllbGR9LXN1Ym1pdFwiPiBcXCBcclxuICBcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+IFxcXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIGlkPVwiJHtvcHRpb25zLmZpZWxkfS1zdWJtaXRcIj4gb2s8L3NwYW4+PC9kaXY+PC9kaXY+YFxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IGdvID0gJChgIyR7b3B0aW9ucy5maWVsZH0tc3VibWl0YCk7XHJcbiAgICAgIHBhdXNlID0gdHJ1ZTtcclxuXHJcbiAgICAgIGdvLm9uKFwiY2xpY2tcIiwgdW5wYXVzZSk7XHJcbiAgICAgIHJldHVyblZhbHVlID0gcGF1c2VVbnRpbChgIyR7b3B0aW9ucy5maWVsZH0taW5wdXRgKTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImJ1dHRvblwiOlxyXG4gICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBsZXQgcGFyZW50ID0gY2hhdFswXS5wYXJlbnROb2RlO1xyXG4gICAgICBwYXJlbnQucmVwbGFjZUNoaWxkKHdyYXBwZXIsIGNoYXRbMF0pO1xyXG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoYXRbMF0pO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjaGF0LWJ1dHRvblwiKTtcclxuICAgICAgY2hhdC5hcHBlbmQoJzxwIGNsYXNzPVwiY2hhdC10ZXh0XCI+JyArIG9wdGlvbnMudGV4dCArIFwiPC9wPlwiKTtcclxuXHJcbiAgICAgIHBhdXNlID0gdHJ1ZTtcclxuICAgICAgY2hhdC5vbihcImNsaWNrXCIsIHVucGF1c2UpO1xyXG4gICAgICByZXR1cm5WYWx1ZSA9IHBhdXNlVW50aWwoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIGlmIChvcHRpb25zLndyaXRlciA9PT0gXCJib3RcIikge1xyXG4gICAgaWYgKCQoXCIuY29udGVudC1jb2x1bW5cIikubGVuZ3RoID4gMSkge1xyXG4gICAgICBsZXQgbG9nb1NoaWZ0RG93biA9XHJcbiAgICAgICAgJChcIi5yb3ctY3VycmVudFwiKS5oZWlnaHQoKSAvIDIgK1xyXG4gICAgICAgICQoXCIjbGFzdC1ib3Qtcm93XCIpLmhlaWdodCgpIC8gMjsgXHJcbiAgICAgIGxldCByb3dzVG9TaGlmdCA9ICQoXCIuaGVpZ2h0LXNoaWZ0XCIpO1xyXG4gICAgICBpZiAocm93c1RvU2hpZnQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgcm93c1RvU2hpZnQuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBsb2dvU2hpZnREb3duICs9ICQodGhpcykuaGVpZ2h0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgJChcIiNib3QtbG9nby1jdXJyZW50XCIpLnZlbG9jaXR5KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvcDogbG9nb1NoaWZ0RG93bixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXHJcbiAgICAgICAgICBlYXNpbmc6IFwiZWFzZUluUXVhZFwiLFxyXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCQoZWxlbWVudCkuY3NzKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKS5yZW1vdmVBdHRyKFwiaWRcIik7XHJcbiAgICAgICAgICAgIHJvd3NUb1NoaWZ0LnJlbW92ZUNsYXNzKFwiaGVpZ2h0LXNoaWZ0XCIpO1xyXG5cdFx0XHR9LCAzMDApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIjbGFzdC1ib3Qtcm93XCIpLnJlbW92ZUF0dHIoXCJpZFwiKTtcclxuXHJcbiAgICAgICQoXCIjYm90LWxvZ28tY3VycmVudFwiKS5yZW1vdmVBdHRyKFwiaWRcIik7XHJcbiAgICAgICQoXCJib3QtbG9nb1wiKS5sYXN0KCkuYXR0cihcImlkXCIsIFwiYm90LWxvZ28tY3VycmVudFwiKTtcclxuICAgIH1cclxuICAgICQoXCIjbGVmdC10YWctY3VycmVudFwiKS5hcHBlbmQobG9nb1RleHQpO1xyXG4gICAgJChcIi5yb3ctY3VycmVudFwiKS5hdHRyKFwiaWRcIiwgXCJsYXN0LWJvdC1yb3dcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXdhaXQgcmV0dXJuVmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgfSwgbXMpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHVucGF1c2UoKSB7XHJcbiAgcGF1c2UgPSBmYWxzZTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBwYXVzZVVudGlsKGVsZW1lbnQpIHtcclxuICB3aGlsZSAocGF1c2UpIHtcclxuICAgIGF3YWl0IGRlbGF5KDEwMCk7XHJcbiAgfVxyXG4gIHJldHVybiAkKGVsZW1lbnQpLnZhbCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmNyeXB0Rm9ybURhdGEoZGF0YSkge1xyXG4gIGxldCBwdWJsaWNLZXk7XHJcbn0iXX0=