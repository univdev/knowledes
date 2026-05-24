import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '프로젝트별 지식 구조',
    description: (
      <>
        문서는 프로젝트 이름을 최상위 단위로 삼고, 개요부터 의사결정까지
        같은 구조로 정리합니다.
      </>
    ),
  },
  {
    title: '의사결정 맥락',
    description: (
      <>
        선택한 결과뿐 아니라 배경, 대안, 트레이드오프를 함께 남겨
        나중의 변경 판단을 돕습니다.
      </>
    ),
  },
  {
    title: 'PR 기반 운영',
    description: (
      <>
        문서 변경도 feature branch와 pull request를 통해 검증하고
        GitHub Pages로 자동 배포합니다.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center padding-horiz--md', styles.feature)}>
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
