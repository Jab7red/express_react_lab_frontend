import { useState, useEffect } from "react";

const Projects = (props) => {
    // create state to hold projects
    const [ projects, setProjects ] = useState(null);

    // create function to make api call
    const getProjectData = async () => {
        //make api call ang et response
        const response = await fetch(props.URL + "projects");
        // turn response into javascript object
        const data = await response.json();
        // set the projects state to the data
        setProjects(data);
    };

    // make an initial call for the data inside a useEffect, it only occurs one time
    useEffect(() => getProjectData(), []);

    // define a function that will return the JSX data needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
        <div>
            <h1>{project.name}</h1>
            <img className="projectImage" src={project.image} alt={project.name} />
            <br />
            <a href={project.git}>
                <button>Github</button>
            </a>
            <a href={project.live}>
                <button>Live Site</button>
            </a>
        </div>
        ));
    };

    return projects ? loaded() : <h1>Loading...</h1>
};

export default Projects;