import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: '학회위원회',
    to: '/comittee',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: '학회',
  },
  {
    component: CNavGroup,
    name: '전산전자공학부',
    to: '/전전',
    // icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CRA',
        to: '/institute/cra',
      },
      {
        component: CNavItem,
        name: '시선',
        to: '/institute/시선',
      },
      {
        component: CNavItem,
        name: 'Chips Chpis',
        to: '/institute/chipschips',
      },
      {
        component: CNavItem,
        name: '이론',
        to: '/institute/이론',
      },
    ],
  },
]

export default _nav
