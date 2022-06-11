import { createFactory } from "react"

const DiaryItem = ({author,content,created_date,emotion}) => {
    return(
        <div className="DiaryItem">
            <div className="info">
                <div>
                    작성자 : {author} | 감정 : {emotion}
                </div>
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">{content}</div>
        </div>
    )  
}

export default DiaryItem