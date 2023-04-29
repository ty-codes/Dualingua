import {  ArrowUpOutlined } from "@ant-design/icons";
import {CustomButton} from ".";
import {flame, female, male} from "../assets";

export default function Leaderboard() {
    const placeholder = [
        {
            name: "Yasmine Lee",
            location: "Taiwan",
            points: "1230",
            image: female
        },
        {
            name: "Guy Hawkins",
            location: "Spain",
            points: "1130",
            image: male
        },

    ]
    return (
        <section id="leaderboard">
            <span className="row">
                <h2>Leaderboard</h2>
                <CustomButton />
            </span>
            {
                placeholder?.map((leader, key) => (
                    <Leader leader={leader} key={key} />
                ))
            }
        </section>
    )
}

const Leader = (leader, key) => {
    const { image, name, location, points } = leader?.leader;

    return (
        <div className="leader" key={`lingua-leaderboard-${key}`}>
            <div>
                <img className="avatar" src={image} alt={`${name}`} />
                <span>
                    <h5 className="capitalize">{name}</h5>
                    <p className="subtitle capitalize">{location}</p>

                </span>

            </div>


            <div>
                <ArrowUpOutlined className="arrow" />

                <img className="flame" src={flame} alt="flame" />
                <h6>{points}</h6>
            </div>
        </div>
    )
};

