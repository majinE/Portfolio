import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function ProjectDetail({ userName }) {
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState([]);
    const {projectName} = useParams();
    console.log(projectName);
    useEffect(() => {
        async function fetchProjectData() {
            const data = await fetch(`https://api.github.com/repos/${userName}/${projectName}`);
            const result = await data.json();
            if (result) {
                setProject(result);
                setLoading(false);
                console.log(result);
            }
        }
        if (userName && projectName) {
            fetchProjectData();
        }
    }, [userName, projectName]);
    return (
        <div className='Project-container'>
            <h2>Project: {project.name}</h2>
            {loading ? (
                <span>Loading ...</span>
            ) : (
                <div></div>
            )}
        </div>
    );
}
export default ProjectDetail;