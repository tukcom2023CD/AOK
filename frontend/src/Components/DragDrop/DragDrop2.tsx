import React, {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  useEffect
} from "react";
import LottieUpload from "../LottieUpload";
import "./DragDrop2.scss";
import styled from 'styled-components';
import styles from './DragDrop.module.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const DragDrop_Modal = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const dragRef = useRef<HTMLLabelElement | null>(null);
  const selectFile = useRef(null);
  const fileId = useRef<number>(0);
  var reversed_index;
  const [fileList, setfileList] = useState<IFileList>({
    imageFiles: files,
  });

  const [inputStatus, setInputStatus] = useState(false);
  const handleClickRadioButton = () => {
    setInputStatus(!inputStatus)
  }

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      let tempFiles: IFileTypes[] = files;
      //temp 변수를 통해 선택한 파일을 담음
      if (e.type === "drop") {
        //드래그 앤 드롭 했을 때
        selectFiles = e.dataTransfer.files;
      } else {
        //파일 첨부 버튼을 눌러 이미지를 선택했을 때
        selectFiles = e.target.files;
      }

      for (const file of selectFiles) {
        //스프레드 연산자를 통해 기존에 있던 파일들을 복사, 선택한 파일 append
        
        if (!/\.(png)$/i.test(file.name)){
          return alert('png 파일만 첨부할 수 있습니다.')
        }
        
        tempFiles = [
          ...tempFiles,
          {
            id: fileId.current++, //fileId의 값을 1씩 늘려주며 각 파일의 고유값으로 사용
            object: file, //object 안에 선택했던 파일들의 정보 담김
            URL: URL.createObjectURL(file),
          }
        ];

        
      }

      setFiles(tempFiles);
    },
    [files]
  );

  //files state 배열의 상태 업데이트, 배열 길이는 파일 선택한 만큼 증가
  
  /**
   * 만약, 리스트에서 파일이 중복으로 들어올 때, (반복문을 돌려서 같을 때)
   * 이전 파일의 id값을 삭제, 이때 새로운 파일은 다른 색상으로 적용(빨간색)  
   */

  //handleFilterFile => id 일치 여부를 확인해 필터링
  

  const handleFilterFile = useCallback(
    (id: number): void => {
      //매개 변수로 받은 id와 일치 여부를 확인해 필터링 함
      setFiles(files.filter((file: IFileTypes) => file.id !== id));
    },
    [files]
  );
  
  const handleDeleteFile = useCallback(
    (id: number): void => {
      setFiles(files.filter((file: IFileTypes) => file.id === id));
    },
    [files]
  );
  

  /*------------- 이미지 업로드 드래그 앤 드랍 관련 함수 ------------*/
  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles]
  );

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  /*------------- 이미지 업로드 드래그 앤 드랍 관련 함수 ------------*/

  /*------------- 리스트 드래그 앤 드랍 관련 함수 ------------*/
    const onDragEnd = (result: any) => {
      if(!result.destination){
        return;
      }

      const { source, destination } = result;
      let lists = [...files];
      let index;

      if(source.index !== destination.index){
        let selectItem = lists[result.source.index];
        lists.splice(result.source.index, 1);
        lists.splice(destination.index, 0, selectItem);
        setFiles(lists);
      }

    };

/*-------------------------------------------------------*/


  /*------------- 리스트 드래그 앤 드랍 관련 함수 ------------*/


  return (
    <div className="inlineblockDiv">
      <div className="DragDrop">

        
        <div className="flexDiv">
      {/* <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        sx={{display: 'felx', flexDirection:'row'}}
      > */}
          <div className="inlineblockDiv">
            <div className="PreviewTextdiv">
            main
            </div>
            <div className="imagePreview2"> 
                {files.length > 0 && files.map((file: IFileTypes, index: number)=> {
                  const {
                    id,
                    object: {name},
                    URL
                  } = file;
                  
                  reversed_index = files.length - 1 - index;

                  return (
                    <div className="imagePreviewDiv" key = {index} style={(reversed_index===0) ? {} :  {position: 'absolute', zIndex: reversed_index}}>
                      <img src = {URL} className="imageDiv"/>
                    </div>
                  );
                })}
            </div>
            <Radio />
            {/* <FormControlLabel value="main" control={<Radio />} label="" /> */}
          </div>

          <div className="inlineblockDiv">
            <div className="PreviewTextdiv">
            branch
            </div>
            <div className="imagePreview2"> 
                {files.length > 0 && files.map((file: IFileTypes, index: number)=> {
                  const {
                    id,
                    object: {name},
                    URL
                  } = file;
                  
                  reversed_index = files.length - 1 - index;

                  return (
                    <div className="imagePreviewDiv" key = {index} style={(reversed_index===0) ? {} :  {position: 'absolute', zIndex: reversed_index}}>
                      <img src = {URL} className="imageDiv"/>
                    </div>
                  );
                })}
            </div>
            <Radio />
            {/* <FormControlLabel value="branch" control={<Radio />} label="" /> */}
          </div>
          {/* </RadioGroup> */}
        </div>          
      </div>
      
    </div>
  );
};

export default DragDrop_Modal;

const dragtest = styled.div`
  width: 500px;
  height: 1000px;
  border: none;
  background-color: red;
  border-radius: 10px;
  padding: 1rem;
  overflow-y: auto;
  //margin-bottom: 50px;
`;

type IFileTypes = {
  id: number; //파일들의 고유값 id
  object: File;
  URL: string;
}

type IFileList = {
  imageFiles: IFileTypes[];
}