import { useRef, useState } from "react";
import { Button, Box, Typography, Modal } from "@mui/material";
import QuestionInput from "./QuestionInput";

const AppForm = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
  });

  const [open, setOpen] = useState(false);

  const questionRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const questionsArray = [
    "What is your name?",
    "What is your favourite number?",
    "What is your favourite food?",
    "Who is your childhood idol?",
    "Do you have any pets?",
    "Would you go to a restaurant or get takeaway?",
    "What is your dream travel destination?",
    "What is your favorite movie or TV show?",
    "What is your most memorable childhood moment?",
    "What hobby or skill would you like to learn?",
  ];

  const handleClose = () => {
    setOpen(false);
  };

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
    setOpen(true);
  };

  return (
    <>
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
            {questionsArray.map((question, index) => (
              <QuestionInput
                value={answers[`question${index + 1}`]}
                key={index}
                label={question}
                ref={questionRefs[index]}
                onChange={(event) =>
                  updateAnswer(`question${index + 1}`, event.target.value)
                }
                onNext={() => handleNext(index)}
                type="text"
              />
            ))}

            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
      <Modal
        open={open}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "secondary.main",
            p: 5,
            borderRadius: 2,
            minWidth: 300,
          }}
        >
          <Typography variant="h5" component={"h5"}>
            Thank you for filling out our survey!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 5 }}>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AppForm;
