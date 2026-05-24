import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '결정 기록',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        프로젝트를 만들며 내린 중요한 결정과 이유를 한곳에 모아
        이후 변경의 기준으로 사용합니다.
      </>
    ),
  },
  {
    title: '운영 절차',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        배포, 검증, 저장소 보호 규칙처럼 반복되는 작업을 문서화해
        재현 가능한 흐름을 유지합니다.
      </>
    ),
  },
  {
    title: '지속적인 확장',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        기능이 늘어날수록 문서도 함께 성장하도록 Docusaurus 기반으로
        구조화합니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
