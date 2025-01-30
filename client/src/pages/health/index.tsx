import { PageTitle } from '@shared/ui'

export const HealthPage = () => {
  return (
    <>
      <PageTitle text={'Ссылки на поиск информации в сфере здравоохранения:'} />
      <ul>
        <li>
          1){' '}
          <a href={'https://www.ffoms.gov.ru/documents/registry/MO/?region=346'}>
            Федеральный фонд медицинского страхования
          </a>
        </li>
        <li>
          2){' '}
          <a href={'https://med.ulgov.ru/informasiya/'}>
            Министерство здравоохранения Ульяновской области
          </a>
        </li>
      </ul>
    </>
  )
}
