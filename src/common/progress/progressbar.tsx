import React, {CSSProperties} from 'react';
import st from './progressbar.module.css'

type PropsType = {
    title: string
    style: CSSProperties | undefined
}


const ProgressCircle: React.FC<PropsType> = ({
                                                 title,
                                                 style
                                             }) => {
    return <div className={st.box}>
        <div className={st.percent}>
            <svg >
                <circle  cx={70} cy={70} r={70}></circle>
                <circle style={style} cx={70} cy={70} r={70}></circle>
            </svg>
            <span className={st.number}>87%</span>
        </div>
        <span className={st.progress}>{title}</span>
    </div>
}
export default ProgressCircle;