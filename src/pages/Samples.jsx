import React from "react"
import { Route, Routes, Link } from "react-router-dom"
import KitchenCabinet from "../components/KitchentCabinet"
import Closet from "../components/Closet"
import ShowCase from "../components/ShowCase"
import TvDesk from "../components/TvDesk"
import InputData from "../components/Input"


export default function Samples(){
    const [Data, setData] = React.useState(InputData)
    const MapComp = Data.map(item => {
        switch (item.type){
            case "KitchenCabinet":
                return <KitchenCabinet key={item.id} url={item.url} details={item.details} title={item.title} />;
            case "Closet":
                return <Closet key={item.id} url={item.url} details={item.details} title={item.title} />;
            case "ShowCase":
                return <ShowCase key={item.id} url={item.url} details={item.details} title={item.title} />;
            case "TvDesk":
                return <TvDesk key={item.id} url={item.url} details={item.details} title={item.title} />;
                                    
        }
    })

    return(
        <div className="samples-container">
            <h1>Samples</h1>
            <Routes>
                <Route path="/KitchenCabinet" element={MapComp} />
                <Route path="/TvDesk" element={MapComp} />
                <Route path="/ShowCase" element={MapComp} />
                <Route path="/Closet" element={MapComp} />
            </Routes>
        </div>
    )


}