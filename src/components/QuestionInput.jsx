import { TextField, Button, Box } from "@mui/material";
import { forwardRef } from "react";

const QuestionInput = forwardRef(
  ({ label, value, onChange, onNext, type }, ref) => {
    return (
      <Box>
        <TextField
          inputRef={ref}
          label={label}
          value={value}
          onChange={onChange}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          type={type}
        />
        {onNext && (
          <Button
            type="button"
            onClick={onNext}
            variant="outlined"
            sx={{ mt: "5px", mb: "10px", color: "secondary.main" }}
          >
            Next
          </Button>
        )}
      </Box>
    );
  }
);
export default QuestionInput;
