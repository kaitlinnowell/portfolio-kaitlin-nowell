export default function Project({title, image_path, url}) {
    return (
        <a href={url} class="card">
            <label>{title}</label>
            <img src={image_path}></img>
        </a>
    )
}