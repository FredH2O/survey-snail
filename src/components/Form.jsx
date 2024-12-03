import { useRef, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import QuestionInput from "./QuestionInput";

const AppForm = () => {
  const [answers, setAnswers] = useState();
  const questionRefs = [useRef(), useRef(), useRef()];

  const handleNext = (cIndex) => {
    if (cIndex < questionRefs.length - 1) {
      questionRefs[currentIndex + 1].current.focus();
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
    <Box>
      <Typography variant="h4">Survey Snail</Typography>
      <form onSubmit={handleSub}>
        <QuestionInput label="What is your name?" ref={questionRefs[0]} />

        <QuestionInput
          label="What is your favourite colour?"
          ref={questionRefs[1]}
        />

        <QuestionInput
          label="What is your favourite hobby?"
          ref={questionRefs[2]}
        />

        <Button></Button>
      </form>
    </Box>
  );
};

export default AppForm;
