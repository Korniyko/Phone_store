
import React from "react";
import './СaseAirPods.scss'
import { SelectedItemState } from "../../types";

type CaseProps = {
    selected:SelectedItemState
}

const СaseAirPods = ({selected}:CaseProps) => {


    return (
        <div className="caseAirPods">
            <h1>It even preserves the battery.</h1>
            <p>When stored in the sleek and lightweight Smart Case , AirPods Max enter a low-power state to save energy.</p>
            <div className="caseImg">
                <img src={selected?.caseImg} alt="caseBlu" />
            </div>
            <h1>Stayin' alive, stayin' alive.</h1>
            <h3>20</h3>
            <h4>hours of music, movies and calls with Active Noise Cancellation and Custom Spatial
                Audio turned on. 5 And just 5 minutes of charging via the
                Lightning connector gives you an hour and a half of sound. 6
            </h4>
        </div>
    )
}
export default СaseAirPods;