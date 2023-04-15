import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext } from "react";
import { TodoContext, ITodo } from "../../contexts/TodoContext";
import { Box, Typography } from '@mui/material';

const Todo = (props: ITodo) => {
  const { dispatch } = useContext(TodoContext);

  const handleClickDeleteBtn = () => {
    dispatch({ type: "DELETE_TODO", payload: { idx: props.idx } });
  };

  const handleClickUpdateBtn = () => {
    dispatch({ type: "EDIT_START", payload: { idx: props.idx } });
  };

  return (
    <Box className="todo-item" display={'flex'}  justifyContent={'center'} alignItems={'center'}>
      <Box>
        <Typography className="todo-title">{props.title}</Typography>
      </Box>
      {/* <div>
        <p className="todo-project">{props.project}</p>
      </div> */}
      <Box className="btns-container">
        <Button className="btn-update" onClick={handleClickUpdateBtn}>
          <EditIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Todo;
