import { collection, getDocs } from "firebase/firestore";
import { db } from "../constants/firebase.js";

const AllItemsHandler = async () => {
    try {
        const allBooks = await getDocs(collection(db, "items"));
        const books = [];
        allBooks.forEach((element) => {
            books.push(element.data());
        });
        return books;
    } catch (e) {
        return { message: "Error fetching data" };
    }
};

export { AllItemsHandler };
