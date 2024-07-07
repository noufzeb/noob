import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
      fetch(url)
      .then((res) => res.json())
      .then((data) => setDatas(data))
    },[url]);

    return [datas];
}

export default useFetch