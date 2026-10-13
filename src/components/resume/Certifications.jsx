import React from 'react'
import { useTranslation } from 'react-i18next'
import ResumeCard from './ResumeCard'
import { backendBootcampCert, sqlBasicCert} from "../../assets/index"

const Certifications = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="pt-6 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">{t('resume.certifications.period')}</p>
        <h2 className="text-3xl md:text-4xl font-bold">{t('resume.certifications.title')}</h2>
      </div>
      <div className="mt-6 md:mt-10 w-full border-l-[6px] border-l-black/20 flex flex-col gap-10">
        <ResumeCard
          title={t('resume.certifications.bootcamp.title')}
          subTitle={t('resume.certifications.bootcamp.subTitle')}
          des={t('resume.certifications.bootcamp.des')}
          result={t('resume.certifications.bootcamp.result')}
          src={backendBootcampCert}
          isImage={true}
        />
        <ResumeCard
          title={t('resume.certifications.sql.title')}
          subTitle={t('resume.certifications.sql.subTitle')}
          des={t('resume.certifications.sql.des')}
          result={t('resume.certifications.sql.result')}
          src={sqlBasicCert}
          isImage={true}
        />
      </div>
    </div>
  )
}

export default Certifications