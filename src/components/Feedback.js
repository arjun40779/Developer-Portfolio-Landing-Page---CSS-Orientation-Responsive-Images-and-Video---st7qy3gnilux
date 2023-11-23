import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export function Feedback() {
  const greet = (e) => {
    alert("Thank you for your response!");
  };
  return (
    <div className="feedback">
      {/*     <form
        action="https://formspree.io/f/xwkdjpok"
        method="POST"
        className="form"
      > */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "100%",
            backgroundColor: "white",
            padding: "1rem",
          },
        }}
        noValidate
        autoComplete="off"
        action="https://formspree.io/f/xwkdjpok"
        method="POST"
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          variant="standard"
          name="email"
        />

        <TextField
          required
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="standard"
          name="message"
        />
        <button type="submit" id="submit">
          Send
        </button>
      </Box>
      {/*      </form> */}
    </div>
  );
}
