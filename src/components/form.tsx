import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import young from "../assets/young.png";
import adult from "../assets/adult.png";
import old from "../assets/old.png";

interface UserDetailsInterface {
  name : string,
  age : number,
  gender : string
}
export const Form = () => {

  const [userDetails,setUserDetails] = useState<UserDetailsInterface>({
    name : "", 
    age : 0,
    gender : ""
  })

  const [image, setImage] = useState<string>();
  const [error, setError] = useState<string>();
  
  const handleNameChange = (event: any) => {
    setUserDetails({...userDetails,name: event.target.value});
  };

  const handleAgeChange = (event: any) => {
    const regex = /^\d+$/; 

    if (regex.test(event.target.value)) {
      setError(undefined);
      setUserDetails({...userDetails,age: event.target.value});
    } else {
      setError("Invalid input (enter numbers only)");
      setImage(undefined);
    }
  };

  const handleGenderChange = (event: any) => {
    setUserDetails({...userDetails, gender : event.target.value});
  };

  useEffect(() => {
    if (userDetails.age && userDetails.age > 0) {
      if (userDetails.age <= 18) setImage(young);
      else if (userDetails.age < 55) setImage(adult);
      else setImage(old);
    }
  }, [userDetails.age]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      padding="100px"
      spacing={3}
    >
      <Grid item>
        <TextField
          label="name"
          variant="outlined"
          onChange={handleNameChange}
        ></TextField>
      </Grid>
      {userDetails.name.length > 0 && (
        <>
          <Grid item>
            <TextField
              label="age"
              variant="outlined"
              onChange={handleAgeChange}
              error={error !== undefined}
              helperText={error}
            ></TextField>
            {image && <img src={image} alt="age" />}
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Gender :</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userDetails.gender}
                label="Gender"
                onChange={handleGenderChange}
                sx={{ width: "200px" }}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
            {userDetails.gender === "male" && <ManIcon fontSize="large" />}
            {userDetails.gender === "female" && <WomanIcon fontSize="large" />}
          </Grid>
        </>
      )}
    </Grid>
  );
};
