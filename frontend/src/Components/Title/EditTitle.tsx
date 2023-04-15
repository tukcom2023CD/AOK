import React, { useContext, useEffect, useState } from "react";
import { TitleContext, ITitle as EditTitleProp } from "../../contexts/TitleContext";
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';

const EditTitle = (props: EditTitleProp) => {
  const { dispatch } = useContext(TitleContext);

  const [title, setTitle] = useState<string>("");
  const [project, setProject] = useState<string>("");

  useEffect(() => {
    setTitle(props.title);
    // setProject(props.project);
  }, []);

  const handleClickSubmitBtn = () => {
    const newTitle = { idx: props.idx, title, project };
    dispatch({ type: "EDIT_TODO", payload: { title: newTitle } });
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeProject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject(e.target.value);
  };

  return (
    <Box className="todo-item" display={'flex'} alignItems={'center'}>
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
