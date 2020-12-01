import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Understand',
    imageUrl: 'img/undraw_education_f8ru.svg',
    description: (
      <>
        We provide explanations and examples for financial jargon so you can learn faster and more effectively.
      </>
    ),
  },
  {
    title: 'Step-By-Step Approach',
    imageUrl: 'img/undraw_Setup_wizard_re_nday.svg',
    description: (
      <>
        Instead of reading through a bunch of unorganized blog posts, our information is consolidated and organized so it's easy to follow.
      </>
    ),
  },
  {
    title: 'Further Readings',
    imageUrl: 'img/undraw_online_reading_np7n.svg',
    description: (
      <>
        We cite our references for all of our information so you can conduct your own research and learn more.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn how to manage your money as a new grad or young professional. Covers financial basics from budgeting to retirement.">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img className={clsx(styles.heroBannerLogo, 'margin-vert--md')} src={useBaseUrl('img/undraw_wallet_aym5.svg')}/>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
