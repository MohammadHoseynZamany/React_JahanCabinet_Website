import React from "react"
import { Route, Routes } from "react-router-dom"
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
                return <KitchenCabinet key={item.id} url={item.url} details={item.details} title={item.title} />
        }
    })

    return(
        <div className="samples-container">
            {MapComp}
        </div>
    )


}