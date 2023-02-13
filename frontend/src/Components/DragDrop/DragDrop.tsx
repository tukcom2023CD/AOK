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
  
  interface IFileTypes {
    id: number;
    object: File;
  }
  
  const DragDrop = () => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [files, setFiles] = useState<IFileTypes[]>([]);
  
    const dragRef = useRef<HTMLLabelElement | null>(null);
    const fileId = useRef<number>(0);
  
    const onChangeFiles = useCallback(
      (e: ChangeEvent<HTMLInputElement> | any): void => {
        let selectFiles: File[] = [];
        let tempFiles: IFileTypes[] = files;
  
        if (e.type === "drop") {
          selectFiles = e.dataTransfer.files;
        } else {
          selectFiles = e.target.files;
        }
  
        for (const file of selectFiles) {
          tempFiles = [
            ...tempFiles,
            {
              id: fileId.current++,
              object: file
            }
          ];
        }
  
        setFiles(tempFiles);
      },
      [files]
    );
  
    const handleFilterFile = useCallback(
      (id: number): void => {
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
            <div>파일 첨부</div>
          </label>
          </div>
        
          <section className="DragDrop-Files">

            {files.length > 0 &&
              files.map((file: IFileTypes) => {
                const {
                  id,
                  object: { name }
                } = file;
    
                return (
                  <ul className='lists'>
                    <li className='list-new'>
                      <div key={id} className="list-row">
                      <div>{name}</div>
                      <div className='DragDrop-Files-Filter' onClick={() => handleFilterFile(id)}>
                        <button className={styles.button}><FaTrash/></button>
                      </div>
                      </div>
                    </li>
                  </ul>
                );
              })}

          </section>
        </div>
        <div className="imagePreview">
          here i am
        </div>
      </div>
    );
  };
  
  export default DragDrop;