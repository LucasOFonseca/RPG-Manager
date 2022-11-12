import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { Character } from "../../../../shared/models";
import { BasicInfoStep } from "./components/BasicInfoStep";

const DialogPaper = styled(Paper)(({ theme }) => ({
  width: 415,
  margin: "0 !important",
  borderRadius: 8,

  [theme.breakpoints.down(416)]: {
    width: "100%",
    height: "100%",
    maxHeight: "unset",
    borderRadius: 0,
  },
}));

interface CreateCharacterDialogProps {
  open: boolean;
}

export const CreateCharacterDialog: React.FC<CreateCharacterDialogProps> = ({
  open,
}) => {
  const initialValues: Character = {
    name: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  return (
    <Dialog open={open} PaperComponent={DialogPaper}>
      <Box padding="24px 16px 0">
        <Typography
          variant="h6"
          style={{ fontWeight: 700, textAlign: "center" }}
        >
          Criar personagem
        </Typography>
      </Box>

      <DialogContent style={{ padding: "24px 16px 0" }}>
        <BasicInfoStep formik={formik} />
      </DialogContent>

      <DialogActions style={{ padding: "24px 16px" }}>
        <Button fullWidth disableElevation variant="contained">
          próximo
        </Button>
      </DialogActions>
    </Dialog>
  );
};
