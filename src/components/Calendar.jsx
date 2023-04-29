import { CustomButton } from ".";
import { CheckOutlined } from "@ant-design/icons/lib/icons";

export default function Calendar() {
     const daysOfTheWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
     const completedDays = ["tue", "wed"];
     const upcomingDays = ["thu"];


     return (
          <section id="calendar">
               <div className="row" >
                    <CustomButton path="metrics" direction="left" />
                    <h2>September</h2>
                    <CustomButton path="metrics" />
               </div>

               <div className="days">
                    {
                         daysOfTheWeek?.map((day, key) => {
                              
                              
                              return (
                                   <span key={`lingua-days-${key}`}>
                                        <p
                                             className={`date ${completedDays.includes(day) ? "completed"
                                             : upcomingDays.includes(day) ? "upcoming"
                                             : ""}`}
                                        >
                                             {completedDays?.includes(day) ? <CheckOutlined className="tick" />
                                                  : key + 2}</p>
                                        <p className="day capitalize">{day}</p>
                                   </span>
                              )
                         })
                    }
               </div>
          </section>

     )
}