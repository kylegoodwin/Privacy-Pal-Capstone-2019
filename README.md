# Privacy-Pal-Capstone-2019
2019 Senior Capstone for the UW Information School. We are building a platform to inform middle-schoolers about privacy issues, healthy online practices, and our platform is also meant to improve communication between them and their parents. PrivacyPal is built through react and is meant to ideally be used on the web through one's phone. 

## Background and General Structure 
This is done through learning modules. These modules are supplemented with quizzes that test the kids on the content they  just learned. We have broken our materials into four different categories: Intro, Online Friends and Your Network, Posting in Moderation, and your identity from your data. Modules are displayed in a story format that is present on other popular social media platforms like snapchat or instagram. These are based around open-source code on github with some modification from ourselves to have more control over the content. 

Upon completion of each module, kids can move on and learn about the next topic. After finishing all the modules and quizzes, kids receive a merit badge certifying them ready to use social media. With this badge comes a contract that kids can show their what they have learned and agree with healthy online practices. Such a contract facilitates healthy discussion.  After kids have gone over the contract with their parents they can input their parent's email address and our platform will email them a copy of the contract so they can have it for any future conversations. The SendGrid service we use is currently locked, but if someone working with this project used their own API key in place of the locked one we currently have, the service would work. 

## Changing & Adding Content 
New modules can be loaded into our platform through JSON files. If one wanted to add new content the current JSON file our modules use is in src/learn/stories.js. This file includes the module content and also a story narrative that use to try and teach the kids from a real-world example. Entering which text you want on top, bottom, and specifying which image path/URL you want as the background is all that is necessary to create new modules. Quizzes can be made and edited in a similar manner. The file for controlling and making new quizzes is in src/discuss/content.js. Along with editing the text and image content, one can also modify how long the automatic slider takes between pages. For example, if you want to speed up how quickly slide changes from 5s to 2s this can be achieved as well. 

## Improvements For The Future 
Currently there is no log-in feature. We felt that with the current breadth of the material that storing data locally and erasing it between sessions was more efficient. However, if more content/modules were added, a log-in feature to track user data more permanently is recommended. 

## Questions
Please contact Kyle Goodman: kjgoodwins@gmail.com
