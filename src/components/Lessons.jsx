import {CustomButton} from ".";
import {britain, vocab} from "../assets";
import { Dot } from "../assets/svg";

export default function Lessons() {
    const placeholder = [
        {
            image: britain,
            score: "60",
            course: "Speaking 101",
            days: "30",
            interval: "daily"
        },
        {
            image: vocab,
            score: "60",
            course: "New words",
            days: "90",
            interval: "daily"
        },
        {
            image: britain,
            score: "60",
            course: "Speaking 102",
            days: "30",
            interval: "daily"
        },
        {
            image: vocab,
            score: "60",
            course: "Speaking 101",
            days: "60",
            interval: "daily"
        },
        {
            image: britain,
            score: "60",
            course: "Speaking 101",
            days: "30",
            interval: "daily"
        },
    ]
    return (
        <section id="lessons">
            <span className="row">
                <h2> Your lesson</h2>
                <CustomButton />
            </span>

            <div className="lessons">
                {
                    placeholder?.map((lesson, key) => (
                        <Lesson lesson={lesson} key={key} />
                    ))
                }
            </div>

        </section>
    )
}

const Lesson = (lesson, key) => {

    const { image, course, score, days, interval } = lesson?.lesson;

    return (
        <div key={`lingua-lesson-${key}`} className="lesson">
            <span className="image-wrapper">
                <img src={image} alt={`${course}`} />
            </span>
            <span className="range">
                <input
                    type="range"
                    max="100"
                    min="0"
                    value={`${score}`}
                />
                <h6>{score}%</h6>
            </span>
            <h5>{course}</h5>
            <p className="subtitle">{days} days <Dot /> {interval}</p>
        </div>
    )
}