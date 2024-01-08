import {
  mdiAccountCircle,
  mdiMonitor,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiTelevisionGuide,
  mdiPalette
} from '@mdi/js'

export default [
  {
    to: '/dashboard',
    icon: mdiMonitor,
    label: 'ダッシュボード'
  },
  {
    to: '/tables',
    label: 'テーブル',
    icon: mdiTable
  },
  {
    to: '/forms',
    label: '会員登録',
    icon: mdiSquareEditOutline
  },
  {
    to: '/ui',
    label: 'UI',
    icon: mdiTelevisionGuide
  },
  {
    to: '/profile',
    label: 'プロフィール',
    icon: mdiAccountCircle
  },
  {
    to: '/login',
    label: 'ログイン',
    icon: mdiLock
  },
  {
    to: '/error',
    label: 'エラー',
    icon: mdiAlertCircle
  },
  {
    to: '/',
    label: 'スタイル',
    icon: mdiPalette
  },
]
