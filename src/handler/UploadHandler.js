import { addDoc, collection } from "firebase/firestore";
import { db } from "../constants/firebase.js";
import bcrypt from "bcryptjs";

const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const formattedDate = `${month}-${day}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return `${formattedDate} ${formattedTime}`;
};

const UploadHandler = async (data) => {
    const date = getCurrentDateTime();
    try {
        await addDoc(collection(db, "items"), {
            id: bcrypt.hashSync(data.id, 10),
            title: data.title,
            price: data.price,
            category: data.category,
            img: data.img,
            date: date,
        });
        return true;
    } catch (e) {
        return false;
    }
};

export { UploadHandler };
