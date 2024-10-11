import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLang } from '@/hooks/useLang'
import { useTyped } from '@/hooks/useTyped'
import { basePropsForMotion } from '@/constants/motion'

const Contacts = () => {
  const { lang, translations } = useLang()
  const typedEl = useTyped([translations[lang].contacts.say_hello])

  return (
    <motion.section
      {...basePropsForMotion}
      className='container contact__section d-flex flex-column'
    >
      <h5 className='text-center contact__title'>
        {translations[lang].contacts.offers}
      </h5>
      <p className='text-center contact__descr'>
        {translations[lang].contacts.text}
      </p>
      <Link className='contact__email' href='mailto:enjoyhillol@gmail.com'>
        <span id='contact' ref={typedEl} />
      </Link>
    </motion.section>
  )
}
export default Contacts
