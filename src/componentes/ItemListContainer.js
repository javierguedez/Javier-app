const ItemListContainer = (props) => {
    console.log(props.greeting);

    return (
        <main className="container">
            <h2>Bienvenido, {props.greeting} {props.contenido} {props.clase}</h2>
            </main>
    );
}

export default ItemListContainer;