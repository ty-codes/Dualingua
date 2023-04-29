import styled, { keyframes } from "styled-components";

const Loader = () => {
	return (
		<Wrapper>
			<Preloader />
		</Wrapper>
	);
};

export default Loader;

const btnLoader = keyframes`
  from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Preloader = styled.span`
	aspect-ratio: 1;
	height: 40px;
	display: inline-block;
	padding: 0px;
	border-radius: 100%;
	border: 2px solid;
	border-top-color: rgba(99, 111, 172, 1);
	border-bottom-color: rgba(99, 111, 172, 0.15);
	border-left-color: rgba(99, 111, 172, 1);
	border-right-color: rgba(99, 111, 172, 0.15);
	-webkit-animation: ${btnLoader} 0.8s linear infinite;
	animation: ${btnLoader} 0.8s linear infinite;
`;

const Wrapper = styled.div`
	height: calc(100vh - 70px);
	width: 100vw;
	display: flex;
    align-items: center;
    justify-content: center;
`;