import './Practice1.scss';
import grass from './grass.png';

const Worm = () => {
    return(
        <div className=''>
            <div id="div1"></div>
            <div id="eye1">
                    <div id="eye2"></div>
                <div id="eye2"></div>
            </div>
            <div id="div2">
                <div id="div3">
                    <div id="div4">
                        <div id="div5"></div>
                    </div>
                </div>
            </div>
            <div id="grass"><img src={grass} width="500" /></div>
        </div>
    )
}

export default Worm;