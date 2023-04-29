import { flame } from "../assets";


export default function Notification() {
    const placeholder = 70;
    return (
        <section id="notification">
            <div className="slider-wrapper">
                <p className="header">Today's goal</p>
                <span>
                    <Slider
                        radius={160}
                        border={45}
                        value={placeholder / 100}
                        onChange={() => { }}
                    />
                    <h2>{placeholder}%</h2>
                </span>

            </div>
            <div className="text">
                <h2>Excellent!</h2>
                <p>You're almost there </p>
                <p>Finish the goal to achieve</p>
                <span className="scPrimaryColor">
                    <img className="flame" src={flame} alt="flame" />
                    10</span>
            </div>
        </section>
    )
}

const Slider = ({ radius, border, value }) => {

    const p = 2 * Math.PI * (radius - border / 2)

    const strokeWidth = border
    const strokeDashoffset = p * (1 - value)
    const strokeDasharray = p;

    return (
        <svg
            className="slider"
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        >
            <circle
                className="slider-circle"
                style={{ strokeWidth }}
                r={radius - border / 2}
                cx={radius}
                cy={radius} />

            <circle
                className="slider-bar"
                style={{
                    strokeWidth,
                    strokeDashoffset,
                    strokeDasharray,
                }}
                r={radius - border / 2}
                cx={radius}
                cy={radius} />
        </svg>
    )
}




