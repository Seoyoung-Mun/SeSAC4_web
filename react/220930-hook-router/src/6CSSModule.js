import style from './6CSSModule.module.css';

const CSSModule = () => {
    return (
        <div className={`${style.box1} ${style.center}`}>
            <h2>Css module</h2>
        </div>
    )
}

export default CSSModule;