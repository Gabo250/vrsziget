import { useEffect, useState } from "react";

function Reservation() {
     const [state, setState] = useState<{}>();

     useEffect(() => {
        const loginUrl = 'https://ec2-3-122-241-56.eu-central-1.compute.amazonaws.com:8080/api/reservation/getall'; // Replace with your login URL
        const loginData = {
            username: "vrsziget",
            password: "Vrsziget2024."
        };

        fetch(loginUrl, {
            method: "GET",            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${loginData.username} ${loginData.password}`            
            }           
        }).then(response => {
            setState(response.json);
            console.log(state);
        })
        
     })
     
     return null
}

export default Reservation;