function Blogs({datas, title}){
    console.log(datas)
    return (
        <div>
            <h2>{title}</h2>
            {
                datas.map((data) => (
                    <div key={data.id}>
                        <h2>{data.title}</h2>
                        <img src={data.url} alt={data.title} />
                    </div>
                ))
            }
        </div>
    )
}

export default Blogs