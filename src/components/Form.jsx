import { useRef, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import QuestionInput from "./QuestionInput";

const AppForm = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const questionRefs = [useRef(), useRef(), useRef()];

  const handleNext = (cIndex) => {
    if (cIndex < questionRefs.length - 1) {
      questionRefs[cIndex + 1].current.focus();
    }
  };

  const updateAnswer = (key, value) => {
    setAnswers((p) => ({ ...p, [key]: value }));
  };

  const handleSub = (e) => {
    e.preventDefault();
    console.log("Answers submitted!", answers);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: "85%",
          boxShadow: 5,
          mx: "auto",
          p: 3,
          backgroundColor: "#F5F5DC",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            pb: 3,
            alignItems: "center",
          }}
        >
          <img
            style={{ maxWidth: "100px" }}
            src="/SSLogo.png"
            alt="Survey Snail Logo"
          />
          <Typography variant="h4" ml={2}>
            Survey Snail
          </Typography>
        </Box>

        <form onSubmit={handleSub}>
          <QuestionInput
            value={answers.question1}
            label="What is your name ?"
            ref={questionRefs[0]}
            onChange={(event) => updateAnswer("question1", event.target.value)}
            onNext={() => handleNext(0)}
          />

          <QuestionInput
            value={answers.question2}
            label="What is your favourite colour ?"
            ref={questionRefs[1]}
            onChange={(event) => updateAnswer("question2", event.target.value)}
            onNext={() => handleNext(1)}
          />

          <QuestionInput
            value={answers.question3}
            label="What is your favourite hobby ?"
            ref={questionRefs[2]}
            onChange={(event) => updateAnswer("question3", event.target.value)}
            onNext={() => handleNext(2)}
          />

          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AppForm;
