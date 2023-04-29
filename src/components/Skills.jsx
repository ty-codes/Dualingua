import { Book, Tablet, Speaker, Headset, Ellipsis } from "../assets/svg";
import styled from "styled-components";


export default function Skills() {
    const placeholder = [
        {
            skill: "reading",
            grade: "100",
            image: <Book />,
        },
        {
            skill: "writing",
            grade: "85",
            image: <Tablet className="tablet" />,
        },
        {
            skill: "speaking",
            grade: "100",
            image: <Speaker />,
        },
        {
            skill: "listening",
            grade: "70",
            image: <Headset />,
        },
    ]

    return (
        <section id="skills">
            <span className="row">
                <h2>Skills</h2>
                <Ellipsis className="ellipsis" />
            </span>

            <div className="skills">
                {placeholder?.map((skill, key) => (
                    <Skill skill={skill} key={key} />
                ))}
            </div>
        </section>
    )
};


const Skill = (skill, key) => {
    const { image, skill: title, grade } = skill?.skill;

    return (
        <div className="skill" key={`lingua-skill-${key}`}>
            <span className="image-wrapper">
                {image}
            </span>
            <h5 className="capitalize">{title}</h5>
            <p className="subtitle">{grade}%</p>
            <Badge grade={grade}>{grade === "100" ? "Completed" : grade > 50 && grade < 100 ? "Good work" : "Do Better?"}</Badge>
        </div>
    );
}

const Badge = styled.p`
    font-weight: 600;
    font-size: 15px;
    background-color: ${props =>
        props.grade === "100" ? "var(--scPrimaryColor)" : "white"}};
    color: ${props =>
        props.grade === "100" ? "var(--white)"
            : props.grade > 50 && props.grade < 100 ? "var(--scPrimaryColor)"
                : "var(--scPrimaryColor)"
    }};
    border: 1px solid ${props =>
        props.grade === "100" ? "transparent" : "var(--scPrimaryColor)"}};
    padding: 13px 0;
    width: 56%;
    border-radius: 40px;
    text-align: center;
    margin: 1em 0;
`