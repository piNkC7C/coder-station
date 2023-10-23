import {ChangeEvent, useState} from "react";

const useSize = (dom) => {
  const [mapAttr, setMapAttr] = useState({
    width: 500,
    height: 500
  })
  const computeWidthHeight = () => {
    const oMap = dom
    if (oMap) {
      oMap.style.width = mapAttr.width + "px";
      oMap.style.height = mapAttr.height + "px";
    }
  }
  const handleSetMapAttr = (e) => {
    const attr = {...mapAttr, width: +e.target.value}
    switch (e.target.name) {
      case "width":
        setMapAttr(attr);
        break;
      case "height":
        setMapAttr(attr);
        break;
      default:
        break;
    }
  }
  return {
    mapAttr,
    handleSetMapAttr,
    computeWidthHeight
  }
}
export default useSize
