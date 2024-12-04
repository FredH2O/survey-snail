import { useState } from "react";
import { Button, Box, Typography, Modal, Pagination } from "@mui/material";
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
  const [currentPage, setCurrentPage] = useState(1);

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

  const questionPerPage = 3;
  const totalPages = Math.ceil(questionsArray.length / questionPerPage);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSub = (e) => {
    e.preventDefault();
    console.log("Answers submitted!", answers);
    setOpen(true);
  };

  // Get the questions to display for the current page
  const currentQuestions = questionsArray.slice(
    (currentPage - 1) * questionPerPage,
    currentPage * questionPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
            {currentQuestions.map((question, index) => (
              <QuestionInput
                value={
                  answers[
                    `question${index + 1 + (currentPage - 1) * questionPerPage}`
                  ]
                }
                key={index}
                label={question}
                onChange={(event) =>
                  setAnswers((prev) => ({
                    ...prev,
                    [`question${
                      index + 1 + (currentPage - 1) * questionPerPage
                    }`]: event.target.value,
                  }))
                }
                type="text"
              />
            ))}

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </form>

          {/* Pagination using MUI Pagination Component */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </Box>
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
