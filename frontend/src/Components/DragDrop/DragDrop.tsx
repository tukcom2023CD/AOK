import React, {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  useEffect
} from "react";
import { useNavigate } from "react-router-dom";
import LottieUpload from "../LottieUpload";
import "./DragDrop.scss";
import styled from 'styled-components';
import styles from './DragDrop.module.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import axios from 'axios'; 



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


const Backgrdiv = styled.div`
  display: inline-block;
  width: 100%;
  background-color: white;
  text-align: center;
`; 


const Commentdiv = styled.input`
  width: 1000px;
  height: 85px;
  border-radius: 10px;
  background-color: #FFF4F4;
  border: 3px solid #FFDEDE;
  font-size: 20pt;
  font-weight: bold;
  padding: 1.5rem;
  //box-shadow: 2px 4px 8px;
`;

const Btndiv = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;
`;

const ApplyBtn = styled.button `
  width: 250px;
  height: 75px;
  background-color: #FF9198;
  color: white;
  font-size: 18pt;
  font-weight: bold;
  border-radius: 20px;
  &:hover{
    background-color: #d7777e;
    transition: 0.5s;
  }
`;


type IFileTypes = {
  id: number; //파일들의 고유값 id
  object: File;
  URL: string;
  name: string; 
}

type IFileList = {
  imageFiles: IFileTypes[];
}

interface logResponse{
  status: number;
  code: string;
  message: string;
  data: logInfo;
}


interface logInfo{
  uuid: string;
  createdAt: string;
}


const DragDrop = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [fileobjects, setFiles] = useState<IFileTypes[]>([]);
  const dragRef = useRef<HTMLLabelElement | null>(null);
  const selectFile = useRef(null);
  const fileId = useRef<number>(0);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  var reversed_index;
  

  const fileList: IFileList = {
    imageFiles: fileobjects
  }


  const createLog = async() => {
    if(fileobjects.length ===0 && msg === ''){

    }
    else if(fileobjects.length === 0){
      alert('이미지 파일을 업로드 해주세요.')
    }
    else if(msg === ''){
      alert('업로드 메시지를 꼭 적어주세요.');
    } else {
      const formData = new FormData();
      const files: File[] = fileList.imageFiles.map((file) => file.object);
      console.log("오브젝트 추출 :", files);

      Array.from(files).forEach((el) => {
        formData.append("files", el); 
      });
        formData.append("userId", '1');
        formData.append("branchId", '1'); 
        formData.append("message", msg);

      // FormData의 key 확인
      // @ts-ignore
      for (const key of formData.keys()) {
        console.log("키값: ", key);
      }
      // FormData의 value 확인
      // @ts-ignore
      for (const value of formData.values()) {
        console.log("밸류값: ", value);
      }
      console.log(formData);



      await axios.post('/api/v1/logs', {
        data: formData,
      }, {
        headers: {
          "Content-Type" : "multipart/form-data",
        },
        transformRequest: [
          function () {
            return formData;
          }
        ],
      }).then((response) => {
        console.log("로그 생성 성공")
        console.log(response.data.data.uuid)
        window.location.replace("/project");

      }).catch((error) => {
        console.log("로그 생성 실패")
        console.log(error);
    })

    }
  }

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      let tempFiles: IFileTypes[] = fileobjects;
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
            name: file.name
          }
        ];

        
      }

      setFiles(tempFiles);
    },
    [fileobjects]
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
      setFiles(fileobjects.filter((file: IFileTypes) => file.id !== id));
    },
    [fileobjects]
  );
  
  const handleDeleteFile = useCallback(
    (id: number): void => {
      setFiles(fileobjects.filter((file: IFileTypes) => file.id === id));
    },
    [fileobjects]
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
      let lists = [...fileobjects];
      let index;

      console.log(lists)

      if(source.index !== destination.index){
        let selectItem = lists[result.source.index];
        lists.splice(result.source.index, 1);
        lists.splice(destination.index, 0, selectItem);
        setFiles(lists);
        console.log(lists)
      }

    };

  

  /*------------- 리스트 드래그 앤 드랍 관련 함수 ------------*/
  console.log("업로드 파일 목록",fileobjects)

  return (
    <Backgrdiv>
    <div className="inlineblockDiv">
      <div className="DragDrop">

        
        <div className="flexDiv">
          <div className="inlineblockDiv">
            <div className="PreviewTextdiv">
            preview
            </div>
            <div className="imagePreview"> 
                {fileobjects.length > 0 && fileobjects.map((file: IFileTypes, index: number)=> {
                  const {
                    id,
                    object: {name},
                    URL
                  } = file;
                  
                  reversed_index = fileobjects.length - 1 - index;

                  return (
                    <div className="imagePreviewDiv" key = {index} style={(reversed_index===0) ? {} :  {position: 'absolute', zIndex: reversed_index}}>
                      <img src = {URL} className="imageDiv"/>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="uploadDiv">
            <div className="PreviewTextdiv">
            <div className="textDiv">drag and drop the files</div>
            <div className="buttonsDiv">
              <label className={styles.button} htmlFor="fileUploadbtn" ref={selectFile}>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
              <span className="material-icons">upload_file</span>
              <input
                type="file"
                id="fileUploadbtn"
                style={{display: "none"}}
                multiple={true}
                onChange={onChangeFiles}
                ref={selectFile}
                /> 
              </label>
              
              <button className={styles.button} onClick={() => window.location.reload()}><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <span className="material-icons">refresh</span>
              </button>
              
            </div>
            </div>
            
            {/* <input
              type="file"
              id="fileUpload"
              style={{display: "none"}}
              multiple={true}
              onChange={onChangeFiles}
            /> */}
            <label 
              className={isDragging? "DragDrop-File-Dragging" : "DragDrop-Files1"}
              htmlFor="fileUpload"
              ref={dragRef}
            >
              
            <DragDropContext onDragEnd = {onDragEnd}>
              <Droppable droppableId="DragDrop-Files">
                {(provided) => (
                  <div 
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  >
                  <div className="DragDrop-Files">
                  {fileobjects.length > 0 &&
                    fileobjects.map((file: IFileTypes, index: number) => {
                      const {
                        id,
                        object: { name },
                        URL
                      } = file;
                      
                      return (
                        <Draggable draggableId={name} index={index} key = {id}>
                          {(provided) => (
                          <ul className='lists'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <li className='list-new'>
                              
                              <div className="nameDiv">{name}</div>
                              <div className='DragDrop-Files-Filter' onClick={() => handleFilterFile(id)}>
                                  <button className={styles.button}><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" /><span className="material-icons">highlight_off</span></button>
                              </div>
                              
                            </li>
                          </ul>)}
                          
                        </Draggable> 
                        
                      );
                    })}

                  </div>
                  </div>
                )}
              
              </Droppable>
            </DragDropContext>
            </label>
          </div>
        </div>          

        
      </div>
      
    </div>
    <Commentdiv type="text" value={msg} onChange={(event)=>setMsg(event.target.value)}/>
    <Btndiv>
      <ApplyBtn onClick={createLog}>apply</ApplyBtn>
    </Btndiv>
    </Backgrdiv>
  );
};

export default DragDrop;