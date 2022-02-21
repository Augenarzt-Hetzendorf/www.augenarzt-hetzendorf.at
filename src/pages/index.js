/**
 * Copyright (c) tipcon KG and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import clsx from 'clsx';

import HomepageFeatures from '../components/HomepageFeatures';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Kontakt/Terminvereinbarung">
            TERMINVEREINBARUNG ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
//   const {siteConfig = {}} = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
//      description={siteConfig.tagline}
      description="Description will go into a meta tag in <head />"
      keywords={siteConfig.customFields.keywords}
      >
      <HomepageHeader />

     <div class="alert alert--primary" role="alert">
     <button aria-label="Close" class="clean-btn close" type="button">
     <span aria-hidden="true">×</span>
     </button>  Bitte Beachten Sie die <strong>Corona-Regeln</strong>.
     </div>

      <main>
        <HomepageFeatures />
      </main>

</Layout>
);
}
