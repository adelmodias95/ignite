export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'No name'}</strong>
            <p>{props.repository?.description ?? 'No description'}</p>
            <a href={props.repository?.link ?? '#'}>Acessar repositório</a>
        </li>
    );
}
