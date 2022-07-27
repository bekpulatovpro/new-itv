import React from 'react'
import { NavLink } from 'react-router-dom'
import "./FooterSites.css"

function FooterSites() {
    return (
        <>
        <h3 className='footer__title'>Соцсети</h3>
        <ul className='footer__sites__list'>
            <li className='footer__sites__item'>
                <a href="https://t.me/itvuz" target="_blank">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24c6.629 0 12-5.371 12-12S18.629 0 12 0 0 5.371 0 12s5.371 12 12 12zM5.491 11.74l11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" fill="#fff"></path></svg>
                </a>
            </li>
            <li className='footer__sites__item'>
                <a href="https://www.instagram.com/itv.uz/" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.297 12a2.297 2.297 0 11-4.594 0 2.297 2.297 0 014.594 0z" fill="#fff"></path><path d="M17.372 7.936c-.11-.299-.287-.57-.516-.792a2.133 2.133 0 00-.792-.516c-.243-.094-.608-.206-1.28-.237-.726-.033-.944-.04-2.784-.04-1.84 0-2.058.007-2.784.04-.672.03-1.037.143-1.28.237-.3.11-.57.287-.792.516a2.136 2.136 0 00-.516.792c-.094.243-.206.608-.237 1.28-.033.726-.04.944-.04 2.784 0 1.84.007 2.058.04 2.785.03.671.143 1.036.237 1.28.11.298.287.57.516.791.222.23.493.405.792.516.243.094.608.207 1.28.237.726.033.944.04 2.784.04 1.84 0 2.058-.007 2.784-.04.672-.03 1.037-.143 1.28-.237a2.282 2.282 0 001.308-1.308c.094-.243.206-.607.237-1.28.033-.726.04-.944.04-2.784 0-1.84-.007-2.058-.04-2.784-.03-.672-.143-1.037-.237-1.28zM12 15.538a3.538 3.538 0 110-7.076 3.538 3.538 0 010 7.076zm3.678-6.39a.827.827 0 110-1.653.827.827 0 010 1.654z" fill="#fff"></path><path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm6.85 14.84c-.034.734-.15 1.235-.321 1.674a3.524 3.524 0 01-2.015 2.015c-.439.17-.94.287-1.673.32-.735.034-.97.042-2.84.042-1.872 0-2.107-.008-2.842-.042-.733-.033-1.234-.15-1.672-.32a3.375 3.375 0 01-1.221-.795 3.377 3.377 0 01-.795-1.22c-.17-.439-.287-.94-.32-1.673-.034-.735-.042-.97-.042-2.841 0-1.871.008-2.106.042-2.84.033-.734.15-1.235.32-1.674.173-.46.444-.876.795-1.22.344-.35.76-.622 1.22-.795.439-.17.94-.287 1.673-.32.735-.034.97-.042 2.841-.042 1.871 0 2.106.008 2.84.042.734.033 1.235.15 1.674.32.46.173.876.444 1.22.795.35.344.622.76.795 1.22.17.439.287.94.32 1.673.034.735.042.97.042 2.841 0 1.871-.008 2.106-.042 2.84z" fill="#fff"></path></svg>
                </a>
            </li>
            <li className='footer__sites__item'>
                <a href="https://www.facebook.com/int.television" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.578 6.111h-1.66c-1.301 0-1.553.62-1.553 1.527v2h3.104l-.002 3.135h-3.102v8.043h-3.237v-8.043H7.422V9.639h2.706V7.327c0-2.682 1.639-4.143 4.032-4.143l2.418.004V6.11z" fill="#fff"></path></svg>
                </a>
            </li>
            <li className='footer__sites__item'>
                <a href="https://www.youtube.com/c/iTVuzb" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.505 14.248L14.41 12l-3.904-2.248v4.496z" fill="#fff"></path><path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.498 12.012s0 2.434-.309 3.607a1.88 1.88 0 01-1.321 1.322c-1.174.309-5.868.309-5.868.309s-4.682 0-5.868-.321a1.88 1.88 0 01-1.321-1.322C4.5 14.446 4.5 12 4.5 12s0-2.433.31-3.607a1.917 1.917 0 011.321-1.334C7.306 6.75 12 6.75 12 6.75s4.694 0 5.868.321a1.88 1.88 0 011.322 1.322c.32 1.174.308 3.62.308 3.62z" fill="#fff"></path></svg>
                </a>
            </li>
        </ul>
        </>
    )
}

export default FooterSites
