import React, { useState } from "react";
import { Button, LinearProgress} from "@mui/material";
import { storage, db } from "../Firebase.js";
import firebase from "firebase/compat/app";
import './ImageUpload.css'


function ImageUpload({ userName }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "sate_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamps: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageURL: url,
              userName:  userName ,
            });
          });
        setProgress(0);
        setCaption("");
        setImage(null);
      }
    );
  };

  return (
    <div class = "image__uploader">
      
      <LinearProgress variant="determinate" value={progress} />
      <input
        type="text"
        value={caption}
        placeholder="Enter the caption"
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <Button className="" onClick={handleUpload}>
        {" "}
        Upload{" "}
      </Button>
    </div>
  );
}

export default ImageUpload;
