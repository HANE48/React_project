import React from "react";
import { useParams } from "react-router-dom";

const SelectEmotion = ()=>{

    const {id} = useParams()

    return(
        <div>
            <h3>{id}님, 반갑습니다. 오늘의 기분은 어떠신가요? :) </h3>
            <div>
                <button>행복</button>
                <button>즐거움</button>
                <button>슬픔</button>
                <button>외로움</button>
            </div>
        </div>
    )
}

export default SelectEmotion