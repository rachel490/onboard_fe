import styled from 'styled-components';

function SlideItem({data,idx}) {
	// console.log('data', data);
	return (
		<Wrap>
			<div>
				<a href={data.linkUrl}>
					<img src={data.imgUrl} alt={data.desc} />
				</a>
			</div>
			<InfoBox>
				<h2>{data.title}</h2>
				<h3>{data.desc}</h3>
				<hr></hr>
				<a href="#">
					바로가기
					<svg className="icon" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
				</a>
			</InfoBox>
		</Wrap>
	)
}

export default SlideItem

const Wrap = styled.li`
	position: relative;
    box-sizing: content-box;
    width: 1060px;
    height: 300px;
    color: white;
    margin: 0 12px;
    float: left;
`;

const InfoBox = styled.div`
	position: absolute;
	bottom: 28px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    opacity: 1;
    text-align: left;
    left: 34px;

	h2 {
		margin:20px 20px 0 20px;
		line-height: 1.5;
		font-size: 18px;
		font-weight: 700;
		color: #333;
		width: "auto";
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	h3 {
		margin: 0 20px;
		height: 44px;
		font-size: 14px;
		line-height: 1.64;
		font-weight: 500;
		color: #333;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	hr {
		height: 1px; 
		margin: 0;
		border: none;
		flex-shrink: 0;
		background-color: #ececec;
	}

	a {
		position: relative;
		font-size: 14px;
		font-weight: 700;
		line-height: 1;
		color: #36f;
		margin: 6px 0 0 13px;
		height: 40px;
		padding: 6px 8px;
		display: inline-flex;
		align-items: center;
		justify-content: center;

		.icon {
			width: 1em;
			height: 1em;
			display: inline-flex;
			fill: currentColor;
		}
	}
`