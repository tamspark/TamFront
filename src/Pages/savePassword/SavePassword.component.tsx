import { FC, useState } from "react";

// style
import { Input } from "App/style/App.style";
import { Button } from "App/style/App.style";
import { StyledForm } from "App/style/App.style";
import { AppDispatch } from "redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { resetPassword } from "redux/Auth/SavePassword/SavePasswordSlice";
const ResetPassword: FC<{}> = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const dispatch: AppDispatch = useDispatch();
  console.log(newPassword);
  const handleResetPassClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);

    const password = {
      password: newPassword,
    };
    try {
      await dispatch(resetPassword(password || ""));
      console.log("sukses");
    } catch (error) {
      console.log("error", error);
    }
    // dispatch(resetPassword(newPassword)).then((resultAction: any) => {
    //   if (resultAction) {
    //     //  navigate("/auth/login");
    //     // Password reset was successful, you can handle success here
    //     console.log("Password reset successful");
    //     // navigate("/auth/login");
    //   } else {
    //     // Password reset failed, you can handle the error here
    //     console.error("Password reset failed:");
    //   }
    // });
  };
  console.log(resetPassword);
  return (
    <>
      <StyledForm height="280px">
        <h1>Add new Password!</h1>
        <Input
          placeholder="New Password"
          type="password"
          fontFamily="sanf-serif"
          fontSize="12px"
          fontWeight="700"
          borderbottomrightradius="20px"
          bordertoprightradius="20px"
          border="1px solid black"
          width="100%"
          height="40px"
          backgroundcolor="#FFFFFF"
          borderradius="10px"
          paddingleft="5px"
          padding="0 10px"
          value={newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPassword(e.target.value)
          }
        ></Input>
        <Input
          placeholder="Confirm Password"
          type="password"
          fontFamily="sanf-serif"
          fontSize="12px"
          fontWeight="700"
          borderbottomrightradius="20px"
          bordertoprightradius="20px"
          border="1px solid black"
          width="100%"
          height="40px"
          backgroundcolor="#FFFFFF"
          borderradius="10px"
          paddingleft="5px"
          padding="0 10px"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        ></Input>
        <Button
          h="40px"
          w="100%"
          variant="primary"
          borderRadius="5px"
          fontFamily="sanf-sarif"
          fontSize="18px"
          fontWeight="700"
          onClick={handleResetPassClick}
        >
          Submit
        </Button>
      </StyledForm>
    </>
  );
};

export default ResetPassword;
