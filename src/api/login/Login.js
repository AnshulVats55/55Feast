import axios from "axios";
import BASE_URL from "../baseUrl/BaseUrl";

const handleMemberLogin = async (memberData) => {
    try{
        const response = await axios.post(`${BASE_URL}/login`, memberData, {
            headers: {'Content-Type': 'application/json'},
        });
        return response;
    }
    catch(error){
        return error;
    }
}

export default handleMemberLogin;