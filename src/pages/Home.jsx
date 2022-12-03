import React from "react"
import '../styles/home.css'

export default function Home(){
    let i = 0;
    const txtFirst = "سلام";
    const txtSecond = "          به وبسایت جهان کابینت خوش آمدید"
    const txtPr = "                                             گروه صنعتی جهان کابینت سازنده انواع کابینت آشپزخانه ، کمد لباسی ، ویترین و میز تلویزیون می باشد."
    const speed = 200;

    React.useEffect(()=>{
        window.onload = typeWriter()
    }, [])

    function typeWriter() {
        if (i < txtFirst.length) {
            document.getElementById("homeFirstText").innerHTML += txtFirst.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else if (i < txtFirst.length + txtSecond.length){
            document.getElementById("homeSecondText").innerHTML += txtSecond.charAt(i);
            i++;
            setTimeout(typeWriter, speed*1);
        }
        else if (i < txtFirst.length + txtSecond.length + txtPr.length){
            document.getElementById("homePr").innerHTML += txtPr.charAt(i);
            i++;
            setTimeout(typeWriter, speed*0.5)
        }
    }

    return (
        <div className="homeContainer">
            <h2 id="homeFirstText"></h2>
            <h1 id="homeSecondText"></h1>
            <h3 id="homePr"></h3>
        </div>
    )
}