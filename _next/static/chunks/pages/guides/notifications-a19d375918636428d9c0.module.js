(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{ScRu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/notifications",function(){return n("c/vi")}])},"c/vi":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n("wx14"),i=n("Ff2n"),l=n("q1tI"),b=n.n(l),r=n("7ljp"),o=n("er9C"),c=(b.a.createElement,{id:"notifications",title:"Notifications"}),m={meta:c},p=e=>{var{children:t}=e,n=Object(i.a)(e,["children"]);return Object(r.b)(o.a,Object(a.a)({meta:c},n),t)};function s(e){var{components:t}=e,n=Object(i.a)(e,["components"]);return Object(r.b)(p,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"notification-types"},"Notification Types",Object(r.b)("a",{parentName:"h2",href:"#notification-types",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("p",null,"Monika will send notifications to you whenever ",Object(r.b)("a",{parentName:"p",href:"https://hyperjumptech.github.io/monika/guides/alerts"},"alerts")," are triggered, e.g., when the response status of a probed URL is not ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_success"},"2xx success code")," (",Object(r.b)("a",{parentName:"p",href:"https://hyperjumptech.github.io/monika/guides/alerts#1-http-code"},"status-not-2xx"),")."),Object(r.b)("p",null,"At this moment, Monika supports 4 types of notifications\u2014smtp, webhook, Mailgun, and Sendgrid. We are working on more notifications like Microsoft Teams, Telegram, and many more. You can help!"),Object(r.b)("h2",{id:"configurations"},"Configurations",Object(r.b)("a",{parentName:"h2",href:"#configurations",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("p",null,"To use one or more notifications, you need to define the settings in the config.json file as shown below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"notifications": [\n    {\n      "id": "unique-id-mailgun",\n      "type": "mailgun",\n      "data": {\n        "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n        "apiKey": "YOUR_API_KEY",\n        "domain": "YOUR_DOMAIN"\n      }\n    },\n    {\n      "id": "unique-id-sendgrid",\n      "type": "sendgrid",\n      "data": {\n        "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n        "apiKey": "YOUR_API_KEY"\n      }\n    },\n    {\n      "id": "unique-id-smtp",\n      "type": "smtp",\n      "data": {\n        "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n        "hostname": "SMTP_HOSTNAME",\n        "port": 587,\n        "username": "SMTP_USERNAME",\n        "password": "SMTP_PASSWORD"\n      }\n    },\n    {\n      "id": "unique-id-webhook",\n      "type": "webhook",\n      "data": {\n        "method": "POST",\n        "url": "https://WEBHOOK_URL"\n      }\n    }\n  ],\n')),Object(r.b)("p",null,"Note that every triggered alert will be sent to you through all the notifications you defined in the config.json, e.g., if you added ",Object(r.b)("inlineCode",{parentName:"p"},"webhook")," and ",Object(r.b)("inlineCode",{parentName:"p"},"smtp")," settings, you will receive the alert messages through both."),Object(r.b)("h2",{id:"smtp"},"SMTP",Object(r.b)("a",{parentName:"h2",href:"#smtp",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol"},"SMTP (Simple Mail Transfer Protocol)")," is a way to send email using the TCP/IP protocol. This is the easiest way to get notified when alerts are triggered. Use the following configuration to set up SMTP notification."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-smtp",\n  "type": "smtp",\n  "data": {\n    "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n    "hostname": "smtp.mail.com",\n    "port": 587,\n    "username": "SMTP_USERNAME",\n    "password": "SMTP_PASSWORD"\n  }\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Key"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ID"),Object(r.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Smtp12345"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Type"),Object(r.b)("td",{parentName:"tr",align:null},"Notification types"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"smtp"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Recipients"),Object(r.b)("td",{parentName:"tr",align:null},"An array of email addresses that will receive the e-mail from Monika"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'["monika@testmail.com", "symon@testmail.com"]'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Hostname"),Object(r.b)("td",{parentName:"tr",align:null},"The smtp host that you will be using for sending the email"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"smtp.gmail.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Port"),Object(r.b)("td",{parentName:"tr",align:null},"The port allowed to be used for sending mail in your host"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"587"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Username"),Object(r.b)("td",{parentName:"tr",align:null},"Registered username on your smtp server"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"yourusername@gmail.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Password"),Object(r.b)("td",{parentName:"tr",align:null},"The password set for your username"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"thepasswordforyourusername"))))),Object(r.b)("h3",{id:"example-using-gmail-smtp"},"Example using Gmail SMTP",Object(r.b)("a",{parentName:"h3",href:"#example-using-gmail-smtp",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("p",null,"To use Gmail SMTP with Monika,"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You need to have a Gmail account."),Object(r.b)("li",{parentName:"ol"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"smtp.gmail.com")," for ",Object(r.b)("inlineCode",{parentName:"li"},"hostname"),"."),Object(r.b)("li",{parentName:"ol"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"587")," for ",Object(r.b)("inlineCode",{parentName:"li"},"port"),"."),Object(r.b)("li",{parentName:"ol"},"Use your Gmail address for ",Object(r.b)("inlineCode",{parentName:"li"},"username"),"."),Object(r.b)("li",{parentName:"ol"},"Use your Gmail password for ",Object(r.b)("inlineCode",{parentName:"li"},"password"),". If you have activated 2-Factor-Authentication (2FA), you need to ",Object(r.b)("a",{parentName:"li",href:"https://myaccount.google.com/security"},"create an App Password from your Account Settings"),". Then use the app password for ",Object(r.b)("inlineCode",{parentName:"li"},"password"),".")),Object(r.b)("h2",{id:"mailgun"},"Mailgun",Object(r.b)("a",{parentName:"h2",href:"#mailgun",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("p",null,"Mailgun is an email notification delivery provided by Mailgun email service. To use mailgun for your notification, you\nwould need a mailgun account to obtain your API_KEY and DOMAIN. Please consult ",Object(r.b)("a",{parentName:"p",href:"https://documentation.mailgun.com/en/latest/quickstart.html"},"mailgun documentation here")," on how to obtain them. Once that done, you could use the API_KEY and DOMAIN in monika's json configuration as follows;"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-mailgun",\n  "type": "mailgun",\n  "data": {\n    "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n    "apiKey": "YOUR_API_KEY",\n    "domain": "YOUR_DOMAIN"\n  }\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Key"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ID"),Object(r.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Mailgun12345"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Type"),Object(r.b)("td",{parentName:"tr",align:null},"Notification types"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"mailgun"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Recipients"),Object(r.b)("td",{parentName:"tr",align:null},"An array of email addresses that will receive the e-mail from Monika"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'["monika@testmail.com", "symon@testmail.com"]'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Api Key"),Object(r.b)("td",{parentName:"tr",align:null},"Mailgun's account api key, mailgun's registered key to identify your account"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"MAILGUN_API_KEY"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Domain"),Object(r.b)("td",{parentName:"tr",align:null},"The domain to set in Mailgun"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"sandboxmail.mailgun.com"))))),Object(r.b)("h2",{id:"sendgrid"},"Sendgrid",Object(r.b)("a",{parentName:"h2",href:"#sendgrid",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("p",null,"Similar to mailgun, sendgrid is also an email delivery service. First, sign up for an account in sendgrid and get the API key. Please check ",Object(r.b)("a",{parentName:"p",href:"https://sendgrid.com/docs/api-reference/"},"sendgrid's documentation"),". Then put the API key in Monika's configuration as follows."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-sendgrid",\n  "type": "sendgrid",\n  "data": {\n    "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n    "apiKey": "YOUR_API_KEY"\n  }\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Key"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ID"),Object(r.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Sendgrid12345"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Type"),Object(r.b)("td",{parentName:"tr",align:null},"Notification types"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"sendgrid"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Recipients"),Object(r.b)("td",{parentName:"tr",align:null},"An array of email addresses that will receive the e-mail from Monika"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'["monika@testmail.com", "symon@testmail.com"]'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Api Key"),Object(r.b)("td",{parentName:"tr",align:null},"Mailgun's account api key, mailgun's registered key to identify your account"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"70e34aba-0ea908325"))))),Object(r.b)("h2",{id:"webhook"},"Webhook",Object(r.b)("a",{parentName:"h2",href:"#webhook",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("p",null,"Monika supports Webhook. To enable notification via Webhook."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-webhook",\n  "type": "webhook",\n  "data": {\n    "url": "https://YOUR_WEBHOOK_URL"\n  }\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Key"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ID"),Object(r.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Webhook12345"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Type"),Object(r.b)("td",{parentName:"tr",align:null},"Notification types"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"webhook"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Url"),Object(r.b)("td",{parentName:"tr",align:null},"The URL of the server that will receive the webhook notification"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"https://yourwebsite.com/webhook"))))),Object(r.b)("p",null,"Using the webhook type configuration, ",Object(r.b)("inlineCode",{parentName:"p"},"Monika")," will send a request with the following body:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"body: {\n  url: string\n  time: string\n  alert: string\n}\n")),Object(r.b)("h2",{id:"slack-incoming-webhook"},"Slack Incoming Webhook",Object(r.b)("a",{parentName:"h2",href:"#slack-incoming-webhook",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("p",null,"Monika supports Slack Incoming Webhook. To enable notification via Slack, you must have a ",Object(r.b)("inlineCode",{parentName:"p"},"Slack's Incoming Webhook URL"),". Please consult ",Object(r.b)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"Sending messages using Incoming Webhooks")," documentation."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-slack",\n  "type": "slack",\n  "data": {\n    "url": "https://YOUR_SLACK_INCOMING_WEBHOOK_URL"\n  }\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Key"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ID"),Object(r.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Slack12345"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Type"),Object(r.b)("td",{parentName:"tr",align:null},"Notification types"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"slack"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Url"),Object(r.b)("td",{parentName:"tr",align:null},"The URL of your slack incoming webhook"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"https://slackwebhook.com/channel"))))),Object(r.b)("p",null,"Keep watch on these pages, new notification methods are being developed."))}s.isMDXComponent=!0}},[["ScRu",0,2,4,1,3,5]]]);