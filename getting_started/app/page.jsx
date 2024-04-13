import LikeButton from "./like_button";

function Header({title}) {
    return <h1>{title ? title : 'default title' }</h1>
}

export default function HomePage() {
    const names = ["Marwen jridi", "Hmed 5nayna","Taher satour"];
    
    return (
        <div>
            <Header />
            <ul>
                {
                    names.map(name => {
                        <li key={name}>{name}</li>
                    })
                }
            </ul>
            <LikeButton />
        </div>
    )
}