# HealthHub
<img src="https://health-hub.bg/wp-content/uploads/2019/03/HealthHub-logo-1-e1553676385475.jpg" style="align:center" width="30%" alt="Logo">

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)]() 
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/vrushti-mody/HealthHub/pulls)
[![Issues](https://img.shields.io/github/issues-raw/vrushti-mody/HealthHub)](https://github.com/vrushti-mody/HealthHub/issues) 

Making healthy lifestyle changes is easier said than done. Even when we're strongly motivated, adopting a new, healthy habit — or breaking an old, bad one — can be terribly difficult. Creating and maintaining healthy eating habits doesn’t have to be hard. If you start by incorporating small changes into your daily habits, you can make a big impact on your eating pattern and create lasting, healthy eating habits. HealthHub wants to help you do just that!

## How is this tool helpful?

- Goals: Your first step towards a healthy lifestyle is setting two goals. The first goal is your target number. Once you've set this goal, next is to figure out your deadline. Be realistic about them.
- Exercise Plan: Exercise at a local gym, go for a jog or try those workout videos at home! However you choose to exercise, a great way to help you stay focused on your goal is to use a fitness tracker.
- Eating Right: In addition to your new exercise routine, you will also be changing your diet. But don't think of it as dieting, you will simply be forming new and healthier eating habits.

## Key Features

- The Healthy Recipe Guide: A list of curated recipes based on your ingredients, calorie intake, etc
- Lifestyle Tracker: Track your steps, calories, etc with the lifestyle tracker
- The Healthy Bot: Ask the bot anything health related and it will answer your questions
- Sessions with Coaches: Connect with health coaches to stay on the right track and bust myths
- Retrospective Tracker: Analyse your mood and let it all out in your daily journal
- The Community Forum: Make Healthy Changes and share tips, achievements and advice!

## Technology Stack
![Languages](https://img.shields.io/github/languages/count/vrushti-mody/HealthHub)
- Javascript
- Node.js
- MongoDB
- Google Dialog Flow
- Google Fit API
- Spoonacular API


## Getting Started

### File Structure

| Directory                                                                                         | Content                      |
| --------------------------------------------------------------------------------------------------| ---------------------------- |
| [models](https://github.com/vrushti-mody/HealthHub/tree/master/models) | contains the database models |
| [routes](https://github.com/vrushti-mody/HealthHub/tree/master/routes)   | contains routing modules         |
| [views](https://github.com/vrushti-mody/HealthHub/tree/master/docs)         | contains all frontend components |

### Setup

- Fork and clone the repo

```
$ git clone https://github.com/vrushti-mody/HealthHub.git
$ cd HealthHub
```

- Install dependencies
```
$ npm install
```
- Add the .env file
```
MONGODB_URI = <YOUR MONGODB URI>
GOOGLE_CLIENT_ID = <YOUR GOOGLE CLIENT ID>
GOOGLE_CLIENT_SECRET =  <YOUR GOOGLE CLIENT SECRET>
CALLBACK_URL = <YOUR GOOGLE CALLBACK URL>
SPOONACULAR_API_KEY = <YOUR SPOONACULAR API KEY>
FITNESS_CLIENT_ID = <YOUR GOOGLE CLIENT ID>
FITNESS_CLIENT_SECRET = <YOUR GOOGLE CLIENT SECRET>
FITNESS_REDIRECT= <YOUR GOOGLE CALLBACK URL>
```

- Run the server
```
$ npm start
```

## Contribution Guidelines
[![PR's Welcome](https://img.shields.io/github/issues-pr-raw/vrushti-mody/HealthHub)]()
[![Contributors](https://img.shields.io/github/contributors/vrushti-mody/HealthHub)]()

If you have suggestions for how HealthHub could be improved, or want to report a bug, open an issue! Contributions of all kinds are welcomed!

For more, check out the [Contributing Guide](./CONTRIBUTING.md).


## License

[MIT](LICENSE) © 2020 WandaVision

Made with 💕 by [Vrushti Mody](https://github.com/vrushti-mody) and [Rohan Poojari](https://github.com/RoRogers7)!

