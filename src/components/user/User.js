export default function User ({user, show}) {

    const onclick = () => {
        show(user.id)
    }


    return (
        <div>
            {user.name}
            <button onClick={onclick}>posts</button>
        </div>
    );
}