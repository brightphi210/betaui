

import a from '../assets/comimages/a.webp'
import b from '../assets/comimages/b.webp'
import c from '../assets/comimages/c.webp'
import d from '../assets/comimages/d.webp'
import e from '../assets/comimages/e.webp'
import f from '../assets/comimages/f.png'


import beta from '../assets/Beta-Ui---.png'
import welearn from '../assets/logowe.png'

import { FaRegStar } from "react-icons/fa";
import { PiUsersBold } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";


export const items = [
    a,
    b,
    c,
    d,
    e,
    f
]

export const users = [
    {
        name: 'Welearnglobal',
        image: welearn,
        url: 'https://welearnglobal.net/'
    },

    {
        name: 'BetaUI Docs',
        image: beta,
        url: 'https://betauidocs.vercel.app/'
    },

    {
        name: 'Welearnglobal',
        image: welearn,
        url: 'https://welearnglobal.net/'
    },


    {
        name: 'Welearnglobal',
        image: welearn,
        url: 'https://welearnglobal.net/'
    },

]

export const stats = [
    {
        number: '1,200+',
        label: 'Total Downloads',
        "icon": <MdOutlineFileDownload />
    },

    {
        number: '3',
        label: 'Github star',
        "icon": <FaRegStar />
    },

    {
        number: '15',
        label: 'Telegram members',
        "icon": <PiUsersBold />
    },
]