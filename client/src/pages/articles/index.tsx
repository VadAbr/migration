import { PageTitle } from '@shared/ui'

import styles from './styles.module.css'
const links = [
  'https://cyberleninka.ru/article/n/tendentsii-mezhdunarodnoy-migratsii-naseleniya-v-rossii-v-pervom-polugodii-2023-g',
  'https://clck.ru/3Ftm8C',
  'https://moluch.ru/archive/341/76704/',
  'https://moluch.ru/archive/498/109468/',
  'https://moluch.ru/archive/446/98178/',
  'https://cyberleninka.ru/article/n/migratsionnaya-politika-rossiyskoy-federatsii-problemy-tendentsii-perspektivy-razvitiya/viewer',
  'https://fundamental-research.ru/ru/article/view?id=39584',
  'https://www.researchgate.net/publication/338173135_MIGRACIONNAA_POLITIKA_ROSSII_V_KONTEKSTE_UPRAVLENIA_MIGRACIEJ_NA_POSTOVETSKOM_PROSTRANSTVE',
  'https://cyberleninka.ru/article/n/ponyatie-migratsii-nezakonnoy-migratsii-i-borby-s-nezakonnoy-migratsiey/viewer',
  'https://cyberleninka.ru/article/n/migratsii-i-religii',
]

export const ArticlesPage = () => {
  return (
    <>
      <PageTitle
        text={'Ссылки на актуальные статьи, касающихся миграционной политики представлены ниже'}
      />
      <ul className={styles.wrapper}>
        {links.map((el, i) => (
          <li className={styles.item}>
            {i + 1}){' '}
            <a className={styles.link} href={el}>
              {el}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
