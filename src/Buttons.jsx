export default function (props) {

    // console.log(x);

    return (
        <button>{props.text}</button>
    )
}


export function GroupBtn() {
    return (
        <div style={{display: 'flex', gap: '14px'}}>
            <button style={{padding: '3px 22px'}}>A</button>
            <button style={{padding: '3px 22px'}}>B</button>
            <button style={{padding: '3px 22px'}}>C</button>
        </div>
    )
}

export function LinkBtn() {
    return (
        <a href="">Link Button</a>
    )
}

export function CloseBtn() {
    return (
        <span>(❌)</span>
    )
}

export function MenuBtn() {
    return (
        <span>[☰]</span>
    )
}
