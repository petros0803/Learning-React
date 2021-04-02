import KingMando from './images/KingMando.jpg'

const FormSuccess = () => {
    return (
        <div>
            <div className="form-content-right">
                <div className="form-success">
                    We have received your request!
                    <img src={KingMando} alt="KING MANDO"/>
                </div>
            </div>
        </div>
    )
}

export default FormSuccess
