import { SettingOutlined, HomeOutlined, HomeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Chart, Users } from "../assets/svg";
import { useLocation } from "react-router-dom";

export default function Footer() {
    const location = useLocation();

    return (
        <footer>
            <Link to="/">
                {location.pathname === "/" ? <HomeFilled className="filled" />
                    : <HomeOutlined className="outlined" />}
            </Link>
            <Link to="metrics"
                style={{
                    stroke: location.pathname === "/metrics"
                        && "var(--primaryColor)"
                }}>

                <Chart />
            </Link>
            <Link to="/"><Users className="outlined" /></Link>
            <Link to="/"><SettingOutlined className="outlined" /></Link>
        </footer>
    )
}

