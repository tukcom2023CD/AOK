import React, { useContext, useEffect, useState } from "react";
import { TodoContext, ITodo as EditTodoProp } from "../../contexts/TodoContext";
import { TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const EditTodo = (props: EditTodoProp) => {
  const { dispatch } = useContext(TodoContext);

  const [title, setTitle] = useState<string>("");
  const [project, setProject] = useState<string>("");

  useEffect(() => {
    setTitle(props.title);
    setProject(props.project);
  }, []);

  const handleClickSubmitBtn = () => {
    const newTodo = { idx: props.idx, title, project };
    dispatch({ type: "EDIT_TODO", payload: { todo: newTodo } });
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeProject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject(e.target.value);
  };

  return (
    <div className="todo-item">
      <div>
        <TextField
          className="input-edit-title"
          value={title}
          onChange={handleChangeTitle}
        ></TextField>
      </div>

      <div className="btns-container">
        <Button onClick={handleClickSubmitBtn}>submit</Button>
      </div>
    </div>
  );
};

export default EditTodo;
