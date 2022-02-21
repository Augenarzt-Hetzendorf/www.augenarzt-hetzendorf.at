import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Vorsorgeuntersuchungen und allgemeine Diagnosen ',
    Svg: require('/img/landing/kids-20.svg').default,
    description: (
      <>
        Überprüfung der Sehschärfe, Sehtests und Beratung zu Brillengläsern, Alterssichtigkeit, Lesebrille.
        Vorsorgeuntersuchungen bei Diabetes, Bluthochdruck, Glaukom, Makuladegeneration Augendruckmessung.

      </>
    ),
  },
  {
    title: 'Behandlung von zahlreichen Augenkrankheiten',
    Svg: require('/img/landing/eye-20.svg').default,
    description: (
      <>
      Untersuchung des Augenhintergrundes - der Netzhaut.
      Messung der Hornhautdicke.
      OCT (Okuläre Kohärenz Tomografie) zur Makula- und Sehnervendiagnostik.
      Myopie-Kontrolle, Kontrollen und Behandlung des grauen und grünen Stars.
      Diabetesvorsorge und -verlaufskontrolle. Makulopathievorsorge und -verlaufskontrolle.
      Vorsorgeuntersuchung bei Rheuma, kindlichem Rheuma, JIA, Morbus Bechterew, Sarkoidose, etc.
      </>
    ),
  },
  {
    title: 'Augenoperationen - Grüner Star, grauer Star',
    Svg: require('../../static/img/landing/book-20.svg').default,
    description: (
      <>
        An der Klinik Hietzing operiere ich Grauer Star Schlupflider Lidfehlstellungen (Ektropium, Entropium) Gerstenkorn, Hagelkorn Lidtumore. 
        In Kooperation mit der Klinik Hietzing betreue ich Sie auch rund um: Netzoperationen (Netzhautablösung, Epiretinale Membran /Gliose),
        Netzhautveränderungen bei Diabetes (Vitrektomie, Laser, IVOM) „Feuchte“ Makuladegeneration (IVOM).
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
