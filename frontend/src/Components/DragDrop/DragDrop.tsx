import React, {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  useEffect
} from "react";
import "./DragDrop.scss";
import styles from './DragDrop.module.css';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BtnStyle } from '../Button';
import {FaTrash} from 'react-icons/fa';


type IFileTypes = {
  id: number; //파일들의 고유값 id
  object: File;
  URL: string;
}



const DragDrop = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const dragRef = useRef<HTMLLabelElement | null>(null);
  const fileId = useRef<number>(0);
  var reversed_index;

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
            URL: URL.createObjectURL(file)
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


  return (
    <div className="wholediv">
      <div className="DragDrop">
        <div className={styles.left}>
        <input
          type="file"
          id="fileUpload"
          style={{ display: "none" }}
          multiple={true}
          onChange={onChangeFiles}
        />
  
        <label
          className={isDragging ? "DragDrop-File-Dragging" : "DragDrop-File"}
          htmlFor="fileUpload"
          ref={dragRef}
        >
          <div>upload files</div>
        </label>
        </div>
      
        <div className="DragDrop-Files">

          {files.length > 0 &&
            files.map((file: IFileTypes) => {
              const {
                id,
                object: { name },
                URL
              } = file;
              

              return (
                
                <ul className='lists'>
                  <li className='list-new'>
                    
                    <div className="nameDiv">{name}</div>
                    <div className='DragDrop-Files-Filter' onClick={() => handleFilterFile(id)}>
                        <button className={styles.button}><FaTrash size="20"/></button>
                    </div>
                    
                  </li>
                </ul>
                  
                
              );
            })}

        </div>
        
        <div className="PreviewTextdiv">
          Preview
        </div>

        <div className="imagePreview"> 
            {files.length > 0 && files.map((file: IFileTypes)=> {
              const {
                id,
                object: {name},
                URL
              } = file;
              
              reversed_index = files.length - 1 - id;

              return (
                <div key = {id} style={(reversed_index===0) ? {} :  {position: 'absolute', zIndex: reversed_index}}>
                  <img src = {URL}/>
                </div>
              );
            })}
        </div>
      </div>
      
    </div>
  );
};

export default DragDrop;