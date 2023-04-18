import React, { useContext, useEffect, useState } from "react";
import { TodoContext, ITitle as EditTodoProp } from "../../contexts/TitleContext";
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check'

const EditTitle = (props: EditTodoProp) => {
  const { dispatch } = useContext(TodoContext);

  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    setTitle(props.title);
  }, []);
  
  const handleClickSubmitBtn = () => {
    const newTitle = { idx: props.idx, title};
    dispatch({ type: "EDIT_TITLE", payload: { title: newTitle } });
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };


  return (
    <Box className="title-item" display={'flex'} alignItems={'center'}>
      <Box>
        <TextField
          variant='outlined'
          className="input-edit-title"
          value={title}
          onChange={handleChangeTitle}
        ></TextField>
      </Box>

      <Box className="btns-container">
        <Button onClick={handleClickSubmitBtn}><CheckIcon sx={{color: '#FF9198'}}/></Button>
      </Box>
    </Box>
  );
};

export default EditTitle;
