import { GameState } from '../shared/types'

const states: GameState[] = [
  {
    id: '1',
    description: 'You are Jamison Vance, a sixth grade student at Porcupine' +
        ' Middle School. On a wednesday night, you are scrolling down your ' +
        'social media feed and you encounter this message written by another' +
        ' student in your class. How do you react?',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    choice1: 'Bully',
    choice2: 'Bystander',
    choice1StateId: '2',
    choice2StateId: '3',
    isFinal: false,
  },
  {
    id: '2',
    description: `You posted a hate comment. You are a bully and
        should feel ashamed. Kids who are bullied can experience
        negative physical, school, and mental health issues.
        What would you do if you can undo your actions?`,
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    choice1: 'Bully',
    choice2: 'Bystander',
    choice1StateId: '4',
    choice2StateId: '3',
    isFinal: false,
  },
  {
    id: '3',
    description: 'You ignore the post and keep scrolling. You are' +
        ' a bystander, a witness who sees or knows about bullying' +
        ' happening to someone else. Whether you know it or not, by' +
        ' doing nothing, you are supporting the bullying behavior.' +
        ' What would you do if you can undo your actions?',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    choice1: 'Bystander',
    choice2: 'Stand Up',
    choice1StateId: '5',
    choice2StateId: '6',
    isFinal: false,
  },
  {
    id: '4',
    description: 'You continue being a bully and write more' +
        ' hate comments. Lets see what happens when you get' +
        ' bullied... Feels pretty bad, does it not?' +
        ' What would you do if you can undo your actions?',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    choice1: 'Bystander',
    choice2: 'Stand up',
    choice1StateId: '3',
    choice2StateId: '6',
    isFinal: false,
  },
  {
    id: '5',
    description: 'You continue being a bystander and witness' +
        ' more hate comments. Lets see what happens when you get' +
        ' bullied and no one stands up for you... Feels pretty bad,' +
        ' does it not? What would you do if you can undo your actions?',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    choice1: 'Bystander',
    choice2: 'Standup',
    choice1StateId: '5',
    choice2StateId: '6',
    isFinal: false,
  },
  {
    id: '6',
    description: 'You confront the bully and call them out in' +
        ' their own comment. Congratulations, you actively defended' +
        ' a person against bullying. Now you get a new group message' +
        ' from your peers, people you consider your friends. They have' +
        ' added the victim to the chat and are making fun of them.' +
        ' What do you do now?',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    choice1: 'Bystander',
    choice2: 'Stand Up',
    choice1StateId: '7',
    choice2StateId: '9',
    isFinal: false,
  },
  {
    id: '7',
    description: 'Now you get a private message from the victim asking' +
        ' for your help. What do you do now?',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    choice1: 'Report the texts to the school',
    choice2: 'Speak up to your peers',
    choice1StateId: '8',
    choice2StateId: '9',
    isFinal: false,
  },
  {
    id: '8',
    description: '(Shows positive effects that happen) You get a private' +
        ' message from the victim thanking you for standing up. You become' +
        ' friends over the course of the rest of the module.',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    nextGameLink: 'game',
    isFinal: true,
  },
  {
    id: '9',
    description: 'You stand up for the victim and they feel happier.',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    nextGameLink: 'game',
    isFinal: true,
  },
  {
    id: '10',
    description: 'Hello Player! This is the description for `LRL (end)`',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: '11',
    description: 'Hello Player! This is the description for `LRR (end)`',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: '12',
    description: 'Hello Player! This is the description for `RLL (end)`',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: '13',
    description: 'Hello Player! This is the description for `RLR (end)`',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: '14',
    description: 'Hello Player! This is the description for `RRL (end)`',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: '15',
    description: 'Hello Player! This is the description for `RRR (end)`',
    imageSrc: 'media/images/story0-0.png',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
]

export default states
