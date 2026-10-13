import React from 'react'
import { useTranslation } from 'react-i18next'
import ResumeCard from './ResumeCard'

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
      
      {/* Working Experience */}
      <div>
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{t('resume.experience.workingPeriod')}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('resume.experience.workingTitle')}</h2>
        </div>
        <div className="mt-6 md:mt-10 w-full border-l-[6px] border-l-black/20 flex flex-col gap-10">
          <ResumeCard
            title={t('resume.experience.polytron.title')}
            subTitle={t('resume.experience.polytron.subTitle')}
            result={t('resume.experience.polytron.result')}
            des={t('resume.experience.polytron.des', { returnObjects: true })}
          />
        </div>
      </div>

      {/* Organization Experience */}
      <div>
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{t('resume.experience.orgPeriod')}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('resume.experience.orgTitle')}</h2>
        </div>
        <div className="mt-6 md:mt-10 w-full border-l-[6px] border-l-black/20 flex flex-col gap-10">
          <ResumeCard
            title={t('resume.experience.muamalah.title')}
            subTitle={t('resume.experience.muamalah.subTitle')}
            result={t('resume.experience.muamalah.result')}
            des={t('resume.experience.muamalah.des', { returnObjects: true })}
          />
          <ResumeCard
            title={t('resume.experience.mtk.title')}
            subTitle={t('resume.experience.mtk.subTitle')}
            result={t('resume.experience.mtk.result')}
            des={t('resume.experience.mtk.des', { returnObjects: true })}
          />
        </div>
      </div>

    </div>
  )
}

export default Experience