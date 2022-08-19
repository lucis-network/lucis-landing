
import s from "./index.module.sass";
import React, { useEffect, useState } from "react";

const data = {
    'gamers': 2068,
    'reward': 1400200
}

export default function NewBanner() {

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div>
                    <div className={s.logo}></div>
                    <div className={s.slogan}>
                        <p id={s.slogan1}>PLAY - ENJOY - EARN - REPEAT</p>
                        <p id={s.slogan2}>Get reward from playing esports and your favourite traditional games</p>
                    </div>
                </div>
                <div className={s.statContainer}>
                    <div>
                        <p>Total Gamers</p>
                        <p id={s.gamers}>{data.gamers.toLocaleString('vi')}</p>
                    </div>
                    <div>
                        <p>Total Reward</p>
                        <p id={s.reward}>${data.reward.toLocaleString('us')}</p>
                    </div>
                </div>
                <div className={s.games}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}