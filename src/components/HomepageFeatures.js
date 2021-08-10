import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '(VORSORGE-) UNTERSUCHUNGEN',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Vorsorgeuntersuchungen und allgemeine Diagnosen.
        Überprüfung der Sehschärfe, Sehtests und Beratung zu Brillengläsern, Alterssichtigkeit, Lesebrille.
        Vorsorgeuntersuchungen bei Diabetes, Bluthochdruck, Glaukom, Makuladegeneration Augendruckmessung.
        Untersuchung des Augenhintergrundes - der Netzhaut.
        Messung der Hornhautdicke.
        OCT (Okuläre Kohärenz Tomografie) zur Makula- und Sehnervendiagnostik.
        Myopie-Kontrolle, Kontrollen und Behandlung des grauen und grünen Stars.
        Diabetesvorsorge und -verlaufskontrolle. Makulopathievorsorge und -verlaufskontrolle.
        Vorsorgeuntersuchung bei Rheuma, kindlichem Rheuma, JIA, Morbus Bechterew, Sarkoidose, etc.
      </>
    ),
  },
  {
    title: 'AUGENOPERATIONEN',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Schon als Kind konnte mir keine Bastelarbeit zu klein sein. Diese Liebe zum Detail lasse ich nun in meine operative Tätigkeit einfließen. Ich lege großen Wert auf persönlich-individuelle Betreuung sowohl in der Vorbereitung als auch in der Durchführung und Nachsorge sämtlicher operativen Eingriffe. Durch meine Tätigkeit als Oberärztin an der Klinik Hietzing kann der Standard in der Behandlung hochgehalten werden.
      An der Klinik Hietzing operiere ich
      Grauer Star
      Schlupflider
      Lidfehlstellungen (Ektropium, Entropium)
      Gerstenkorn, Hagelkorn
      Lidtumore
 
In Kooperation mit der Klinik Hietzing betreue ich Sie auch rund um:
Netzoperationen (Netzhautablösung, Epiretinale Membran /Gliose)  
Netzhautveränderungen bei Diabetes (Vitrektomie, Laser, IVOM)
„Feuchte“ Makuladegeneration (IVOM)
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
