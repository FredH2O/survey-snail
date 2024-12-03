import { TextField, Button, Box } from "@mui/material";
import { forwardRef } from "react";

const QuestionInput = forwardRef(({ label, value, onChange, onNext }, ref) => {
  return (
    <Box>
      <TextField
        ref={ref}
        label={label}
        value={value}
        onChange={onChange}
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      {onNext && (
        <Button
          type="button"
          onClick={onNext}
          variant="outlined"
          sx={{ mt: "10px" }}
        >
          Next
        </Button>
      )}
    </Box>
  );
});
export default QuestionInput;
