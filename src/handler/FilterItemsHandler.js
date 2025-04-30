import { collection, getDocs } from "firebase/firestore";
import { db } from "../constants/firebase.js";

const FilterItemsHandler = async (data) => {
    try {
        const allBooks = await getDocs(collection(db, "items"));
        const books = [];
        allBooks.forEach((element) => {
            if (
                element.data().category.toLowerCase() ==
                    data.query.toLowerCase() ||
                element.data().title.toLowerCase() == data.query.toLowerCase()
            ) {
                books.push(element.data());
            }
        });
        return books;
    } catch (e) {
        return { message: "Error fetching data" };
    }
};

export { FilterItemsHandler };
