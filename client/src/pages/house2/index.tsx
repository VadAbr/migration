import { Table } from '@consta/uikit/Table'

import { Image, PageTitle } from '@shared/ui'

import styles from './styles.module.css'

const columns1 = [
  {
    title: 'Район',
    accessor: 'name',
  },
  {
    title: 'Районный центр',
    accessor: 'center',
  },
]

const rows1 = [
  { name: 'Базарносызганский район', center: 'п. Базарный Сызган' },
  { name: 'Барышский район', center: 'г. Барыш' },
  { name: 'Вешкаймский район', center: 'п. Вешкайма' },
  { name: 'Инзенский район', center: 'г. Инза' },
  { name: 'Карсунский район', center: 'п. Карсун' },
  { name: 'Кузоватовский район', center: 'п. Кузоватово' },
  { name: 'Майнский район', center: 'п. Майна' },
  { name: 'Мелекесский район', center: 'г. Димитровград' },
  { name: 'Николаевский район', center: 'п. Николаевка' },
  { name: 'Новомалыклинский район', center: 'с. Новая Малыкла' },
  { name: 'Новоспасский район', center: 'п. Новоспасское' },
  { name: 'Павловский район', center: 'п. Павловка' },
  { name: 'Радищевский район', center: 'п. Радищево' },
  { name: 'Сенгилеевский район', center: 'г. Сенгилей' },
  { name: 'Старокулаткинский район', center: 'п. Старая Кулатка' },
  { name: 'Старомайнский район', center: 'п. Старая Майна' },
  { name: 'Сурский район', center: 'п. Сурское' },
  { name: 'Тереньгульский район', center: 'п. Тереньга' },
  { name: 'Ульяновский район', center: 'п. Ишеевка' },
  { name: 'Цильнинский район', center: 'с. Большое Нагаткино' },
  { name: 'Чердаклинский район', center: 'п. Чердаклы' },
]

const columns2 = [
  {
    title: 'Город',
    accessor: 'name',
  },
]
const rows2 = [
  {
    name: 'Ульяновск',
  },
  {
    name: 'Инза',
  },
  {
    name: 'Барыш',
  },
  {
    name: 'Новоульяновск',
  },
  {
    name: 'Димитровград',
  },
  {
    name: 'Сенгилей',
  },
]

export const House2Page = () => {
  return (
    <>
      <PageTitle text={'Справочник по районам'} />
      <Image src={'https://i.ibb.co/VWWsP8n/gorod-map.jpg'} />

      <p style={{ marginTop: '4rem', marginBottom: '1rem' }}>
        <strong>Районы Ульяновской области</strong>
      </p>
      <Table columns={columns1} rows={rows1} zebraStriped="odd" borderBetweenRows={true} />

      <p style={{ marginTop: '4rem', marginBottom: '1rem' }}>
        <strong>Города Ульяновской области</strong>
      </p>
      <Table columns={columns2} rows={rows2} zebraStriped="odd" borderBetweenRows={true} />
    </>
  )
}
