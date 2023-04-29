import { flame } from "../assets";


export default function Header() {
    return (
        <header id="header">
            <div>
                <p>Hello Rachel,</p>
                <h4>
                    <span className="primaryColor">Ready to </span>
                    <span className="scPrimaryColor">play English?</span>
                </h4>
            </div>
            <span className="point">
                <img className="flame" src={flame} alt="flame" />65
            </span>
        </header>
    )
}