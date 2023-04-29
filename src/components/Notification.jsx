import { flame } from "../assets";

export default function Notification() {
    return (
        <section id="notification">
            <div>
                <p className="header">Today's goal</p>
                <span>
                    <input type="range" class="c-rng" min="0" max="100" step="1" value="82" data-range="circular" data-modifier="c-rng--tomato" />

                    {/* <h2>70%</h2> */}
                </span>
            </div>
            <div>
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