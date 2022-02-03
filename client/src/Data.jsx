import IMAGES from './Components/Images/Images'

const data = [
  {
    id: 1,
    subject: 'Web Development',
    description:
      'Everything from frontend to backend . Right from the basic concepts of the web to deploying a full stack app on platforms like Netlify',
    image: IMAGES.webDev1,
    link: '/webDev',
    background: 'background-gradient-1'
  },
  {
    id: 2,
    subject: 'Android Development',
    description:
      'Learn and build your first app with various technologies such as React Native Flutter or native android with JAVA or Kotlin ',
    image: IMAGES.android_dev1,
    link: '/andDev',
    background: 'background-gradient-2'
  },
  {
    id: 3,
    subject: 'Blockchain',
    description: 'Interested in learning about all the new Web3 and crypto stuff ? Learn while building DApps',
    image: IMAGES.block_dev1,
    link: '/block',
    background: 'background-gradient-3'
  },
  {
    id: 4,
    subject: 'AR/VR',
    description:
      'Immerse yourself in the virtual world and Learn the basics of Augmented reality from basics to publishing your first AR app',
    image: IMAGES.ar_dev1,
    link: '/ar',
    background: 'background-gradient-4'
  },
  {
    id: 5,
    subject: 'Data Structures and Algorithms',
    description: 'Wanna crack those FAAMG interviews ? Everything about DSA from concepts to practice questions',
    image: IMAGES.dsa1,
    link: '/dsa',
    background: 'background-gradient-5'
  }
]

export const subCategories = {

  androidDevelopment: [
    {
      key: '1',
      link: 'reactnative',
      image: IMAGES.reactnative,
      subject: 'React Native',
      description: 'Already Know React ? Learn React Native to enter android world and make beautiful apps with just react.',
      background: 'background-gradient-1'
    },
    {
      key: '2',
      link: 'flutter',
      image: IMAGES.flutter,
      subject: 'Flutter',
      description: ' Learn Dart aand Flutter to enter android world and make beautiful Apps.',
      background: 'background-gradient-2'
    },
    {
      key: '3',
      link: 'flutterProject',
      image: IMAGES.projects,
      subject: 'Projects',
      description: ' Learn Dart aand Flutter to enter android world and make beautiful Apps.',
      background: 'background-gradient-3'
    },
  ],
  webDevelopment: [
    {
      key: '1',
      link: 'frontendDevelopment',
      image: IMAGES.frontend,
      subject: 'Front End Development',
      description: 'Already Know React ? Learn React Native to enter android world and make beautiful apps with just react.',
      background: 'background-gradient-1'
    },
    {
      key: '2',
      link: 'backend',
      image: IMAGES.backend,
      subject: 'Back End and Database',
      description: ' Learn Dart aand Flutter to enter android world and make beautiful Apps.',
      background: 'background-gradient-2'
    },
    {
      key: '3',
      link: 'mern',
      image: IMAGES.projects,
      subject: 'MERN',
      description: ' Learn Dart aand Flutter to enter android world and make beautiful Apps.',
      background: 'background-gradient-3'
    },
    {
      key: '3',
      link: 'reactjs',
      image: IMAGES.reactjs,
      subject: 'ReactJS',
      description: ' Learn Dart aand Flutter to enter android world and make beautiful Apps.',
      background: 'background-gradient-2'
    },
    {
      key: '4',
      link: 'redux',
      image: IMAGES.reactjs,
      subject: 'Redux',
      description: ' Learn Dart aand Flutter to enter android world and make beautiful Apps.',
      background: 'background-gradient-2'
    },

  ],
  ARDevelopment: [
    {
      key: '1',
      link: 'ARbasics',
      image: IMAGES.ARCoverImage,
      subject: 'Unity AR Foundation',
      description: 'Already Know React ? Learn React Native to enter android world and make beautiful apps with just react.',
      background: 'background-gradient-1'
    },
    {
      key: '2',
      link: 'advancedAR',
      image: IMAGES.AdvancedAR,
      subject: 'Advanced AR',
      description: ' Learn Dart aand Flutter to enter android world and make beautiful Apps.',
      background: 'background-gradient-2'
    },
    {
      key: '3',
      link: 'ARprojects',
      image: IMAGES.projects,
      subject: 'Projects',
      description: ' Learn Dart aand Flutter to enter android world and make beautiful Apps.',
      background: 'background-gradient-3'
    },
  ],
  blockchain: [
    {
      key: '1',
      link: 'blockchain',
      image: IMAGES.block_dev1,
      subject: 'Blockchain Basics',
      description: 'Already Know React ? Learn React Native to enter android world and make beautiful apps with just react.',
      background: 'background-gradient-1'
    },
    {
      key: '2',
      link: 'solidity',
      image: IMAGES.solidity,
      subject: 'solidity programming',
      description: 'Already Know React ? Learn React Native to enter android world and make beautiful apps with just react.',
      background: 'background-gradient-2'
    },

  ],
  dsa: [
    {
      key: '1',
      link: 'dsawithcpp',
      image: IMAGES.cpp,
      subject: 'DSA with C++',
      description: 'Already Know C++ ? Learn Data Structures and algorithms to strenghthen your problem solving skills .',
      background: 'background-gradient-1'
    },
    {
      key: '2',
      link: 'dsawithjava',
      image: IMAGES.dsa1,
      subject: 'DSA with JAVA',
      description: ' Already Know JAVA ? Learn Data Structures and algorithms to strenghthen your problem solving skills .',
      background: 'background-gradient-2'
    }
  ],

}

export const playlistId = {

  reactnative: [
    {

      id: "PLwGdqUZWnOp354xMD8u0hxX-1qmCvfLiY",
      firstVideoId: "6cV7oBYfhBQ"

    },
  ],
  flutter: [
    {

      id: "PLHQRWugvckFoxhNfKAMMPp9phyxKH5sP7",
      firstVideoId: "67i6fAmSIrI"
    },
  ],
  flutterProject: [
    {

      id: "PL9n0l8rSshSnT19B70XO9dYUucjD3aYWa",
      firstVideoId: "ggqPDZ9ATH0"
    },
  ],
  frontendDevelopment: [
    {

      id: "PLwGdqUZWnOp0t1YdY2ut9pgA3tqXv64Z3",
      firstVideoId: "DiVxOfUEbfk"
    },
  ],
  backend: [
    {

      id: "PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8",
      firstVideoId: "IIpiLZGTWuo"
    },
  ],
  reactjs: [
    {

      id: "PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ",
      firstVideoId: "6cV7oBYfhBQ"

    },
  ],

  redux: [
    {

      id: "PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK",
      firstVideoId: "9boMnm5X9ak"

    },
  ],
  blockchain: [
    {

      id: "PLsyeobzWxl7oY6tZmnZ5S7yTDxyu4zDW-",
      firstVideoId: "2uYuWiICCM0"

    },
  ],
  solidity: [
    {

      id: "PLgPmWS2dQHW9u6IXZq5t5GMQTpW7JL33i",
      firstVideoId: "gsaapL1SEqg"

    },
  ],
  mern: [
    {

      id: "PL5BFcXE899zyiua0c5LeeSngddRwEDVUE",
      firstVideoId: "9wByPn7ET-0"

    },
  ],
  ARbasics: [
    {

      id: "PLQMQNmwN3FvzCWfvCvq2AYh1CFnTlv2Es",
      firstVideoId: "iRxDKCc6Z64"

    },
  ],
  advancedAR: [
    {

      id: "PLmE2ibStnoYrOdD-hGrNMRyPD5xIU1Xc1",
      firstVideoId: "7iN4ENlrx4A"

    },
  ],
  ARprojects: [
    {

      id: "PLb1h4A0yB978SQuAeBsxup--7ITPCashH",
      firstVideoId: "WZgOYxRanPk"

    },
  ],
  dsawithcpp: [
    {

      id: "PLIY8eNdw5tW_zX3OCzX7NJ8bL1p6pWfgG",
      firstVideoId: "XCyuHSJS7XE"

    },
  ],
  dsawithjava: [
    {

      id: "PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      firstVideoId: "rZ41y93P2Qo"

    },
  ],


}

export const homeData = [
  {
    background: "background-gradient-1",
    image: IMAGES.calendar,  
    subject: "A hype live kick-off show",
    description: "Getting started is difficult so we make the start of every cohort a special event"
  },
  {
    background: "background-gradient-2",
    image: IMAGES.rocket, 
    subject: " Amazing community.",
    description: "Make progress on your project alongside other builders to keep you accountable."
  },
  {
    background: "background-gradient-6",
    image: IMAGES.megaphone,
    subject: "Unique project guides",
    description: "Projects that you can customize + make your own. Build it . Deploy it . Share it"
  },
]


export default data
