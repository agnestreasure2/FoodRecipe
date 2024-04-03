import React from "react";
import { View } from "react-native";
import { SvgXml } from 'react-native-svg';



const MyTabBar = () => {

    return(
        <SvgXml xml={`<svg width="375" height="114" viewBox="0 0 375 114" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_12742_127)">
        <path d="M0 8H133.125C142.872 8 151.129 15.1439 155.145 24.0252C160.344 35.5251 170.228 49 188 49C205.772 49 215.656 35.5251 220.855 24.0252C224.871 15.1439 233.128 8 242.875 8H375V114H0V8Z" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_d_12742_127" x="-8" y="0" width="391" height="122" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="4"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.425 0 0 0 0 0.425 0 0 0 0 0.425 0 0 0 0.08 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12742_127"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12742_127" result="shape"/>
        </filter>
        </defs>
        </svg>
        `} width="100%" height="100%" />
    )
}



export default MyTabBar;