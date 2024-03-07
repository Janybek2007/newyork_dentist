import React from "react";
import DetalPriceRestart from "./detalPrice/DetalPriceRestart";
import "./Price.scss";
import Images from "./detalPrice/Images";

function PriceReStart() {
  const dataInfo = [
    {
      title: "Клиновидный дефект",
      info: "Зубы у человека вырастают два раза – молочные и постоянные. Если в первом случае, будучи ребенком, можно радоваться, что вместо временного вырастет новый, то потеря постоянного зуба может стать настоящей трагедией. Если в первом случае, будучи ребенком, можно радоваться, что вместо временного вырастет новый, то потеря постоянного зуба может стать настоящей трагедией. Зубы у человека вырастают два раза – молочные и постоянные. Зубы у человека вырастают два раза – молочные и постоянные. Если в первом случае, будучи ребенком, можно радоваться, что вместо временного вырастет новый, то потеря постоянного зуба может стать настоящей трагедией.",
      price: 30000,
    },
    {
      title: "Пульпит 1 канального зуба",
      info: "В нашей клинике  для вас всегда доступны все виды дентальной имплантации. Начиная от простых видов имплантации (когда не требуется наращивание костного гребня) до сложных, которые сопровождаются направленной регенерацией кости с использованием различных остеозаменителей и аутокости. Все процедуры абсолютно безболезненны, стерильны, сопровождающиеся минимальными послеоперационными отёками. Рекомендуем! Перспективное направление стоматологии — имплантология успешно развивается на протяжении последних 30 лет. Имплантация зубов во всех развитых странах по праву завоевала важную нишу в стоматологии и становится популярным, востребованным направлением восстановления зубного ряда любого человека. Зубные имплантаты, поставленные профессионально дарят возможность многим жителям нашей планеты ощущать полностью все прелести жизни и безупречной улыбки, к тому же восстанавливается жевательная функция. Для людей старше 40 лет, имплантация зубов — возможность обретения второй жизни зубного ряда.",
      price: 55000,
    },
    {
      title: "Пульпит 2 канального зуба",
      info: "Технология «все на четырех» (all-on-4) - это одноэтапная имплантация зубов, поскольку установка протезов проводится практически сразу после вживления имплантов. Иногда временный протез после имплантации All-on-4 ставится не сразу после операции, а на 3-4 день после ее проведения.",
      price: 12400,
    },
    {
      title: "Отбеливание зубов ",
      info: "Врачи-анестезиологи DentisTree используют для погружения ребенка в медикаментозный сон препарат Севоран, который признан во всем мире «золотым стандартом» седации и успешно используется более 13 лет стоматологами США, Европы и Японии. Он не раздражает дыхательные пути маленького пациента и за считанные секунды погружает ребенка в состояние медикаментозного сна, позволяя детскому врачу-стоматологу провести качественное лечение. Севоран разрешен для детей с рождения.",
      price: 13599,
    },
    {
      title: "Коронка на зуб",
      info: "В стоматологии «СВОИ ЛЮДИ» коронки подбирают индивидуально под каждого пациента. Наши врачи учтут все пожелания клиента, включая внешний вид протеза. Один из главных принципов клиники — доступность помощи. Поэтому стоматологи при подборе коронки ориентируются также на бюджет пациента и приемлемую для него стоимость.Все этапы изготовления и установки коронок контролируются лечащим врачом. Это обеспечивает высокое качество и долгую носку протезов. А после установки стоматолог проводит подробную консультацию по ношению и уходу за коронкой.",
      price: 10000000,
    },
  ];
  return (
    <section className="price__mini-block mt-[38px]">
      <div className="price__content flex justify-between items-start">
        <div className="price__mini__block-left ">
          {dataInfo.map((el, inx) => (
            <DetalPriceRestart el={el} key={inx} />
          ))}
        </div>
        <Images />
      </div>
    </section>
  );
}

export default PriceReStart;
