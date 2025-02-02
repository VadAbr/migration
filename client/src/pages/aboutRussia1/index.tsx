import { Image, PageText, PageTitle } from '@shared/ui'

import * as images from './constants.ts'
export const AboutRussia1Page = () => {
  return (
    <div>
      <PageTitle text={'Важные факты и события РФ'} />

      <PageText>
        Россия — одна из самых удивительных и многогранных стран мира. Ее территория простирается от
        Европы до Азии, охватывая огромные расстояния и разные климатические зоны. Страна известна
        своими природными чудесами, богатым культурным наследием и достижениями в науке и технике.
        Здесь можно увидеть уникальные традиции, встретить многонациональное сообщество и ощутить
        силу многовековой истории.
      </PageText>

      <section>
        <PageText weight={'semibold'}>Самая большая страна в мире</PageText>
        <PageText>
          Россия занимает почти 17,1 миллиона квадратных километров, что делает её крупнейшим
          государством на планете. Её территория больше, чем площадь Плутона.
        </PageText>
        <Image src={'https://i.ibb.co/f9mYDPy/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>
          Единственная страна, расположенная в двух частях света
        </PageText>
        <PageText>
          Россия простирается на два континента — Европу и Азию, разделённые Уральскими горами,
          которые тянутся с севера на юг.
        </PageText>
        <Image src={'https://i.ibb.co/h98yXLG/image.png'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Наибольшее количество соседей</PageText>
        <PageText>Россия граничит с 16 странами — это больше, чем у любой другой страны.</PageText>
        <Image src={'https://i.ibb.co/f9mYDPy/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Крайности климата</PageText>
        <PageText>
          На территории России можно встретить все климатические зоны, кроме тропической. Здесь
          встречаются от арктических морозов до субтропической жары.
        </PageText>
        <Image src={'https://i.ibb.co/Z1JmKhR/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Языковое разнообразие</PageText>
        <PageText>
          В России проживают более 190 народностей, и официально признаны более 100 языков. Русский
          язык, однако, является основным и наиболее распространенным. Москва — самая северная
          столица в мире с населением более 10 миллионов человек.
        </PageText>
        <Image src={'https://i.ibb.co/ZSPTkSm/image.webp'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Сезоны белых ночей</PageText>
        <PageText>
          В северных городах, таких как Санкт-Петербург, летом солнце почти не заходит за горизонт,
          создавая явление, известное как белые ночи.
        </PageText>
        <Image src={'https://i.ibb.co/fxX6RJZ/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Крупнейшая пресноводная система</PageText>
        <PageText>
          Байкал — самое глубокое озеро на планете и крупнейшее по объему запасов пресной воды. В
          нем сосредоточено около 20% всех мировых запасов пресной воды.
        </PageText>
        <Image src={'https://i.ibb.co/vwqxJzD/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>День России — молодой праздник</PageText>
        <PageText>
          День России отмечается 12 июня и является официальным праздником с 1992 года, когда был
          подписан указ о суверенитете.
        </PageText>
        <Image src={'https://i.ibb.co/F8strfy/image.png'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Наследие ЮНЕСКО</PageText>
        <PageText>
          Россия занимает почетное место в списке Всемирного наследия ЮНЕСКО с более чем 25
          культурными и природными объектами.
        </PageText>
        <Image src={'https://i.ibb.co/x8QPd1P/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Эрмитаж — один из крупнейших музеев</PageText>
        <PageText>
          Санкт-Петербургский Эрмитаж — один из самых больших музеев мира. Чтобы осмотреть все
          экспонаты, потребуется несколько лет.
        </PageText>
        <Image src={'https://i.ibb.co/NCKZWpv/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Транссибирская магистраль</PageText>
        <PageText>
          Транссиб — самая длинная железнодорожная линия в мире, соединяющая Москву и Владивосток.
          Длина маршрута превышает 9 тысяч километров.
        </PageText>
        <Image src={'https://i.ibb.co/tZVGx01/image.webp'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Самая длинная граница с океаном</PageText>
        <PageText>
          Россия омывается водами 13 морей, которые принадлежат бассейнам Тихого, Атлантического и
          Северного Ледовитого океанов.
        </PageText>
        <Image src={'https://i.ibb.co/qB9QTXQ/image.webp'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Крупнейшая атомная энергетика</PageText>
        <PageText>
          Россия является мировым лидером по числу атомных реакторов, используемых в промышленности
          и энергетике. Мощнейшая в России по установленной мощности действующая АЭС — Ленинградская
          атомная электростанция. Ее электрическая мощность составляет 4200 МВт. Строить комплекс
          начали в 1967 году, а первый энергоблок ввели в эксплуатацию в 1973-м. Всего АЭС имеет
          четыре эксплуатируемых реактора.
        </PageText>
        <Image src={'https://i.ibb.co/tsN0Yc0/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Русская баня — уникальный ритуал</PageText>
        <PageText>
          Русская баня — традиция, восходящая к древним временам, и отличается от финской сауны:
          воздух здесь насыщен паром, а не сухой.
        </PageText>
        <Image src={'https://i.ibb.co/GsrK9YV/image.webp'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Самое большое количество часовых поясов</PageText>
        <PageText>
          Территория России охватывает 11 часовых поясов, что делает страну рекордсменом в этом
          показателе.
        </PageText>
        <Image src={'https://i.ibb.co/7zwvC0L/image.png'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Многие мировые открытия</PageText>
        <PageText>
          В России были изобретены радио Александром Поповым, периодическая таблица Дмитрием
          Менделеевым и телевидение Владимиром Зворыкиным.
        </PageText>
        <Image src={'https://i.ibb.co/vZYwPW0/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Космическое первенство</PageText>
        <PageText>
          Советский Союз, предшественник современной России, стал первой страной, отправившей
          человека в космос. Юрий Гагарин сделал этот исторический шаг в 1961 году.
        </PageText>
        <Image src={'https://i.ibb.co/BBx30rk/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Глубокие пещеры</PageText>
        <PageText>
          В России расположена одна из самых глубоких пещер мира — пещера Крубера, глубина которой
          превышает 2000 метров.
        </PageText>
        <Image src={'https://i.ibb.co/0sj329y/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Снежный рекорд</PageText>
        <PageText>
          Россия — одна из самых снежных стран мира. В некоторых районах снег может лежать до 8
          месяцев в году.
        </PageText>
      </section>

      <section>
        <PageText weight={'semibold'}>
          Самый низкий температурный рекорд в населенных местах
        </PageText>
        <PageText>
          Оймякон в Якутии известен как самое холодное постоянно населенное место на Земле. Здесь
          температура может опускаться до -70°C.
        </PageText>
        <Image src={'https://i.ibb.co/dkscVPn/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Серебряные волки</PageText>
        <PageText>
          Россия занимает особое место в мире по численности популяций волков, особенно в сибирских
          и дальневосточных регионах.
        </PageText>
        <Image src={'https://i.ibb.co/jhVnwwh/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Резервы нефти и газа</PageText>
        <PageText>
          Россия занимает одно из лидирующих мест по запасам природного газа и нефти. Эти ресурсы
          составляют значительную часть российской
        </PageText>
        <Image src={'https://i.ibb.co/jT5yJp7/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Сложность русского языка</PageText>
        <PageText>
          Русский язык считается одним из самых сложных для изучения, из-за обилия падежей,
          исключений и сложной грамматики.
        </PageText>
      </section>

      <section>
        <PageText weight={'semibold'}>Богатая музыкальная культура</PageText>
        <PageText>
          Россия известна своими музыкальными традициями — от классической музыки Чайковского и
          Рахманинова до народных балалаек и современных хоров.
        </PageText>
        <Image src={'https://i.ibb.co/2cyQpPr/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Самый крупный лесной массив</PageText>
        <PageText>
          Сибирская тайга — крупнейший лесной массив на Земле, богатый разнообразными растениями и
          дикими животными.
        </PageText>
        <Image src={'https://i.ibb.co/PmfWGGb/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Многие спортивные достижения</PageText>
        <PageText>
          Россия подарила миру выдающихся спортсменов и знаменитые спортивные школы, которые
          воспитали олимпийских чемпионов по фигурному катанию, гимнастике и хоккею.
        </PageText>
        <Image src={'https://i.ibb.co/rZZTJ3t/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Особенности русской кухни</PageText>
        <PageText>
          Русская кухня богата простыми и сытными блюдами. Борщ, пельмени, окрошка и блины известны
          по всему миру.
        </PageText>
        <Image src={'https://i.ibb.co/KrYK85M/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Памятники архитектуры</PageText>
        <PageText>
          В России находятся уникальные архитектурные памятники, такие как собор Василия Блаженного,
          Казанский собор и Храм Христа Спасителя.
        </PageText>
        <Image src={'https://i.ibb.co/nscTFsv/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Популярность дачной культуры</PageText>
        <PageText>
          Россияне любят проводить лето на дачах, что является уникальной традицией, сохранившейся
          со времен Советского Союза.
        </PageText>
        <Image src={'https://i.ibb.co/vh7ZgnV/image.webp'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Высокий уровень образования</PageText>
        <PageText>
          Россия — одна из стран с наибольшим количеством граждан с высшим образованием, и это
          ценность высоко ценится в обществе
        </PageText>
        <Image src={'https://i.ibb.co/tPdNDFK/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Чаепитие как культурная традиция</PageText>
        <PageText>
          Чай в России — не просто напиток, а настоящая традиция. Он подается горячим с самоваром,
          вареньем и баранками.
        </PageText>
        <Image src={'https://i.ibb.co/P5dZCwk/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Город «трех революций»</PageText>
        <PageText>
          Санкт-Петербург часто называют городом трех революций, так как именно здесь начались
          основные события, изменившие ход истории.
        </PageText>
        <Image src={'https://i.ibb.co/GkJZR4y/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Оперное и балетное искусство</PageText>
        <PageText>
          Русские театры, такие как Большой театр в Москве и Мариинский театр в Санкт-Петербурге,
          считаются одними из лучших в мире.
        </PageText>
        <Image src={'https://i.ibb.co/NtbJwLM/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>Традиция Новый год отмечать дважды</PageText>
        <PageText>
          Россияне отмечают Новый год не только 1 января, но и по старому стилю — 14 января, что
          называется Старый Новый год. Также важно уделить внимание истории России. Представим самые
          яркие события прошедших лет.
        </PageText>
        <Image src={'https://i.ibb.co/HBDWQ4M/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>На Руси приняли крещение в 988 году</PageText>
        <PageText>
          Крещение Руси — одно из эпохальных событий, которое оказало влияние на становление Древней
          Руси. Из летописи известно, что в 986 году в Киев к князю Владимиру приезжали послы от
          разных народов, предлагавшие обратиться в их веру. Были волжские булгары мусульманской
          веры, римляне от Папы, проповедовавшие латинскую веру, и хазарские евреи — иудаизм.
          Проповедник из Византии прибыл последним. Он рассказывал князю о православии. Чтобы
          понять, чья вера лучше, Владимир направил в эти государства посланников. Отзывы о
          православной вере были лучше других, однако Владимир не торопился принять христианство. В
          988 году он захватил Корсунь и потребовал у Византийского императора в жены его сестру
          Анну. Тот в долгу не остался и сказал, что отдаст сестру только единоверцу. Так, получив
          согласие Владимира, император прислал Анну в Корсунь. Там Владимир принял христианство и
          сочетался браком с византийской принцессой.
        </PageText>
        <Image src={'https://i.ibb.co/2nmj6rk/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>
          Алфавит, которым мы пользуемся до сих пор, создали греки
        </PageText>
        <PageText>
          В греческом городе Фессалоники в IX веке родились братья Константин (в монашестве –
          Кирилл) и Мефодий. Константин рано научился читать и удивлял своей способностью к изучению
          языков. Это помогло ему стать патриаршим библиотекарем и возглавить кафедру философии в
          Мангаврской высшей школе Константинополя. В 863 году Византийский император направил
          Константина в Моравию. Там князь Ростислав ждал проповедников, которые могли бы научить
          его народ языку греческому или латинскому. С этого посольства началось создание
          глаголического алфавита. Вскоре Константин и Мефодий, используя греческую азбуку,
          переработали его в кириллицу, которой мы пользуемся до сих пор (с некоторыми изменениями –
          сделаны в 1710 и 1918 годах).
        </PageText>
      </section>

      <section>
        <PageText weight={'semibold'}>
          Нашествие монголо-татарского ига на Русь длилось более 250 лет
        </PageText>
        <PageText>
          По мнению разных историков, нашествие ордынского ига на Русь — поворотное событие в
          истории государства. Исследователь Рыбаков Б.А. говорил, что владычество ханства отбросило
          Россию в развитии и стало главной причиной отставания от стран Запада. Так, например, люди
          перестали строить дома из камня и забыли многие ремесла (производство стекла,
          перегородчатой эмали и др.). Но есть и другая точка зрения, которую поддерживали историки
          Карамзин Н.М. и Ключевский В.О.: пришествие иноземцев остановило княжеские междоусобные
          войны и позволило сплотиться разрозненным землям против единого врага. Из чего следует,
          что нападение на Русь — один из факторов формирования государственности.
        </PageText>
        <Image src={'https://i.ibb.co/QJQz7p8/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>
          Верховными правителями Российского государства были представители двух крупных династий
        </PageText>
        <PageText>
          Очевидный факт, который не знают многие школьники — со времен Киевской Руси до Февральской
          революции верховными правителями страны (князьями, царями, императорами) были
          представители все лишь двух родов: Рюриковичей (правили 700 лет: с 879 до 1598 гг.) и
          Романовых (правили 300 лет: с 1613 по 1917 гг.). Первая династия русских князей и царей
          получила название по имени своего легендарного основателя Рюрика. По одной из версий,
          славянские и финские племена призвали варяжского князя для решения междоусобных
          конфликтов. Последний представитель Рюриковичей — бездетный сын Ивана Грозного Федор
          Иоаннович. Самые известные представители императорской династии Романовых — Петр I,
          Екатерина II, Александр I, Николай I, Александр II, Николай II.
        </PageText>
        <Image src={'https://i.ibb.co/rFc5tLV/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>В России рабство отменили раньше, чем в США</PageText>
        <PageText>
          Де-юре крепостное право в Российской империи отменил Александр II, подписавший указ об
          освобождении крестьян в 1861 году. На деле для этого сословия сохранялись ограничения во
          многих сферах социальной жизни. Манифест об отмене крепостного права формально наделил
          людей землей, которой они не могли полноценно распоряжаться. Нужно было отдавать барщину
          или платить налог за пользование наделом. Также крестьяне не могли отказаться от земли в
          течение 49 лет. Реформа содержала множество нюансов, которые закабалили крестьянина еще на
          несколько десятилетий. Однако фактически российские крестьяне получили свободу раньше, чем
          в США отменили рабство. Тринадцатая поправка к Конституции США, которая ознаменовала
          прекращение рабства, была принята американским конгрессом во время Гражданской войны 31
          января 1865 года.
        </PageText>
        <Image src={'https://i.ibb.co/D8gJtTp/image.jpg'} />
      </section>

      <section>
        <PageText weight={'semibold'}>
          Россия никогда не была агрессором ни в одной крупной войне
        </PageText>
        <PageText>
          Самые кровопролитные войны, в которых участвовала Россия, были войнами, в ходе которых на
          нас нападали. Армия Наполеона без объявления войны переправилась через реку Неман и
          вторглась в пределы России (Отечественная война 1812 года). Германия объявила войну России
          через несколько дней после того, как Австро-Венгрия напала на Сербию. Так началась Первая
          мировая война (1914-1918 гг.). Великая Отечественная война началась с внезапного нападения
          Германии 22 июня 1941 года на всю территорию СССР от Баренцева моря до Чёрного.
        </PageText>
      </section>

      <section>
        <PageText weight={'semibold'}>
          Первый человек, который отправился в космос, был из СССР
        </PageText>
        <PageText>
          Самый мирный факт — 12 апреля 1961 года советский космонавт Юрий Гагарин сделал первый
          значительный шаг человечества в познании космоса. Корабль «Восток», который весил 4730 кг,
          запустили с помощью ракеты- носителя с тремя ступенями. Максимальное удаление корабля от
          планеты составило 327 км. Полет длился всего лишь 108 минут, но запасов, которые загрузили
          на борт «Востока», Гагарину хватило бы на 10 суток пребывания на орбите.
        </PageText>
      </section>
    </div>
  )
}
