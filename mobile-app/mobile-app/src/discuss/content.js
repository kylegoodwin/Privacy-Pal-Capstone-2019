export const Content = [
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

const Identity = [  
        { type:"response", prompt:"What social media and game apps do you want to use?" },
        { type:"question", question: {prompt: "What do you use your phone the most for?",
        answers:["Phone Calls","Texting","Web-Browsing","Games"],
        correctIndex: 0,
         correctText: "Keep this in mind throughout the rest of the questions.",
          wrongText: ""
          /* we want the answer to be correct no matter what*/
      }},
    { type:"response", prompt:"How much time do you spend on each?" },
    { type:"question", question: {prompt: "What do you think is a healthy amount of time to spend on your phone each day?",
        answers:["0-30 min","1-2 hrs","3-4 hrs","4+ hrs"],
        correctIndex: 0,
         correctText: "These are healthy time ranges to spend on your phone, your life is still balanced",
          wrongText: "These time ranges are unhealthy and can lead to an unbalanced lifestyle "
          /* 0-30 and 1-2 hrs are correct answers, 3-4 and 4+ hrs are inncorrect answers*/
      }},
    { type:"response", prompt: "What type of content do you normally look for on social media sites?"},
    { type:"response", prompt: "If you have a social media account what do you use it for? If you don't have one why do you need one?"},
]

const Network = [  
    { type:"response", prompt:"If a person you don't know requests to follow you on Instagram, how do you decide if you should accept their request?"},
    { type:"response", prompt: "How many of your friends use social media apps?" },
    { type:"response", prompt: "Are your social media accounts private or public? If you don't have social media yet, would you make them public or private? Why?"},
    { type:"response", prompt: "Who would you interact with, follow, or be followed by on social media?"},
]

const Moderation = [  
    { type:"response", prompt:"Which social media apps would you want to post on?"},
    { type:"question", question: {prompt: "True or false? If your account is public everyone can see what you post",
        answers:["True","False"],
        correctIndex: 0,
         correctText: "Public means your account is open to the entire world",
          wrongText: "Public means your account is open to the entire world"
      }},
    { type:"response", prompt: "How often would you post on those apps?" },
    { type:"response", prompt: "What do you see yourself posting about?"},
    { type:"response", prompt: "List some things you would repost?"},
]