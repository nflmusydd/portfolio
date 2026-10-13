import React from 'react'
import { useTranslation } from 'react-i18next'

const FooterBottom = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full py-10 bg-black">
      <div className="max-w-screen-2xl mx-auto px-4">
        <p className="text-center text-gray-500 text-sm md:text-base">
            {t('footer.rights')}
        </p>
        <p className="text-center text-gray-500 text-sm md:text-base mt-2">
            <span className="block md:inline md:ml-1 mt-1 md:mt-0">
            {t('footer.templateBy')} {" "}
            <a 
                href="https://github.com/noorjsdivs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-designColor transition-colors duration-300"
            >
                Noor Mohammad
            </a>
            </span>
        </p>
      </div>
    </div>
  )
}

export default FooterBottom