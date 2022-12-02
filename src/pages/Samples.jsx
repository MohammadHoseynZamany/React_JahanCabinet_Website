import React from "react"
import { Route, Routes, Link } from "react-router-dom"
import KitchenCabinet from "../components/KitchentCabinet"
import Closet from "../components/Closet"
import ShowCase from "../components/ShowCase"
import TvDesk from "../components/TvDesk"
import InputData from "../components/Input"


export default function Samples(){
    const [Data, setData] = React.useState(InputData)

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
        <div className="samples-container">
            <ul>
                <li>
                    <Link to="/samples/KitchenCabinet">Kitchen Cabinet</Link>
                </li>
                <li>
                    <Link to="/samples/Closet">Closet</Link>
                </li>
                <li>
                    <Link to="/samples/ShowCase">ShowCase</Link>
                </li>
                <li>
                    <Link to="/samples/TvDesk">TvDesk</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/KitchenCabinet" element={MapKitchenCabinet} />
                <Route path="/TvDesk" element={MapTvDesk} />
                <Route path="/ShowCase" element={MapShowCase} />
                <Route path="/Closet" element={MapCloset} />
            </Routes>
        </div>
    )


}