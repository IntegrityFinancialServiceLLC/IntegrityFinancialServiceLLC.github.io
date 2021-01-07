"use strict";
//document.querySelector('#clickMe').onclick(chatbot());
//document.querySelector('#clickMe1').onclick(chatbot());

//It WOrked!~~

/*function chatbot() {
	document.querySelector	
}
*/

var pause;
document.querySelector("#clickMe").addEventListener("click", openPopup);
document.querySelector("#clickMe1").addEventListener("click", openPopup);
document.querySelector("#closePopup").addEventListener("click", closePopup);
let el = $("#popup");
let inner = $(".popup-inner");

function openPopup() {
  inner.attr("style", "margin-right:20px");
  el.removeClass("fade-out").addClass("fade-in");
  el.attr("style", "visibility:visible");
  $("body").css({ overflow: "hidden" });
}

function closePopup() {
  inner.attr("style", "margin-right:0px");
  el.removeClass("fade-in").addClass("fade-out");
  el.attr("style", "visibility:hidden");
  if ($(window).width() >= 768) {
    $("body").css({ overflow: "auto" });
  }
}

/*Get existing row height, add 1rem for every time chat-bubble text will wrap, animate bot-logo's shift down with top:
  move bot-logo to new row after animation timeout*/
let privacyLink = 'http://integrityfinancialservicellc.com/wp-content/uploads/2015/05/IFS-Privacy-Pledge-and-Notification.pdf';
let fields = {
	  name: "",
	  email: "",
	  phone: "",
	  portfolioSize: ""
  }
$(async function () {
  await writeText({
    text: "Our book has been requested over NaN times!",
    style: "text",
    writer: "bot",
  });
  await writeText({
    text:
      "All we need some information to determine whether this book suits your needs.",
    style: "text",
    writer: "bot",
  });
  await writeText({
    text: "First let's make sure you're not a robot.  Click on this bubble.",
    style: "button",
    writer: "bot",
  });
  await writeText({ text: "I'm not a robot!", style: "text", writer: "user" });
  fields.name = await writeText({
    text: "Perfect! What's your name?",
    style: "form",
    field: "name",
    writer: "bot",
  });
  await writeText({ text: fields.name, style: "text", writer: "user" });
  await writeText({
    text: `Great! Nice to meet you ${fields.name}!`,
    style: "text",
    writer: "bot",
  });
  await writeText({
    text:
      "Before we go any further, we want you to know we take your data VERY seriously.",
    style: "text",
    writer: "bot",
  });
  await writeText({
    text:`<a href=${privacyLink} target="_blank">Here</a> is our privacy policy.`,
    style: "text",
    writer: "bot",
  });

  fields.phone = await writeText({
    text:
      "What's a good phone number to reach you at? (We won't spam you; only a one time confirmation)",
    style: "form",
    field: "phone",
    writer: "bot",
  });
  await writeText({ text: fields.phone, style: "text", writer: "user" });
});

async function writeText(options) {
  const bubbleHTML =
    '<div class="row align-items-center chat-row row-current"> \
						<div class="col-md-1 col-xl-2 padding-column"> \
						</div> \
						<div id="left-tag-current" class="col-2 col-sm-1 logo-column"> \
						</div> \
						<div class="col-8 col-sm-10 col-md-8 col-xl-6 content-column"> \
							<div id="bot-chat-current" class="chat-bubble bot chat-fade-in"> \
							</div> \
							<div id="user-chat-current" class="chat-bubble user float-right chat-fade-in"> \
							</div> \
						</div> \
						<div id="right-tag-current" class="col-2 col-sm-1 logo-column"> \
						</div> \
						<div class="col-md-1 col-xl-2 padding-column"> \
						</div> \
					</div>';

  $(".row-current").removeClass("row-current");
  $("#bot-chat-current").removeAttr("id");
  $("#user-chat-current").removeAttr("id");
  $("#left-tag-current").removeAttr("id");
  $("#right-tag-current").removeAttr("id");

  let logoText;
  $("#popup-window").append(bubbleHTML);
  if (options.writer === "bot") {
    if ($(".chat-row").length > 1) {
      logoText = '<img id="bot-logo-current" src="images/IFSLogo.png" class="bot-logo logo-pop-in">';
    } else {
      logoText = '<img id="bot-logo-current" src="images/IFSLogo.png" class="bot-logo">';
    }
    $("#right-tag-current").append(
      '<div id="bot-clock-current" class="bot-clock"></div>'
    );
  } else {
    $("#left-tag-current").append(
      '<div id="user-clock-current" class="user-clock"></div>'
    );
  }

  let chat, clock, clockToRemove, chatToRemove, clockText;
  let d = new Date();
  let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

  if (options.writer === "bot") {
    chat = $("#bot-chat-current");
    clock = $("#bot-clock-current");
    chatToRemove = $("#user-chat-current");
    clockToRemove = $("#user-clock-current");
	clockText = '<div class="clock-text bot-clock-text">' + time + "</div>";
	$('.bot.last').removeClass('last');
  } else {
    chat = $("#user-chat-current");
    clock = $("#user-clock-current");
    chatToRemove = $("#bot-chat-current");
    clockToRemove = $("#bot-clock-current");
    $(".row-current").addClass("height-shift");
    clockText =
      '<div class="clock-text user-clock-text" style="height:100%;max-height:100%">' +
      time +
      "</div>";
	$('.user.last').removeClass('last');
  }
  chat.addClass("last");
  clockToRemove.remove();
  chatToRemove.remove();
  clock.append(clockText);
  clock.removeAttr("id");
  let returnValue;

  switch (options.style) {
    case "text":
      chat.append('<p class="chat-text">' + options.text + "</p>");
      returnValue = delay(1000);
      break;
    case "form":
      chat.append(
        '<p class="chat-text">' +
          options.text +
          `</p><div class="input-group mb-3"> \
			<input type="text" id="${options.field}-input" class="form-control" placeholder="Your ${options.field}" aria-label="Your ${options.field}" aria-describedby="${options.field}-submit"> \ 
  			<div class="input-group-append"> \
			<span class="input-group-text" id="${options.field}-submit"> ok</span></div></div>`
      );

      let go = $(`#${options.field}-submit`);
      pause = true;

      go.on("click", unpause);
      returnValue = pauseUntil(`#${options.field}-input`);

      break;
    case "button":
      let wrapper = document.createElement("a");
      let parent = chat[0].parentNode;
      parent.replaceChild(wrapper, chat[0]);
      wrapper.appendChild(chat[0]);
      wrapper.classList.add("chat-button");
      chat.append('<p class="chat-text">' + options.text + "</p>");

      pause = true;
      chat.on("click", unpause);
      returnValue = pauseUntil();
      break;
  }
  if (options.writer === "bot") {
    if ($(".content-column").length > 1) {
      let logoShiftDown =
        $(".row-current").height() / 2 +
        $("#last-bot-row").height() / 2; 
      let rowsToShift = $(".height-shift");
      if (rowsToShift.length !== 0) {
        rowsToShift.each(function () {
          logoShiftDown += $(this).height();
        });
      }
      $("#bot-logo-current").velocity(
        {
          top: logoShiftDown,
        },
        {
          duration: 400,
          easing: "easeInQuad",
          complete: function (element) {
			setTimeout(function() 
			{
				$(element).css("visibility", "hidden").removeAttr("id");
            rowsToShift.removeClass("height-shift");
			}, 300);
          },
        }
      );
      $("#last-bot-row").removeAttr("id");

      $("#bot-logo-current").removeAttr("id");
      $("bot-logo").last().attr("id", "bot-logo-current");
    }
    $("#left-tag-current").append(logoText);
    $(".row-current").attr("id", "last-bot-row");
  }

  return await returnValue;
}

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(null);
    }, ms);
  });
}
function unpause() {
  pause = false;
}
async function pauseUntil(element) {
  while (pause) {
    await delay(100);
  }
  return $(element).val();
}

function encryptFormData(data) {
  let publicKey;
}