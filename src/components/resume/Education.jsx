import React from 'react'
import { useTranslation } from 'react-i18next'
import ResumeCard from './ResumeCard'
import { binusLogo } from "../../assets/index"

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="pt-6 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">{t('resume.education.period')}</p>
        <h2 className="text-3xl md:text-4xl font-bold">{t('resume.education.title')}</h2>
      </div>
      <div className="mt-6 md:mt-10 w-full border-l-[6px] border-l-black/20 flex flex-col gap-10">
        <ResumeCard
          title={t('resume.education.card.title')}
          subTitle={t('resume.education.card.subTitle')}
          result={t('resume.education.card.result')}
          des={t('resume.education.card.des')}
          src={binusLogo}
        />
      </div>
    </div>
  )
}

export default Education