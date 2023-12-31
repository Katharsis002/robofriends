
const Card = (props) => {
    const {name, email, id } = props;
        return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
             <img alt='photorobot' src={`https://robohash.org/${id}fresh?200x200`}/>
            
            <div className="container">

            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        </div>
    )
}

export default Card