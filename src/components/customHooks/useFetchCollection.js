import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../firebase.config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const useFetchCollection = (collectionName) => {
     const [data, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
   
     const getCollection = () => {
       setIsLoading(true);
       try {
         const docRef = collection(db, collectionName);
         const q = query(docRef, orderBy("timestamp", "desc"));
         onSnapshot(q, (snapshot) => {
           // console.log(snapshot.docs);
           const allData = snapshot.docs.map((doc) => ({
             id: doc.id,
             ...doc.data(),
           }));
           if( collectionName=="products"){
            const updatedItems = allData.filter(item => parseInt(item.stock) > 0);
            setData(updatedItems);
           setIsLoading(false);
           }
           else{
            setData(allData);
            setIsLoading(false);
           }
           
         });
       } catch (error) {
         setIsLoading(false);
         toast.error(error.message);
       }
     };
   
     useEffect(() => {
       getCollection();
     }, []);
   
     return { data, isLoading };
   };
   
   export default useFetchCollection;
   