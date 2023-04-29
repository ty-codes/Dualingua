import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons/lib/icons";
import styled from "styled-components";


export default function CustomButton({ direction, path }) {
    return (
        <CustomLink to={path ? `/${path}` : "/"} className="custom-button">
            {direction === "left" ? <LeftOutlined /> : <RightOutlined />}
        </CustomLink>
    );
};

const CustomLink = styled(Link)`
    border-radius: 6px;
    border: 2px solid var(--primaryColor);
    height: 21px;
    width: 21px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        color: var(--primaryColor);
        width: 80%;
        height: 80%;
    }
`;