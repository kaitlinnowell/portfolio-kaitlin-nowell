import Project from '../components/Project'

const Projects = [
    {
        title: 'Text-Editor',
        image_path: '/jate.png',
        url: "https://text-editor-btw7.onrender.com"
    },
    {
        title: 'Tech-Blog',
        image_path: '/tech-blog.png',
        url: "https://tech-blog-nx6e.onrender.com/"
    },
    {
        title: 'Note-Taker',
        image_path: '/note-taker.png',
        url: "https://note-taker-k8uk.onrender.com/"
    },
    {
        title: 'Weather Dashboard',
        image_path: '/weather-dashboard.png',
        url: "https://kaitlinnowell.github.io/weather-dashboard/"
    },
    {
        title: 'Task Manager',
        image_path: '/task-manager.png',
        url: "https://kaitlinnowell.github.io/task-manager/"
    },
    {
        title: 'Personal Blog',
        image_path: '/personal-blog.png',
        url: "https://kaitlinnowell.github.io/personal-blog/"
    },
    {
        title: 'Payroll Tracker',
        image_path: '/payroll-tracker.png',
        url: "https://kaitlinnowell.github.io/employee-payroll-tracker/"
    },
    {
        title: 'Horiseon',
        image_path: '/horiseon.png',
        url: "https://kaitlinnowell.github.io/horiseon-social-solutions/"
    },
    {
        title: 'Prework',
        image_path: '/prework.png',
        url: "https://kaitlinnowell.github.io/prework-study-guide/",
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