import axios from "axios";
import BASE_URL from "../baseUrl/BaseUrl";

const handleMemberSignup = async (memberData) => {

    try{
        const response = await axios.post(`${BASE_URL}/signup`, memberData,
        {
            headers: {'Content-Type': 'application/json'}
        },
        );
        return response;
    }
    catch(error){
        // console.log(error);
        return error;
    }
};

export default handleMemberSignup;