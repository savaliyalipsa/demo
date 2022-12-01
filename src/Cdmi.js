/* eslint-disable jsx-a11y/alt-text */
function Cdmi(props) {
    return (
        <>
                <div className="box">
                    <div>
                        <img src={props.img}></img>
                    </div>
                    <div class="cource">
                        {props.name}
                    </div>
                    <div className="text">{props.par}</div>
                </div>

        </>
    )

}
export default Cdmi;