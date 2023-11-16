export interface ProjectObject {
	id: number;
	src: string;
}

const Project = ({ id, src }: ProjectObject) => {
	return (
		<div key={id}>
			<img src={src} alt="" />
		</div>
	);
};

export default Project;
