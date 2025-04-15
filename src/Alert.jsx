import { Fragment } from "react"

<<<<<<< HEAD
export default function Alert (props) {

    // console.log(props)
=======
export default function (props) {

    console.log(props)
>>>>>>> ba346f972aba7f4e66a913dacf6c56cfba6bbf5e
    return (
        <Fragment>
            <div style={{
                fontSize: '18px',
                padding: '15px',
                border: '10px solid',
                marginBottom: '14px',

                color: props.color,
                backgroundColor: props.bgColor
            }
            }>
                {props.children}
            </div>
<<<<<<< HEAD
            
=======
            <div></div>
>>>>>>> ba346f972aba7f4e66a913dacf6c56cfba6bbf5e
        </Fragment>
    )

}
