import classes from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import expenseImage from "../../../../../public/images/projects images/purple_color_money_symbol.jpg";
import weatherImage from "../../../../../public/images/projects images/yellow_color_weather_symbol.jpg";
import movieImage from "../../../../../public/images/projects images/blue_color_movie_symbol.jpg";
import forwardImage from "../../../../../public/images/projects images/red_color_shopping_cart.png";
import galleryImage from "../../../../../public/images/projects images/grey_color_camera_symbol.png";

function Project() {
  let projectsData = [
    {
      title: "Expense Tracker",
      description: "Website to manage your expenses",
      image: expenseImage,
      tags: ["react", "html", "css", "javascript"],
      links: {
        source: "https://github.com/Utkarsh-190/Expense-Tracker",
        live: "https://utkarsh-190.github.io/Expense-Tracker/",
      },
    },
    {
      title: "MovieInfo",
      description:
        "Website to search for movies and get all details about movie",
      image: movieImage,
      tags: ["javascript", "html", "css", "axios", "jquery", "bootstrap"],
      links: {
        source: "https://github.com/yashsharma110/MovieInfo-App",
        live: "https://yashsharma110.github.io/MovieInfo-App/",
      },
    },
    {
      title: "Weather App",
      description: "Website to search for temperature and related data",
      image: weatherImage,
      tags: ["html", "css", "javascript"],
      links: {
        source: "https://github.com/yashsharma110/weather-app",
        live: "https://yashsharma110.github.io/weather-app/",
      },
    },
  ];
  return (
    <div className={classes.projectPage}>
      {projectsData.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

export default Project;
