/*
  Related HTML files: index.html
  
  Description: 
    This file contains the scripts to handle the interactive element which is
    The website Quiz, as well as the buttons to redirect to the subpage or retake the quiz
*/

// Array of quiz questions and possible answers
const quizQuestions = [
    {
      question: "What kind of vibe are you looking for today?",
      answers: [
        { text: "Dreamy and playful", type: "Efemeria" },
        { text: "Magical and cozy", type: "TheLeakyCauldron" },
        { text: "Dark and adventurous", type: "TheWolfPit" },
      ]
    },
    {
      question: "What is your ideal meal today?",
      answers: [
        { text: "A cup of tea and a few biscuits", type: "Efemeria" },
        { text: "A nice snack with a drink", type: "TheLeakyCauldron" },
        { text: "A hearty full meal", type: "TheWolfPit" },
      ]
    },
    {
      question: "Which speaks to you the most?",
      answers: [
        { text: "A dream-like land", type: "Efemeria" },
        { text: "Mysterious but warm", type: "TheLeakyCauldron" },
        { text: "Medieval tavern", type: "TheWolfPit" },
      ]
    },
    {
      question: "Would you rather:",
      answers: [
        { text: "Interact with the theme at your own pace", type: "Efemeria" },
        { text: "Sit, watch and simply enjoy the vibe", type: "TheLeakyCauldron" },
        { text: "Have the world continuously interact with you", type: "TheWolfPit" },
      ]
    },
    {
      question: "Do you mind having to stand in line?",
      answers: [
        { text: "Yes", type: "Efemeria" },
        { text: "If it's not too long", type: "TheLeakyCauldron" },
        { text: "I don't mind", type: "TheWolfPit" },
      ]
    },
  ];
  
  // Object to store the user's answers count for each result type
  let userAnswers = {
    "Efemeria": 0,
    "TheLeakyCauldron": 0,
    "TheWolfPit": 0,
  };
  
  // Current question index (starts at 0)
  let currentQuestionIndex = 0;
  
  
  const startButton = document.getElementById("start-button");
  const nextButton = document.getElementById("next-button");
  const questionContainer = document.getElementById("question-container");
  const answersContainer = document.getElementById("answers-container");
  
  
  const quizTitle = document.getElementById("quiz-title");
  const quizDescription = document.getElementById("quiz-description");
  

  const finalButtons = document.getElementById("final-buttons");
  const restartButton = document.getElementById("restart-button");
  const readMoreButton = document.getElementById("read-more-button");
  
  // Selected answer button (used to highlight selected answer)
  let selectedAnswerButton = null;
  
  
/**
 * Event listener to start the quiz when the start button is clicked.
 * It hides the title and description, then shows the next button and starts the quiz.
 */
  startButton.addEventListener("click", () => {
    quizTitle.style.display = "none";
    quizDescription.style.display = "none";
    startButton.style.display = "none";
    nextButton.style.display = "block";
    renderQuestion(); // Calls the renderQuestion function to display the first question
  });
  
   /**
 * Renders the current question and answer options.
 * Dynamically generates answer buttons for each option.
 */
  function renderQuestion() {
    const questionData = quizQuestions[currentQuestionIndex];
    questionContainer.textContent = questionData.question;
    answersContainer.innerHTML = "";

  // Create answer buttons for each option
    questionData.answers.forEach(answer => {
      const answerButton = document.createElement("button");
      answerButton.textContent = answer.text;
      answerButton.classList.add("answer-button");
      
    // Add an event listener to handle the answer selection
      answerButton.addEventListener("click", () => selectAnswer(answerButton, answer.type));
      answersContainer.appendChild(answerButton);
    });
  }
  
  /**
 * Handles the selection of an answer.
 * Highlights the selected answer button and updates the score for the selected type.
 * Shows the next button after an answer is selected.
 */

  function selectAnswer(button, answerType) {
    if (selectedAnswerButton) {
      selectedAnswerButton.classList.remove("selected");
    }
  
   
    button.classList.add("selected");
    selectedAnswerButton = button;
  
    userAnswers[answerType] += 1;
  
    nextButton.style.display = "block";
  }
  
/**
 * Event listener to move to the next question when the next button is clicked.
 * If there are more questions, it renders the next question. Otherwise, it shows the result.
 */
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
      nextButton.style.display = "none";
      selectedAnswerButton = null;
    } else {
      showResult();
    }
  });
  
  /**
 * Displays the result after all questions have been answered.
 * Determines the result based on the user's selected answers.
 */
  function showResult() {
    const displayMapping = {
      "Efemeria": "Efemeria",
      "TheLeakyCauldron": "The Leaky Cauldron",
      "TheWolfPit": "The Wolf Pit"
    };
  
    // Determine the result by finding the answer type with the highest score
    const result = Object.keys(userAnswers).reduce((a, b) => userAnswers[a] > userAnswers[b] ? a : b);
  
    const displayName = displayMapping[result] || result;
  
    // Display the result to the user
    questionContainer.textContent = "Your next adventure should take place at " + displayName;
    answersContainer.innerHTML = "";
    nextButton.style.display = "none";
  
  
   
    finalButtons.style.display = "block";
  }
  
 /**
 * Event listener to restart the quiz when the restart button is clicked.
 * Resets the quiz to its initial state and starts again from the first question.
 */
  restartButton.addEventListener("click", () => {
    userAnswers = {
      "Efemeria": 0,
      "TheLeakyCauldron": 0,
      "TheWolfPit": 0,
    };
    currentQuestionIndex = 0;
    finalButtons.style.display = "none";
    renderQuestion();
  });
  
/**
 * Event listener to redirect the user to a detailed page for their result when the "read more" button is clicked.
 * Redirects to a specific page based on the result type (Efemeria, The Leaky Cauldron, or The Wolf Pit).
 */
  readMoreButton.addEventListener("click", () => {
    const result = Object.keys(userAnswers).reduce((a, b) => userAnswers[a] > userAnswers[b] ? a : b).trim();

    const pageMapping = {
        "Efemeria": "Efemeria.html",
        "TheLeakyCauldron": "TheLeakyCauldron.html",
        "TheWolfPit": "TheWolfPit.html"
    };

    // Get the target page based on the result
    const targetPage = pageMapping[result];
    console.log("Target page:", targetPage); 

    // Redirect to the target page
    if (targetPage) {
        window.location.href = targetPage;
    } else {
        console.error("Error: No page found for the result:", result);
    }
});
  