import { PageTitle } from '@shared/ui'
import styles from './styles.module.css'

export const HealthPage = () => {
  return (
    <>
      <PageTitle text={'Ссылки на поиск информации в сфере здравоохранения:'} />
      <ul>
        <li>
          1){' '}
          <a className={styles.a} href={'https://www.ffoms.gov.ru/documents/registry/MO/?region=346'}>
            Федеральный фонд медицинского страхования
          </a>
        </li>
        <li>
          2){' '}
          <a className={styles.a} href={'https://med.ulgov.ru/informasiya/'}>
            Министерство здравоохранения Ульяновской области
          </a>
        </li>
      </ul>
    </>
  )
}
