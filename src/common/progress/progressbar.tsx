import React, {CSSProperties} from 'react';
import st from './progressbar.module.css';

type PropsType = {
    title: string
    style: CSSProperties | undefined
    percent: number
}


const ProgressCircle: React.FC<PropsType> = ({
                                                 title,
                                                 style,
                                                 percent
                                             }) => {
    return <div className={st.box}>
        <div className={st.percent}>
            <svg >
                <circle cx={75} cy={75} r={70}></circle>
                <circle style={style} cx={75} cy={75} r={70}></circle>
            </svg>
            {/*style={{width: '200px', height: '200px'}}*/}
            {/*style={style}*/}
            <span className={st.number}>{percent}%</span>;
        </div>
        <span className={st.progress}>{title}</span>;
    </div>;
};
export default ProgressCircle;
