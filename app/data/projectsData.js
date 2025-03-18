import Music from "./images/music.png";
import HrData from "./images/hrdatabases.png";
import Merkle from "./images/Merkle.png";
import Quicksell from "./images/quickshell.png";
import Medical from "./images/medical.png";
import StockImg from "./images/stock.png";
import SentimentAnalysis from "./images/sentiment.png";
import algoVisualizer from "./images/algoVisualizer.png";
import game from "./images/game.png";
import todo from "./images/todo.png";
import portfolio from "./images/portfolio.png";
import sidenav from "./images/Twitter.png";
import carrental from "./images/car.png";
import tasks from "./images/tasks.png";
import flutterapp from "./images/flutter.png";

export const projects = [
  {
    name: "Music Recommendation Based on Music Features.",
    image: Music,
    description:
      "A music recommendation system built with Streamlit and the Spotify API that retrieves users' playlists and tracks.",
    learn: " Working with Spotify Users Playlist APIs, StreamLit",
    skill: [
      {
        skills: "StreamLit",
      },
      {
        skills: "Spotify API",
      },
    ],

    github:
      "https://github.com/Mbalajiviswanadh/Music-reco-Based-on-Tunning-Features-",
    live: "https://p-music-recommendation.streamlit.app/",
  },
  {
    name: "HR-and-JobDetailsPortal",
    image: HrData,
    description:
      "This is a web application designed to help users discover and explore job opportunities and HR details",
    learn: "FrontEnd, DataSet extraction",
    skill: [
      {
        skills: "React.Js",
      },
      {
        skills: "Company DataSet",
      },
    ],

    github: "https://github.com/Mbalajiviswanadh/HR-and-JobDetailsPortal",
    live: "https://hr-and-job-details-portal.vercel.app/",
  },
  {
    name: "Merkle Proof Verification of Blockchain Transactions",
    image: Merkle,
    description:
      "This application designed to interact with and verify Bitcoin blockchain Transaction data in real-time.",
    learn: "BlockChain, Transactions Verification, Merkle Tree Data Structure",
    skill: [
      {
        skills: "React.Js",
      },
      {
        skills: "Node Js",
      },
      {
        skills: "Express Js",
      },
      {
        skills: "BitCoin API",
      },
    ],

    github:
      "https://github.com/Mbalajiviswanadh/Merkle-Proof-Verification-of-Blockchain-Transactions",
    live: "https://charter-21-bce-8520-frontend.vercel.app/",
  },
  {
    name: "Quicksell-Intern FrontEnd task",
    image: Quicksell,
    description: "This is a FrontEnd task by Quicksell",
    learn: "Challenge Logic, User Interface",
    skill: [
      {
        skills: "React.Js",
      },
      {
        skills: "UI",
      },
    ],

    github: "https://github.com/Mbalajiviswanadh/Quicksell-task",
    live: "https://quicksell-task-alpha.vercel.app/",
  },

  {
    name: "Medical Recommendation",
    image: Medical,
    description:
      "A Medical Recommendation app where user can get medical information such as: Medication, Precautions, Diets, etc.. which depends on the Symptoms.",
    learn:
      "SVC, Preprocessing the Data, Developing Recommendation System Logic",
    skill: [
      {
        skills: "StreamLit",
      },
      {
        skills: "Machine learning",
      },
      {
        skills: "scikit learn",
      },
    ],

    github: "https://github.com/Mbalajiviswanadh/Medical-Recommendation",
    live: "https://mbalajiviswanadh-medical-recommendation-app-y6bsng.streamlit.app/",
  },
  {
    name: "Stock Price Prediction",
    image: StockImg,
    description:
      "This project is a comprehensive tool for predicting the stock prices of Tata Consultancy Services (TCS) using various machine learning models.",
    learn:
      "Stock Data Retrieval, Visualization, Model Training & Prediction, useage of Multiple Models",
    skill: [
      {
        skills: "StreamLit",
      },
      {
        skills: "Data Visualization",
      },
    ],

    github: "https://github.com/Mbalajiviswanadh/Stock-Price-Prediction",
    live: "https://github.com/Mbalajiviswanadh/Stock-Price-Prediction",
  },
  {
    name: "Sentiment Analysis",
    image: SentimentAnalysis,
    description:
      "This project is a Sentiment Analysis App built using Streamlit and the transformers library from Hugging Face. The app allows users to input text and analyze its sentiment using a pre-trained BERT model.",
    learn: "Using BERT model, Develope UI using Stream Lit",
    skill: [
      {
        skills: "StreamLit",
      },
      {
        skills: "NLP",
      },
      {
        skills: "Python",
      },
    ],

    github:
      "https://github.com/Mbalajiviswanadh/Sentiment-Analysis/tree/master",
    live: "https://github.com/Mbalajiviswanadh/Sentiment-Analysis/tree/master",
  },
  {
    name: "Sorting Algo Visulizer",
    image: algoVisualizer,
    description:
      "This is a small project wich shows the visualization of the different sorting algorithms",
    learn: "Different Sorting Algos, Dark and Light Themes, Animations",
    skill: [
      {
        skills: "Next Js",
      },
      {
        skills: "Sorting Algos",
      },
      {
        skills: "Hooks",
      },
      {
        skills: "Animations",
      },
    ],

    github: "https://github.com/Mbalajiviswanadh/Algorithm-Visualizer",
    live: "https://algorithm-visualizer-psi-two.vercel.app/",
  },
  {
    name: "Match the Cards",
    image: game,
    description:
      "Match the Cards is a small game application where the user needs to match similar cards.",
    learn:
      "For the API i used CATs images and also used few Hooks for the logics",
    skill: [
      {
        skills: "React Js",
      },
    ],

    github: "https://github.com/Mbalajiviswanadh/memory-card-game",
    live: "https://memory-card-game-roan.vercel.app/",
  },
  {
    name: "TO-DO App",
    image: todo,
    description:
      "In this Todo Application user can 'add,delete and edit' their tasks i also used MongoDB so the tasks for every user will be same",
    learn: "I include CRUD operations",
    skill: [
      {
        skills: "Next Js",
      },
      {
        skills: "Typing Script",
      },
      {
        skills: "MongoDB",
      },
      {
        skills: "Tailwind CSS",
      },
      {
        skills: "Prisma",
      },
    ],
    github: "https://github.com/Mbalajiviswanadh/TodoList-app",
    live: "https://todolist-coral-five.vercel.app/",
  },
  {
    name: "Basic Portfolio",
    image: portfolio,
    description: "This is a Practice Portfolio ",

    learn: "I made this using React Js",
    skill: [
      {
        skills: "React Js",
      },
      {
        skills: "BootStrap",
      },
    ],
    github: "https://github.com/Mbalajiviswanadh/Rjs-Task6",
    live: "https://rjs-task6.vercel.app/",
  },

  {
    name: "Twitter Side Nav",
    image: sidenav,
    description:
      "I made a basic Twitter Side nav bar with default desktop theme(dark | light)",
    learn: "I made this using Next Js",
    skill: [
      {
        skills: "Next Js",
      },
      {
        skills: "Tailwind CSS",
      },
      {
        skills: "Typing Script",
      },
    ],
    github: "https://github.com/Mbalajiviswanadh/Twitter-Side-Navbar",
    live: "https://side-nav-bar-seven.vercel.app/",
  },
  {
    name: "WheelsOnWeb",
    image: carrental,
    description:
      "This is a Basic Car Rental Application, I made this with a Team of 6 people",
    learn: "I made this Web Site using React Js, MongoDB, CRUD operations",
    skill: [
      {
        skills: "React Js",
      },
      {
        skills: "Strip (for only frontend)",
      },
    ],
    github: "https://github.com/Mbalajiviswanadh/wheelsonweb-frontend",
    live: "https://wheelsonweb-frontend.vercel.app/",
  },
  {
    name: "BootStrap",
    image: tasks,
    description: "This is a Practice tasks BootStrap frame work",
    learn: "I used BootStrap for css",
    skill: [
      {
        skills: "React Js",
      },
    ],
    github: "https://github.com/Mbalajiviswanadh/Bootstrap-Java-Tasks",
    live: "https://mbalajiviswanadh.github.io/Bootstrap-Java-Tasks/",
  },
  {
    name: "App UI",
    image: flutterapp,
    description: "It is just a UI of an APP",
    learn: "I made this using Flutter",
    skill: [
      {
        skills: "Flutter",
      },
      {
        skills: "Dart",
      },
    ],
    github: "https://github.com/Mbalajiviswanadh/Flutter-App-UI",
    live: "https://github.com/Mbalajiviswanadh/Flutter-App-UI",
  },
];
