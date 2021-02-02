"use strict";

jQuery(function ($) {
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
        chatbot();
    }

    function closePopup() {
        inner.attr("style", "margin-right:0px");
        el.removeClass("fade-in").addClass("fade-out");
        el.attr("style", "visibility:hidden");
        // if ($(window).width() >= 768) {
        $("body").css({ overflow: "auto" });
        // }
    }

    /*Get existing row height, add 1rem for every time chat-bubble text will wrap, animate bot-logo's shift down with top:
  move bot-logo to new row after animation timeout*/
    let privacyLink =
        "http://integrityfinancialservicellc.com/wp-content/uploads/2015/05/IFS-Privacy-Pledge-and-Notification.pdf";
    let fields = {
        name: "",
        email: "",
        phone: "",
        portfolioSize: "",
    };

    let chatbot = (function () {
        let executed = false;
        return async function () {
            if (!executed) {
                executed = true;
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
                fields.name = await writeText({
                    text: "First of all, what is your name?",
                    style: "form",
                    field: "name",
                    writer: "bot",
                });
                await writeText({
                    text: fields.name,
                    style: "text",
                    writer: "user",
                });
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
                    text: `<a href=${privacyLink} target="_blank">Here</a> is our privacy policy.`,
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
                await writeText({
                    text: fields.phone,
                    style: "text",
                    writer: "user",
                });
                fields.email = await writeText({
                    text:
                        "Great! And what is a good email we can send your book to? (Again, we won't spam you)",
                    style: "form",
                    field: "email",
                    writer: "bot",
                });
                await writeText({
                    text: `${fields.email}`,
                    style: "text",
                    writer: "user",
                });
                fields.portfolioSize = await writeText({
                    text: `Perfect ${fields.name}. What would best describe the amount of investable assets you have saved for retirement? (We customize the information we send based on your situation)`,
                    style: "portfolio",
                    writer: "bot",
                });
                await writeText({
                    text: `${fields.portfolioSize}`,
                    style: "text",
                    writer: "user",
                });
                await writeText({
                    text: `Great ${fields.name}, one last thing.  We need to make sure you're a real person!  Solve the captcha below and we'll get that book sent over to you!`,
                    style: "text",
                    writer: "bot",
                });
                await writeText({
                    text: fields.email,
                    style: "captcha",
                    writer: "bot",
                });
            }
        };
    })();

    async function writeText(options) {
        // Structural HTML to add new row
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
        // Add Structural HTML to page
        $("#popup-window").append(bubbleHTML);
        // 
        if (options.writer === "bot") {
            if ($(".chat-row").length > 1) {
                logoText =
                    '<img id="bot-logo-current" src="images/IFSLogo.png" class="bot-logo logo-pop-in">';
            } else {
                logoText =
                    '<img id="bot-logo-current" src="images/IFSLogo.png" class="bot-logo">';
            }
            // Add timestamp to speaker
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
            clockText =
                '<div class="clock-text bot-clock-text">' + time + "</div>";
            $(".bot.last").removeClass("last");
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
            $(".user.last").removeClass("last");
        }
        chat.addClass("last");
        clockToRemove.remove();
        chatToRemove.remove();
        clock.append(clockText);
        clock.removeAttr("id");
        let returnValue;

        switch (options.style) {
            case "text":
                chat.append(`<p class="chat-text">${options.text}</p>`);
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

                go.on("click", () => {
                    let text = document.getElementById(`${options.field}-input`).value;
                   if (checkInput(`${options.field}`, text)) {
                    if (checkForProfanity(text)) {
                        unpause();
                        $(`#${options.field}-submit`).off();
                    } else {
                    alert("Please refrain from using offensive words");
                    }
                } else {
                    alert(`Please enter your ${options.field}`);
                }
                });
                returnValue = pauseUntil(`#${options.field}-input`, (value) =>
                    value.val()
                );

                break;
            case "portfolio":
                chat.append('<p class="chat-text">' + options.text + "</p>");
                let sizes = [
                    "Less than $100,000 of investable assets saved for retirement",
                    "Between $100,000 and $250,000 of investable assets saved for retirement",
                    "Between $250,000 and $500,000 of investable assets saved for retirement",
                    "Between $500,000 and $1,000,000 of investable assets saved for retirement",
                    "Over $1,000,000 of investable assets saved for retirement",
                ];

                chat.append('<div class="portfolio-selection">');
                let selection = $(".portfolio-selection");
                for (const size of sizes) {
                    selection.append(
                        `<button type="button" class="btn btn-light portfolio-button">${size}</button>`
                    );
                }
                selection.one("click", "button", () => {
                    $(this).attr("id", "portfolio-size");
                    unpause();
                    $(".portfolio-size").off();
                });
                chat.append("</div>");

                pause = true;
                returnValue = pauseUntil("#portfolio-size", (value) =>
                    value.text()
                );
                break;
            case "captcha":
                chat.append('<p class="chat-text">' + options.text + "</p>");
                chat.append(`<button id="submit-button" 
            class="g-recaptcha btn btn-light" 
        data-sitekey="reCAPTCHA_site_key" 
        data-callback="onSubmit" 
        data-action="submit">Submit</button>`);

                $("#submit-button").on("click", async function () {
                    grecaptcha.ready(function () {
                        grecaptcha
                            .execute(
                                "6Ld4LyQaAAAAAAcJgIAMJQCQ3B-ArchznBkWR7A9",
                                {
                                    action: "submit",
                                }
                            )
                            .then(function (token) {
                                const xmlhttp = new XMLHttpRequest();
                                const url =
                                    "https://us-south.functions.appdomain.cloud/api/v1/web/dwstanley%40integrityfinancialservicellc.com_dev/mysite/contactus";
                                xmlhttp.open("POST", url, true);
                                xmlhttp.setRequestHeader(
                                    "Content-type",
                                    "application/x-www-form-urlencoded"
                                );
                                xmlhttp.onload = () => {
                                    console.log(xmlhttp.status);
                                }
                                xmlhttp.send(
                                    `name=${fields.name}&phone=${fields.phone}&email=${fields.email}&portfolioSize=${fields.portfolioSize}&token=${token}`
                                );
                                return new Promise(resolve, reject);
                            });
                    });
                });

                break;
        }
        if (options.writer === "bot") {
            if ($(".content-column").length > 1){
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
                            setTimeout(function () {
                                $(element)
                                    .css("visibility", "hidden")
                                    .removeAttr("id");
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
    function checkForProfanity(text) {
        let regex = new RegExp('\\b(' + profanityList + ')\\b', 'i');

        return !(regex.test(text));
    }

            

    function checkInput(type, text) {
        let valid = false;
        let regex;
        //let validEmailAddress = /\s*[a-zA-Z0-9_!#\$%\&'\*+-\/=\?\^_`{\|}~]+@[a-zA-Z0-9_!#\$%\&'\*+-\/=\?\^_`{\|}~]+.[a-zA-Z]+\s*/;
        let validEmailAddress = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        let validPhoneNumber = /^\s*(\+?\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\s*$/;
        if (text !== '') {
        switch (type) {
            case "name":
                valid = true;

            break;
            case "email":
                regex = new RegExp(validEmailAddress);
                valid = regex.test(text);
            break;
            case "phone":
                regex = new RegExp(validPhoneNumber);
                valid = regex.test(text);

            break;

        }
    }

            return valid
    }
    function unpause() {
        pause = false;
    }
    async function pauseUntil(element, fn) {
        while (pause) {
            await delay(100);
        }
        return fn($(element));
    }

    // function onClick(e) {
    //     e.preventDefault();
    //     grecaptcha.ready(function () {
    //         grecaptcha
    //             .execute("6Ld4LyQaAAAAAAcJgIAMJQCQ3B-ArchznBkWR7A9", {
    //                 action: "submit",
    //             })
    //             .then(function (token) {
    //                 // Add your logic to submit to your backend server here.
    //             });
    //     });
    // }

let profanityList = /4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow|job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny|fucker|butt|butthole|buttmunch|buttplug|c0ck|c0cksucker|carpet|muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge|packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i+ch|l3itch|labia|lmfao|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother|fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob|jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw6t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx/;
});