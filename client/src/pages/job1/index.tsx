import { Table } from '@consta/uikit/Table'

import { Image, PageTitle } from '@shared/ui'

import styles from './styles.module.css'

const columns = [
  {
    title: 'Сервис',
    accessor: 'service',
  },
  {
    title: 'Ссылка',
    accessor: 'link',
  },
]
const rows = [
  {
    service: 'HeadHunter',
    link: 'https://hh.ru/?customDomain=1',
  },
  {
    service: 'SuperJob',
    link: 'https://russia.superjob.ru/',
  },
  {
    service: '«Работа.ру»',
    link: 'https://www.rabota.ru/',
  },
  {
    service: '«Работа в России»',
    link: 'https://trudvsem.ru/',
  },
  {
    service: '«Авито. Работа»',
    link: 'https://www.avito.ru/all/rabota',
  },
  {
    service: '«Хабр. Карьера»',
    link: 'https://career.habr.com/',
  },
  {
    service: '«Город работ»',
    link: 'https://gorodrabot.ru/',
  },
  {
    service: 'Remote-job.ru',
    link: 'https://remote-job.ru/',
  },
  {
    service: '«Вакансии для хороших людей»',
    link: 'https://vdhl.ru/',
  },
  {
    service: '«Зарплата.ру»',
    link: 'https://zarplata.ru/?customDomain=1',
  },
  {
    service: '«Работа для вас»',
    link: 'https://rdw.ru/catalog',
  },
]

export const Job1Page = () => {
  return (
    <>
      <PageTitle text={'Поиск работы'} />

      <ol>
        <li>
          <strong>HeadHunter</strong>
        </li>
      </ol>
      <Image src={'https://i.ibb.co/fvHW68p/image.jpg'} />

      <p>
        Один из популярнейших сайтов, на котором размещён почти 1 миллион вакансий. Причём есть
        варианты и для высококвалифицированных специалистов, и для людей без опыта или студентов. На
        hh.ru удобная форма составления&nbsp;
        <a href="https://lifehacker.ru/klyuchevye-navyki-v-rezyume/">
          <u>резюме</u>
        </a>
        . Документ впоследствии можно сохранить и использовать вне площадки.
      </p>
      <ol start="2">
        <li>
          <strong>SuperJob</strong>
        </li>
      </ol>
      <Image src={'https://i.ibb.co/jRvhnRk/superjob.jpg'} />

      <p>
        По заверениям создателей сайта, с ними сотрудничают 2,2 миллиона работодателей. Также здесь
        можно найти много советов для кандидатов, как эффективнее искать работу, откликаться на
        предложения и так далее.
      </p>
      <ol start="3">
        <li>
          <strong> &laquo;</strong>
          <strong>Работа.ру</strong>
          <strong>&raquo;</strong>
        </li>
      </ol>
      <Image src={'https://i.ibb.co/P4xZ5Cm/rabora-ru.jpg'} />

      <p>
        На сайте представлены вакансии 760 тысяч работодателей. Причём они ориентированы на любой
        сегмент поиска.
      </p>
      <ol start="4">
        <li>
          <strong> &laquo;</strong>
          <strong>Работа</strong>
          <strong> в </strong>
          <strong>России</strong>
          <strong>&raquo;</strong>
        </li>
      </ol>
      <p>&nbsp;</p>
      <Image src={'https://i.ibb.co/TTc9Sv2/rabora-In-Russia.jpg'} />

      <p>
        Это сайт Роструда, через который можно подать заявку&nbsp;
        <a href="https://lifehacker.ru/kak-vstat-na-birzhu-truda/">
          <u>на биржу труда</u>
        </a>
        . Здесь же размещены вакансии, которые предлагают тем, кто зарегистрирован как безработный.
        Откликаться на них можно всем, но общая направленность сайта всё же влияет на то, кого ищут.
        Так что он подойдёт для тех, кто ищет работу в государственных и муниципальных учреждениях
        &mdash; например, учителем или врачом. Также здесь много вакансий по рабочим специальностям
        или для людей без квалификации.
      </p>
      <p>&nbsp;</p>
      <ol start="5">
        <li>
          <strong> &laquo;</strong>
          <strong>Авито</strong>
          <strong>. </strong>
          <strong>Работа</strong>
          <strong>&raquo;</strong>
        </li>
      </ol>
      <Image src={'https://i.ibb.co/Jnj8qQ7/avito.jpg'} />

      <p>
        На сайте размещено более 2,4 миллиона вакансий. Особенно много здесь вариантов для
        представителей рабочих профессий и мест, которые не требуют квалификации.
      </p>
      <ol start="6">
        <li>
          <strong> &laquo;</strong>
          <strong>Хабр</strong>
          <strong>. </strong>
          <strong>Карьера</strong>
          <strong>&raquo;</strong>
        </li>
      </ol>
      <Image src={'https://i.ibb.co/rxFfgWg/habr.jpg'} />

      <p>
        Сервис, ориентированный на поиск работы в IT-сфере. Среди прочего стоит отметить, что на
        сайте можно посмотреть среднюю зарплату по вашей специальности и определиться с запросами.
      </p>
      <ol start="7">
        <li>
          <strong> &laquo;Город работ&raquo;</strong>
        </li>
      </ol>
      <Image src={'https://i.ibb.co/0Kd9zHm/gorod-rabot.jpg'} />

      <p>
        Это агрегатор, который собирает вакансии с других сайтов. Может быть удобен для тех, кто не
        хочет мониторить разные площадки самостоятельно.
      </p>

      <ol start="8">
        <li>
          <strong> Remote-job.ru</strong>
        </li>
      </ol>
      <Image src={'https://i.ibb.co/z77SkHw/remout-job.jpg'} />

      <p>
        Сайт специализируется на вакансиях&nbsp;
        <a href="https://lifehacker.ru/udalyonnaya-rabota-vakansii/">
          <u>для удалённой работы</u>
        </a>
        . Здесь много предложений проектного сотрудничества, но не только. Вполне возможны и
        варианты найма по трудовому договору.
      </p>
      <p>&nbsp;</p>
      <ol start="9">
        <li>
          <strong> &laquo;Вакансии для хороших людей&raquo;</strong>
        </li>
      </ol>
      <Image src={'https://i.ibb.co/3d97B0c/good-rabota.jpg'} />

      <p>
        Сайт ориентирован на людей творческих специальностей: медиа, креатив, дизайн, PR и так
        далее.
      </p>
      <ol start="10">
        <li>
          <strong> &laquo;</strong>
          <strong>Зарплата.ру</strong>
          <strong>&raquo;</strong>
        </li>
      </ol>
      <Image src={'https://i.ibb.co/y0jCP1x/salary.jpg'} />

      <p>Ещё один сайт с большим количеством вакансий в разных сферах.</p>
      <ol start="11">
        <li>
          <strong> &laquo;</strong>
          <strong>Работа</strong>
          <strong>для</strong>
          <strong>вас</strong>
          <strong>&raquo;</strong>
        </li>
      </ol>
      <Image src={'https://i.ibb.co/Kq1L4P4/rabota-For-You.jpg'} />

      <p>
        Это сайт газеты &laquo;Работа для вас&raquo;. Однако листать страницы в интернете удобнее,
        чем бумажное издание.
      </p>
      <p>&nbsp;</p>

      <Table columns={columns} rows={rows} zebraStriped="odd" borderBetweenRows={true} />
    </>
  )
}
