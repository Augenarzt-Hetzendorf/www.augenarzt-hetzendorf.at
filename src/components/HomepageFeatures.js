import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Augenentzündungen - Uvitis',
    Svg: require('/img/landing/eye-20.svg').default,
    description: (
      <> <p20>
      Behandlung von Augenentzündungen - Uvitis, Bindehautentzündungen, Hornhautentzündungen.
      </p20> </>
    ),
  },
  {
    title: 'Augendiagnosen ',
    Svg: require('/img/landing/kids-20.svg').default,
    description: (
      <> <p20>
      Vorsorgeuntersuchungen, altersbedingte Augenkrankheiten, ADM Makuladegeneration.
      </p20> </>
    ),
  },
  {
    title: 'Augenchirurgie',
    Svg: require('../../static/img/landing/book-20.svg').default,
    description: (
      <> <p20>
      Augenoperationen zu grauer und grüner Star, Glaukom, Netzhautablösung.
      </p20> </>
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
