/* const Content = [
    { type:"question", question: { prompt: "Who can see your posts?",
     answers:["Everyone","Just me","My friends"],
      correctIndex: 0,
       correctText: "Nice answer. Always rememeber that people can save and reshare your content!",
        wrongText: "Nope! Remember, people can reshare your stuff, and its not nessisarily private."
    }},
    
        { type:"response", prompt:"This is a test." },
        { type:"question", question: { prompt: "Who can see your posts?",
     answers:["Everyone","Just me","My friends","My friends","My friends","My friends","My friends"],
      correctIndex: 0,
       correctText: "Nice answer. Always rememeber that people can save and reshare your content!",
        wrongText: "Nope! Remember, people can reshare your stuff, and its not nessisarily private."
    }},
        { type:"question", question: { prompt: "Who can see your posts?",
        answers:["FUCK"],
         correctIndex: 0,
          correctText: "Nice answer. Always rememeber that people can save and reshare your content!",
           wrongText: "Nope! Remember, people can reshare your stuff, and its not nessisarily private."
       }}

]
*/

export const Content = {

identity : [  
    
    { type:"question", question: {prompt: "Why do social media apps collect your user data?",
    answers:["To sell to advertisers","For fun","To help you with homework","To show your friends"],
    correctIndex: 0,
        correctText: "Correct! Social media apps sell your data to advertisers in order to make money.",
        wrongText: "Incorrect. The reason that social media apps collect your data is so that they can sell it to advertisers for money."
        /* we want the answer to be correct no matter what*/
    }},
    { type:"question", question: {prompt: "True or False, social media apps are tracking your individual clicks and likes?",
        answers:["True", "False"],
        correctIndex: 0,
         correctText: "Correct! Social media apps can track anybody's individual data that uses their application",
          wrongText: "Incorrect. Social media apps can actually track your data and anybody else's data that uses their social media app."
          /* 0-30 and 1-2 hrs are correct answers, 3-4 and 4+ hrs are inncorrect answers*/
    }},
    { type:"question", question: {prompt: "From the story about Miguel, what did the overall lesson teach?",
        answers:["Parents, Teachers, and Principals are too strict", "Always follow what your friends do online", "Remove yourself from innappropriate online situations", "You can cyberbully, just don't get caught"],
        correctIndex: 2,
         correctText: "Correct! It is important to be aware when you are being harmful to others online and remove yourself from those situations",
          wrongText: "Incorrect. If you stay in harmful situations too long you may end up getting in trouble and hurting yourself and others."
          /* 0-30 and 1-2 hrs are correct answers, 3-4 and 4+ hrs are inncorrect answers*/
    }},
    { type:"response", prompt: "What type of content do you normally look for on social media sites?"},
    { type:"response", prompt: "If you have a social media account what do you use it for? If you don't have one why do you need one?"},
],

network : [  
    { type:"question", question: {prompt: "If a person you don't know requests to follow you on Instagram, how do you decide if you should accept their request?",
        answers:["Double check their bio to make sure they are real", "Loot at recent posts if they have them", "See if you have mutual friends", "All of the above"],
        correctIndex: 3,
         correctText: "Correct! You should take all of these steps to make sure that the person is real and that you know who they are.",
          wrongText: "Incorrect. While it is important to do this, you should do all of these things to make sure that the person is real and that you know who they are.."
          /* 0-30 and 1-2 hrs are correct answers, 3-4 and 4+ hrs are inncorrect answers*/
    }},
    { type:"question", question: {prompt: "True or false, you should let anyone follow you or be friends with you online",
        answers:["True", "False"],
        correctIndex: 3,
         correctText: "Correct! Although it might make you seem more popular, these accounts could be run by dangerous people.",
          wrongText: "Incorrect. You should keep your network to only those that you know."
          /* 0-30 and 1-2 hrs are correct answers, 3-4 and 4+ hrs are inncorrect answers*/
    }},
    { type:"question", question: {prompt: "From the story about Anna, what was not an overall lesson taught?",
        answers:["Always ensure you know who is in your network", "Never post online", "Don't send personal information over the internet", "Do research on who is trying to connect online with you"],
        correctIndex: 1,
         correctText: "Correct! It is okay to post online, but you need to make sure you know who you are connected with and to be careful not to send personal information to others.",
          wrongText: "Incorrect. This is an important lesson. You need to make sure you know who you are connected with and to be careful not to send personal information to others."
          /* 0-30 and 1-2 hrs are correct answers, 3-4 and 4+ hrs are inncorrect answers*/
    }},
    { type:"response", prompt: "Are your social media accounts private or public? If you don't have social media yet, would you make them public or private? Why?"},
    { type:"response", prompt: "Who do you primarily interact with, follow, or be followed by on social media?"},
],

moderation : [  
    { type:"question", question: {prompt: "True or false? If your account is public everyone can see what you post",
        answers:["True","False"],
        correctIndex: 0,
         correctText: "Correct, public means your account is open to the entire world",
          wrongText: "Incorrect, public means your account is open to the entire world"
      }},

      { type:"question", question: {prompt: "What's a healthy amount of posting?",
        answers:["Never", "Everyday", "Multiple Times A Day", "Only When Big Things In Your Life Happen"],
        correctIndex: 3,
         correctText: "Correct! You want to keep your followers informed but wihtout revealing too much of your personal life",
          wrongText: "Incorrect. Posting too frequently can bore your followers and expose a lot of information about you"
          
    }},

    { type:"question", question: {prompt: "From the story about Ben, what was the overall lesson he learned?",
    answers:["Be careful with what you post/repost", "Don't text in class", "Post all the time", "Delete Bad Tweets"],
    correctIndex: 0,
     correctText: "Correct! You don't have total control on social media and others can quickly take things out of your hands.",
      wrongText: "Incorrect. It is important to take ownership for your social media actions, it is your responsibiliity!"
      
    }},

    { type:"response", prompt: "How often would you post on those apps?" },
    { type:"response", prompt: "What do you see yourself posting about?"},
]

}