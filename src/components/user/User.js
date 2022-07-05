export default function User(props) {
    let {item, choseUser} = props;

    return (
        <div>
            {item.id} - {item.name}
            <button onClick={() => {
                choseUser(item)
            }}> details
            </button>
        </div>
    )
}