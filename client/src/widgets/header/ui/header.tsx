import { useLocation, useNavigate } from 'react-router'
import { Menu, MenuDefaultItem } from '@consta/header/Menu'
import { Text } from '@consta/uikit/Text'

import { PATHS } from '@shared/constants'
import { Toolbar } from '@shared/ui'

import styles from './styles.module.css'

const MENU_ITEMS: MenuDefaultItem[] = [
  { label: 'Главная', href: PATHS.main },
  {
    label: 'Информация о России',
    subMenu: [
      { label: 'Важные факты и события Российской Федерации', href: PATHS.aboutRussia1 },
      {
        label: 'Столица Российской Федерации и названия ее крупнейших городов',
        href: PATHS.aboutRussia2,
      },
      { label: 'Общие правила общения и поведения в России', href: PATHS.aboutRussia3 },
      { label: 'Характеристика Ульяновской области', href: PATHS.aboutRussia4 },
      { label: 'Тестирование 1', href: PATHS.aboutRussia5 },
      { label: 'Тестирование 2', href: PATHS.aboutRussia6 },
    ],
  },
  {
    label: 'Правовые вопросы',
    subMenu: [
      { label: 'Законы', href: PATHS.laws1 },
      { label: 'Визовые требования', href: PATHS.laws2 },
      { label: 'Права и обязанности мигрантов', href: PATHS.laws3 },
      { label: 'Процедуры получения гражданства', href: PATHS.laws4 },
      { label: 'Тестирование', href: PATHS.laws5 },
    ],
  },
  {
    label: 'Работа и образование',
    subMenu: [
      { label: 'Поиск работы', href: PATHS.job1 },
      { label: 'Образовательные учреждения и курсы', href: PATHS.job2 },
      // { label: 'Возможности для повышения квалификации' },
      // { label: 'Культура и традиции Ульяновской области' },
      // { label: 'Тестирование' },
    ],
  },
  {
    label: 'Жилищные вопросы',
    subMenu: [
      { label: 'Как найти жилье?', href: PATHS.house1 },
      { label: 'Справочник по районам', href: PATHS.house2 },
    ],
  },
  {
    label: 'Здравоохранение',
    href: PATHS.health,
  },
  {
    label: 'Статьи',
    href: PATHS.articles,
  },
  {
    label: 'Полезные контакты',
    href: PATHS.contacts,
  },
  {
    label: 'Памятка для мигрантов',
    href: PATHS.info,
  },
]

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isInfoPage = PATHS.info === location.pathname

  const onClick = (item: MenuDefaultItem, { e }: { e: React.MouseEvent }) => {
    e.preventDefault()
    if (item.href) {
      navigate(item.href)
    }
  }

  return (
    <div className={styles.container}>
      {!isInfoPage && (
        <div className={styles.banner}>
          <Text size={'3xl'}>Адаптация 360</Text>
        </div>
      )}
      <Toolbar
        className={styles.toolbar}
        center={<Menu items={MENU_ITEMS} onItemClick={onClick} />}
      />
    </div>
  )
}
