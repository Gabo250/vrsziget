import { useEffect, useState } from "react";

export type cDate = {
    year: number,
    month: string,
    day: number,
    dayOfMonth: string
}

function useDateBar(days: number, actDate: Date) {
    const [date, setDate] = useState<cDate[]>([]);

    useEffect(() => { 
        const dates: cDate[] = [];
        const tempDate = new Date(actDate);
        
        for (let i = 0; i < days; i++) {            
            dates.push({
                year: tempDate.getFullYear(),
                month: (tempDate.getMonth() + 1).toString().padStart(2, '0'),
                day: tempDate.getDay(),
                dayOfMonth: tempDate.getDate().toString().padStart(2, '0')
            });  
            
            tempDate.setDate(tempDate.getDate() + 1);
        }

        setDate(dates);
    }, [actDate]);

    return date;
}

export default useDateBar;