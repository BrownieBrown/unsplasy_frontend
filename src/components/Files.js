import File from "./File"
import {Spin, Space} from 'antd'
import {useFetch} from "../services/client";

const url = `https://unsplasy-backend.herokuapp.com/files`

const Files = () => {
    const {files , loading} = useFetch(url)

    return (
        <section className={"photos"}>
            <div className={"photos-center"}>
                {files.map((image) => {
                    console.log(image)
                    return <File key={image.id} {...image}/>
                })}
            </div>
            {loading && <Space size={"middle"} className={"loading"}><Spin/></Space>}
        </section>
    )
}

export default Files