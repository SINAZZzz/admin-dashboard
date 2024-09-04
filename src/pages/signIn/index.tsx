import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/loginSlice";
import Loading from "../../components/loading";

export default function SignIn() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <Box>{isLoggedIn ? "SignIn" : <Loading />}</Box>;
}
