import React, {useState} from 'react';
import styles from './PreImage.module.css';

export default function Image() {
    const [fileImage, setFileImage] = useState("");
    const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) =>{
    // @ts-ignore
    setFileImage(URL.createObjectURL(event.target.files[0]));
    };
    const deleteFileImage = () =>{
    URL.revokeObjectURL(fileImage);
    setFileImage("");
    };
    return (
        <div className={styles.all}>
            <div style={{
            alignItems: "center",
            justifyContent: "center", }} > 
        

        <input
        className={styles.input}
        name="imggeUpload"
        type="file"
        accept="image/*"
        onChange={saveFileImage} />

        <div>
        <p className={styles.text}>적용된 이미지 미리보기</p>
        </div>

        <div className={styles.img}>{fileImage && ( <img alt="sample" src={fileImage} style={{ margin: "auto" }} /> )}
                <button style={{
                width: "50px",
                height: "30px",
                cursor: "pointer", }}
                onClick={() => deleteFileImage()} > 삭제 
                </button>
        </div>

        </div>
        </div>
    );
}
