import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { useContext } from "react";
import { TitleContext, ITitle } from "../../contexts/TitleContext";
import { Box, Typography } from '@mui/material';

const Title = (props: ITitle) => {
  const { dispatch } = useContext(TitleContext);

  const handleClickDeleteBtn = () => {
    dispatch({ type: "DELETE_TODO", payload: { idx: props.idx } });
  };

  const handleClickUpdateBtn = () => {
    dispatch({ type: "EDIT_START", payload: { idx: props.idx } });
  };

  return (
    <Box className="title-item" display={'flex'}  justifyContent={'center'} alignItems={'center'}>
      <Box>
        <Typography className="title-title" fontSize={'20px'} fontWeight={'bold'}>{props.title}</Typography>
      </Box>
      <Box className="btns-container">
        <Button className="btn-update" onClick={handleClickUpdateBtn} sx={{color: '#FF9198'}}>
          <EditIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Title;
