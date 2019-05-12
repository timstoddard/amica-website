import { GameState } from '../shared/types'

// GO TO HOME SCREEN WHEN YOU HIT A NOTIFICATION
// Initial Story: 1 - 4
// Story 1 Social Media: 5 - 18
// Story 2 Messages: 19 - 33
// Story 2 Social Media: 34 - 39
// Story 3 Messages: 40 - 70

const states: GameState[] = [
  {
    id: '1', // Initial Story
    description: '',
    imageSrc: 'media/bully/Background_Light.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '2' },
    ],
    isFinal: false,
  },
  {
    id: '2', // Initial Story
    description: '',
    imageSrc: 'media/bully/Screen_3_no_button.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '3' },
    ],
    isFinal: false,
  },
  {
    id: '3', // Initial Story
    description: '',
    imageSrc: 'media/bully/Screen_4_no_button.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '4' },
    ],
    isFinal: false,
  },
  {
    id: '4', // Notification for Social Media
    description: '',
    imageSrc: 'media/bully/Screen_5_no_buttons.png',
    imageAlt: 'something',
    nextGameText: 'Home',
    nextGameLink: 'dashboard',
    isFinal: true,
  },
  {
    id: '5', // Story 1 Social Media
    description: '',
    imageSrc: 'media/bully/Screen_6_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '6' },
    ],
    isFinal: false,
  },
  {
    id: '6', // Story 1 Social Media
    description: '',
    imageSrc: 'media/bully/Screen_7a_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Bystander', toId: '7' },
      { text: 'Bully', toId: '9' },
    ],
    isFinal: false,
  },
  {
    id: '7', // Story 1 Social Media
    description: '',
    imageSrc: 'media/bully/Bystander_Screen_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '8' },
    ],
    isFinal: false,
  },
  {
    id: '8', // TODO: Story 1 Social Media #7-A-2
    description: '',
    imageSrc: 'media/bully/Bystander_Screen_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '11' },
    ],
    isFinal: false,
  },
  {
    id: '9', // Story 1 Social Media
    description: '',
    imageSrc: 'media/bully/Bully_Screen_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '10' },
    ],
    isFinal: false,
  },
  {
    id: '10', // TODO: Story 1 Social Media #7-B-2
    description: '',
    imageSrc: 'media/bully/Bully_Screen_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '11' },
    ],
    isFinal: false,
  },
  {
    id: '11', // Story 1 Social Media
    description: '',
    imageSrc: 'media/bully/Screen_8_No_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '12' },
    ],
    isFinal: false,
  },
  {
    id: '12', // Story 1 Social Media
    description: '',
    imageSrc: 'media/bully/Screen_9_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Bystander', toId: '13' },
      { text: 'Stand Up', toId: '15' },
    ],
    isFinal: false,
  },
  {
    id: '13', // Story 1 Social Media
    description: '',
    imageSrc: 'media/bully/Bystander_screen_9_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '14' },
    ],
    isFinal: false,
  },
  {
    id: '14', // TODO: Story 1 Social Media #9-A-2
    description: '',
    imageSrc: 'media/bully/Bystander_screen_9_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '17' },
    ],
    isFinal: false,
  },
  {
    id: '15', // Story 1 Social Media
    description: '',
    imageSrc: 'media/bully/Good_Job_No_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '16' },
    ],
    isFinal: false,
  },
  {
    id: '16', // TODO: Story 1 Social Media #9-B-2
    description: '',
    imageSrc: 'media/bully/Good_Job_No_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '17' },
    ],
    isFinal: false,
  },
  {
    id: '17', // TODO: Story 1 Social Media #10
    description: '',
    imageSrc: 'media/bully/Background_Light.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '18' },
    ],
    isFinal: false,
  },
  {
    id: '18', // Notification for Message
    description: '',
    imageSrc: 'media/bully/Screen_11_No_buttons.png',
    imageAlt: 'something',
    nextGameText: 'Home',
    nextGameLink: 'dashboard',
    isFinal: true,
  },
  {
    id: '19', // Story 2 Messages
    description: '',
    imageSrc: 'media/bully/Screen_11_1_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '20' },
    ],
    isFinal: false,
  },
  {
    id: '20', // Story 2 Messages
    description: '',
    imageSrc: 'media/bully/Screen_11_2_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '21' },
    ],
    isFinal: false,
  },
  {
    id: '21', // Story 2 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-12_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Bystander', toId: '22' },
      { text: 'Stand Up', toId: '24' },
    ],
    isFinal: false,
  },
  {
    id: '22', // Story 2 Messages
    description: '',
    imageSrc: 'media/bully/Bullying- 12-A_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '23' },
    ],
    isFinal: false,
  },
  {
    id: '23', // Story 2 Messages
    description: 'media/bully/Bullying- 12-A – 2_no_buttons.png',
    imageSrc: '',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '24' },
    ],
    isFinal: false,
  },
  {
    id: '24', // TODO: Story 2 Messages #13
    description: 'media/bully/Bullying- 12-A – 2_no_buttons.png',
    imageSrc: '',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '33' },
    ],
    isFinal: false,
  },
  {
    id: '25', // Story 2 Messages
    description: '',
    imageSrc: 'media/bully/Bullying- 12-B_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '26' },
    ],
    isFinal: false,
  },
  {
    id: '26', // Story 2 Messages
    description: '',
    imageSrc: 'media/bully/Bullying- 12-B – 2_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '27' },
    ],
    isFinal: false,
  },
  {
    id: '27', // TODO: Story 2 Messages #12-B-2-A
    description: '',
    imageSrc: 'media/bully/Bullying- 12-B – 2_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '28' },
    ],
    isFinal: false,
  },
  {
    id: '28', // Story 2 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-12-B-2- B_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '29' },
    ],
    isFinal: false,
  },
  {
    id: '29', // Story 2 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-12-B-2- C_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '30' },
    ],
    isFinal: false,
  },
  {
    id: '30', // Story 2 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-12-B-2- D_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '31' },
    ],
    isFinal: false,
  },
  {
    id: '31', // Story 2 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-12-B-2- E_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '32' },
    ],
    isFinal: false,
  },
  {
    id: '32', // TODO: Story 2 Messages #13
    description: '',
    imageSrc: 'media/bully/Bullying-12-B-2- E_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '33' },
    ],
    isFinal: false,
  },
  {
    id: '33', // Notification for Social Media
    description: '',
    imageSrc: 'media/bully/Bullying-14_no_buttons.png',
    imageAlt: 'something',
    nextGameText: 'Home',
    nextGameLink: 'dashboard',
    isFinal: true,
  },
  {
    id: '34', // Story 2 Social Media
    description: '',
    imageSrc: 'media/bully/Bullying-15_no_buttons_no_text.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '35' },
    ],
    isFinal: false,
  },
  {
    id: '35', // Story 2 Social Media
    description: '',
    imageSrc: 'media/bully/Bullying-16_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Stand Up', toId: '36' },
      { text: 'right' /* TODO: rename */, toId: '51' },
    ],
    isFinal: false,
  },
  {
    id: '36', // Story 2 Social Media
    description: '',
    imageSrc: 'media/bully/Bullying-16- A_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '37' },
    ],
    isFinal: false,
  },
  {
    id: '37', // Story 2 Social Media
    description: '',
    imageSrc: 'media/bully/Bullying- 16-A-2_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '38' },
    ],
    isFinal: false,
  },
  {
    id: '38', // TODO: Story 2 Social Media #16-A-2-A
    description: '',
    imageSrc: 'media/bully/Bullying- 16-A-2.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '39' },
    ],
    isFinal: false,
  },
  {
    id: '39', // Notification for both
    description: '',
    imageSrc: 'media/bully/Bullying- 16-A-2-B_no_buttons.png',
    imageAlt: 'something',
    nextGameText: 'Home',
    nextGameLink: 'dashboard',
    isFinal: true,
  },
  {
    id: '40', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying- 16-A-2-B –Messages_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'View Group Message', toId: '41' },
      { text: 'View Penny Message', toId: '42' },
    ],
    isFinal: false,
  },
  {
    id: '41', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying- 16-A-2-B –Messages Group_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '43' },
    ],
    isFinal: false,
  },
  {
    id: '42', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying- 16-A-2-B –Messages Penny_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '43' },
    ],
    isFinal: false,
  },
  {
    id: '43', // TODO: Story 3 Messages #17A
    description: '',
    imageSrc: 'media/bully/Background_Light.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '44' },
    ],
    isFinal: false,
  },
  {
    id: '44', // TODO: Story 3 Messages (NEED 2 OPTIONS)
    description: '',
    imageSrc: 'media/bully/Bullying-18A_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Bystander', toId: '45' },
      { text: 'Samaritan', toId: '49' },
    ],
    isFinal: false,
  },
  {
    id: '45', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-18A – 1_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '46' },
    ],
    isFinal: false,
  },
  {
    id: '46', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-18A- 1A_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '51' },
    ],
    isFinal: false,
  },
  {
    id: '47', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-18A – 2_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '48' },
    ],
    isFinal: false,
  },
  {
    id: '48', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-18A- 2A_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '51' },
    ],
    isFinal: false,
  },
  {
    id: '49', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-18A – 3_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '50' },
    ],
    isFinal: false,
  },
  {
    id: '50', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-18A- 3A_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '51' },
    ],
    isFinal: false,
  },
  {
    id: '51', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-16 - B_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '52' },
    ],
    isFinal: false,
  },
  {
    id: '52', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-16- B- 2_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '53' },
    ],
    isFinal: false,
  },
  {
    id: '53', // TODO: Story 3 Messages #16-B-2-A
    description: '',
    imageSrc: 'media/bully/Background_Light.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '54' },
    ],
    isFinal: false,
  },
  {
    id: '54', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-16- B- 2-B_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '55' },
    ],
    isFinal: false,
  },
  {
    id: '55', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-16- B- 2-B –Messages_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '56' },
    ],
    isFinal: false,
  },
  {
    id: '56', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-16- B- 2-B –Penny_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '57' },
    ],
    isFinal: false,
  },
  {
    id: '57', // TODO: Story 3 Messages #17B
    description: '',
    imageSrc: 'media/bully/Background_Light.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '58' },
    ],
    isFinal: false,
  },
  {
    id: '58', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-18B_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Befriend', toId: '59' },
      { text: 'Bully', toId: '61' },
    ],
    isFinal: false,
  },
  {
    id: '59', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-18B – 1_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '60' },
    ],
    isFinal: false,
  },
  {
    id: '60', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-18B – 1A_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '63' },
    ],
    isFinal: false,
  },
  {
    id: '61', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-18B – 2_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '62' },
    ],
    isFinal: false,
  },
  {
    id: '62', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-18B – 2A_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '63' },
    ],
    isFinal: false,
  },
  {
    id: '63', // TODO: Story 3 Messages #19
    description: '',
    imageSrc: 'media/bully/Background_Light.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '64' },
    ],
    isFinal: false,
  },
  {
    id: '64', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying- 20_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '65' },
    ],
    isFinal: false,
  },
  {
    id: '65', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-21_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '66' },
    ],
    isFinal: false,
  },
  {
    id: '66', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-22_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '67' },
    ],
    isFinal: false,
  },
  {
    id: '67', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying-23_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '68' },
    ],
    isFinal: false,
  },
  {
    id: '68', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying- 24_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '69' },
    ],
    isFinal: false,
  },
  {
    id: '69', // Story 3 Messages
    description: '',
    imageSrc: 'media/bully/Bullying- 24 – 1_no_buttons.png',
    imageAlt: 'something',
    choices: [
      { text: 'Continue', toId: '70' },
    ],
    isFinal: false,
  },
  {
    id: '70', // TODO Story 3 Messages #19-1
    description: '',
    imageSrc: 'media/bully/Background_Light.png',
    imageAlt: 'something',
    nextGameText: 'Home',
    nextGameLink: 'dashboard',
    isFinal: true,
  },
]

export default states
