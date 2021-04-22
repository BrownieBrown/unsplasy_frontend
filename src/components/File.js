import React from 'react'
import {LikeFilled} from "@ant-design/icons";
import {likeImage} from "../services/client";
import {Button} from "antd";

const File = ({id, imageURL, description, likes}) => {
    return (
        <article className={"photo"}>
            <img src={imageURL} alt={description}/>
            <div className={"photo-info"}>
                <div>
                    <p>
                        {/*<Button onClick={likeImage(id)} style={{paddingRight: 20}}><LikeFilled /></Button>*/}
                        <LikeFilled style={{paddingRight: 20}}/>
                        {likes} likes
                    </p>
                </div>
            </div>
        </article>
    )
}

export default File
