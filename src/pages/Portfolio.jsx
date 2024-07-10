import Project from '../components/Project'

const Projects = [
    {
        title: 'Horiseon',
        image_path: '/horiseon.png',
        url: "https://kaitlinnowell.github.io/horiseon-social-solutions/"
    },
    {
        title: 'Prework',
        image_path: '/prework.png',
        url: "https://kaitlinnowell.github.io/prework-study-guide/"
    }]

export default function Portfolio() {
    return (
        <section id="work" >
            {Projects.map((project, index) => (
                <>
                <Project title={project.title} image_path={project.image_path} url={project.url}></Project>
                </>
        ))}
        </section>
    );
  }