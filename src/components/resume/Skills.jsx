import React from 'react'
import { useTranslation } from 'react-i18next'
import { SkillBar, SoftSkillCard } from './SkillCard'

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
      
      <div className="w-full">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{t('resume.skills.prog.period')}</p>
          <h2 className="text-3xl font-bold">{t('resume.skills.prog.title')}</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="Laravel" percentage="95%" />
          <SkillBar skill="Go" percentage="80%" />
          <SkillBar skill="Flutter" percentage="80%" />
          <SkillBar skill="JavaScript" percentage="75%" />
          <SkillBar skill="TypeScript" percentage="60%" />
        </div>
      </div>

      <div className="w-full">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{t('resume.skills.db.period')}</p>
          <h2 className="text-3xl font-bold">{t('resume.skills.db.title')}</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="MySQL" percentage="90%" />
          <SkillBar skill="PostgreSQL" percentage="75%" />
          <SkillBar skill="Git" percentage="85%" />
          <SkillBar skill="Docker" percentage="70%" />
          <SkillBar skill="Unity" percentage="50%" />
        </div>
      </div>

      <div className="w-full">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{t('resume.skills.software.period')}</p>
          <h2 className="text-3xl font-bold">{t('resume.skills.software.title')}</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="Microsoft Word" percentage="95%" />
          <SkillBar skill="Microsoft Excel" percentage="85%" />
          <SkillBar skill="OBS Studio" percentage="80%" />
        </div>
      </div>

      <div className="w-full">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{t('resume.skills.soft.period')}</p>
          <h2 className="text-3xl font-bold">{t('resume.skills.soft.title')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          <SoftSkillCard 
            title={t('resume.skills.soft.items.collab.title')}
            desc={t('resume.skills.soft.items.collab.desc')}
          />
          <SoftSkillCard 
            title={t('resume.skills.soft.items.time.title')}
            desc={t('resume.skills.soft.items.time.desc')}
          />
          <SoftSkillCard 
            title={t('resume.skills.soft.items.adapt.title')}
            desc={t('resume.skills.soft.items.adapt.desc')}
          />
          <SoftSkillCard 
            title={t('resume.skills.soft.items.critical.title')}
            desc={t('resume.skills.soft.items.critical.desc')}
          />
        </div>
      </div>

    </div>
  )
}

export default Skills