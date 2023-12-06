import React from "react";
import './MainScreen.scss'
import { Variation } from "../../types";


type MainScreenProps = {
    selected: Variation
}
const MainScreen = ({ selected }: MainScreenProps) => {

    const headerStyle = {
        background: selected.backgroundColor,
    };
  

    return (

        <main style={headerStyle}>
            <div  className="mainScreen container">
                <h1>
                    <span className="spanAir">Air</span>
                    <span className="spanPod">Pod</span>
                    <span className="spanS">S</span>
                    <span className="spanM">M</span>
                    <span className="spanAx">AX</span>
                </h1>
                <div className="headerImage ">

                    <img src={selected.mainImg} alt="airpodsBlu" />
                </div>
            </div>
        </main>


    )
}
export default MainScreen;