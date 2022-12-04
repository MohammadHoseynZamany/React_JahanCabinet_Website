import React from "react"
import { Route, Routes, Link } from "react-router-dom"
import KitchenCabinet from "../components/KitchentCabinet"
import Closet from "../components/Closet"
import ShowCase from "../components/ShowCase"
import TvDesk from "../components/TvDesk"
import InputData from "../components/Input"
import "../styles/samples.css"


export default function Samples(){
    const [Data, setData] = React.useState(InputData)

    const [className, setClassName] = React.useState("samplesPage-container")

    function toSetClassName(){
        setClassName("samplesLink-container")
    }

    function handleClick(){
        toSetClassName()
    }

    React.useEffect(()=>{
        if (window.location.pathname != "/Samples/*"){
            toSetClassName()
        }
    }, [])


    let MapCloset = Data.map(item => {
        if (item.type == "Closet"){
            return <Closet key={item.id} url={item.url} details={item.details} title={item.title} />
        }
    })
    let MapKitchenCabinet = Data.map(item => {
        if (item.type == "KitchenCabinet"){
            return <KitchenCabinet key={item.id} url={item.url} details={item.details} title={item.title} />
        }
    })
    let MapShowCase = Data.map(item => {
        if (item.type == "ShowCase"){
            return <ShowCase key={item.id} url={item.url} details={item.details} title={item.title} />
        }
    })
    let MapTvDesk = Data.map(item => {
        if (item.type == "TvDesk"){
            return <TvDesk key={item.id} url={item.url} details={item.details} title={item.title} />
        }
    })

    return(
        <div className="samplesContainer">
            <div className={className}>
                <Link to="/samples/KitchenCabinet" className="samLink" onClick={handleClick}>کابینت آشپزخانه</Link>
                <Link to="/samples/Closet" className="samLink" onClick={handleClick}>کمد لباسی</Link>
                <Link to="/samples/ShowCase" className="samLink" onClick={handleClick}>ویترین</Link>
                <Link to="/samples/TvDesk" className="samLink" onClick={handleClick}>میز تلویزیون</Link>
            </div>
            <Routes>
                <Route index element={<Samples />} />
                <Route path="/KitchenCabinet" element={MapKitchenCabinet} />
                <Route path="/TvDesk" element={MapTvDesk} />
                <Route path="/ShowCase" element={MapShowCase} />
                <Route path="/Closet" element={MapCloset} />
            </Routes>
        </div>
    )


}