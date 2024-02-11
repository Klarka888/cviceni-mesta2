const City = ({name, population, area}) => {
return (
    <>
    <div className="city">
        <ul>
            <li>{name}</li>
            <li>{population}</li>
            <li>{area}</li>
        </ul>
    </div>
    </>
)
}

export default City
