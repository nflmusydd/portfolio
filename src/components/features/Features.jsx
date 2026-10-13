import React from 'react'
import { AiFillCode } from "react-icons/ai";
import { FaMobile, FaStickyNote } from "react-icons/fa";
import { SiCompilerexplorer, SiSecurityscorecard } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { useTranslation } from 'react-i18next'
import Title from '../layouts/Title'
import Card from './FeatureCard'

const Features = () => {
  const { t } = useTranslation();
  return (
    <section
      id="features"
      className="w-full h-full pt-10 pb-20 px-10 border-b border-b-blue-700"
    >
      <Title title={t('features.title')} des={t('features.des')} />
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10">
        <Card
          title={t('features.items.web.title')}
          des={t('features.items.web.des')}
          icon={<MdOutlineWeb />}
        />
        <Card
          title={t('features.items.mobile.title')}
          des={t('features.items.mobile.des')}
          icon={<FaMobile />}
        />
        <Card
          title={t('features.items.testing.title')}
          des={t('features.items.testing.des')}
          icon={<SiSecurityscorecard />}
        />
        <Card
          title={t('features.items.clean.title')}
          des={t('features.items.clean.des')}
          icon={<AiFillCode />}
        />
        <Card
          title={t('features.items.doc.title')}
          des={t('features.items.doc.des')}
          icon={<FaStickyNote />}
        />
        <Card
          title={t('features.items.research.title')}
          des={t('features.items.research.des')}
          icon={<SiCompilerexplorer />}
        />
      </div>
    </section>
  )
}

export default Features
