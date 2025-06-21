import axios from "./routes/axios";

export async function fetchData(URL, data){
    try{
        const response = await axios.get(URL);
        data.value = response.data.data;
    }catch(error){
        console.error("Данные не были получены: ", error);
    }
}
