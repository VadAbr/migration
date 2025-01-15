import { PageTitle } from '@shared/ui'
import { Text } from '@consta/uikit/Text'
import styles from './styles.module.css'

export const Laws1Page = () => {
  return (
    <>
      <PageTitle text={'Правовые основы миграционного законодательства Российской Федерации'} />

      <ul className={styles.list}>
        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'https://www.consultant.ru/document/cons_doc_LAW_28399/'}>
            Конституция Российской Федерации
          </Text>
        </li>
        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'https://www.consultant.ru/document/cons_doc_LAW_34683/'}>
            Трудовой кодекс Российской Федерации
          </Text>
        </li>
        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'https://www.consultant.ru/document/cons_doc_LAW_5142/'}>
            Гражданский кодекс Российской Федерации
          </Text>
        </li>

        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'https://www.consultant.ru/document/cons_doc_LAW_34661/'}>
            Административный кодекс Российской Федерации
          </Text>
        </li>
        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'https://www.consultant.ru/document/cons_doc_LAW_51057/'}>
            Жилищный кодекс Российской Федерации
          </Text>
        </li>

        <Text>Международные договоры Российской Федерации, в том числе:</Text>
        <li data-extra="true">
          <Text
            view={'link'}
            as={'a'}
            href={
              'https://legalacts.ru/doc/soglashenie-mezhdu-pravitelstvom-rossiiskoi-federatsii-i-pravitelstvom-ukrainy-o/'
            }>
            Соглашение между Правительством Российской Федерации и Правительством Украины о
            безвизовых поездках граждан Российской Федерации и Украины от 16 января 1997 года
          </Text>
        </li>
        <li data-extra="true">
          <Text
            view={'link'}
            as={'a'}
            href={
              'https://legalacts.ru/doc/soglashenie-mezhdu-pravitelstvom-respubliki- belarus-pravitelstvom-respubliki-kazakhstan-pravitelstvom_2/'
            }>
            Соглашение от 30 ноября 2000 года между Правительством Республики Беларусь,
            Правительством Республики Казахстан, Правительством Кыргызской Республики,
            Правительством Российской Федерации и Правительством Республики Таджикистан о взаимных
            безвизовых поездках граждан
          </Text>
        </li>

        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'https://www.consultant.ru/document/cons_doc_LAW_2255/'}>
            Федеральный закон «О праве граждан Российской Федерации на свободу передвижения, выбор
            места пребывания и жительства в пределах Российской Федерации» от 25 июня 1993 г. №
            5242-I
          </Text>
        </li>

        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'https://www.consultant.ru/document/cons_doc_LAW_11376/'}>
            ФЗ «О порядке выезда из Российской Федерации и въезда в Российскую Федерацию» от 15
            августа 1996 г. № 114-ФЗ
          </Text>
        </li>

        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'https://www.consultant.ru/document/cons_doc_LAW_36927/'}>
            ФЗ «О гражданстве Российской Федерации» от 31 мая 2002 г. № 62-ФЗ
          </Text>
        </li>

        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'https://www.consultant.ru/document/cons_doc_LAW_37868/'}>
            ФЗ «О правовом положении иностранных граждан в Российской Федерации» от 25 июля 2002 г.
            № 115-ФЗ
          </Text>
        </li>

        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'https://www.consultant.ru/document/cons_doc_LAW_61569/'}>
            ФЗ «О миграционном учёте иностранных граждан и лиц без гражданства в Российской
            Федерации» от 18 июля 2006 г. № 109- ФЗ
          </Text>
        </li>

        <Text weight={'bold'}>Во исполнение их также были приняты:</Text>
        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102081969'}>
            Постановление Правительства РФ от 9 июля 2003 года № 335 «Об утверждении Положения об
            установлении формы визы, порядка и условий её оформления и выдачи, продления срока её
            действия, восстановления её в случае утраты, а также порядка аннулирования визы»
          </Text>
        </li>

        <li>
          <Text view={'link'} as={'a'} href={'https://base.garant.ru/12130328/'}>
            Постановление Правительства РФ от 24 марта 2003 г. № 167 «О порядке представления
            гарантий материального, медицинского и жилищного обеспечения иностранных граждан и лиц
            без гражданства на период их пребывания в Российской Федерации»
          </Text>
        </li>

        <li>
          <Text view={'link'} as={'a'} href={'https://base.garant.ru/104408/'}>
            Постановление Правительства РФ от 4 июля 1992 года № 470 «Об утверждении перечня
            территорий Российской Федерации с регламентированным посещением для иностранных граждан»
          </Text>
        </li>

        <li>
          <Text
            view={'link'}
            as={'a'}
            href={
              'http://pravo.gov.ru/proxy/ips/?docbody=&prevDoc=102319042&backlink=1&&nd=102088340'
            }>
            Постановление Правительства РФ от 16 августа 2004 г. № 413 (ред. от 06.05.2006 г.) «О
            миграционной карте»
          </Text>
        </li>

        <li>
          <Text
            view={'link'}
            as={'a'}
            href={'https://www.garant.ru/products/ipo/prime/doc/12069344/'}>
            Приказ ФМС РФ «Об утверждении Административного регламента по предоставлению Федеральной
            миграционной службой государственной услуги по осуществлению миграционного учёта в
            Российской Федерации» от 6 июня 2009 г. № 159 (Зарегистрировано в Минюсте РФ 27.08.2009
            № 14635)
          </Text>
        </li>
      </ul>
    </>
  )
}