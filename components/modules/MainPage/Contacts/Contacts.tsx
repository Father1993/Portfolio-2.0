import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import { useTyped } from '@/hooks/useTyped'

const Contacts = () => {
  const { lang, translations } = useLang()
  const typedEl = useTyped([translations[lang].contacts.say_hello])

  return (
    <section className='container contact__section d-flex flex-column scroll-animation-left'>
      <h5 className='text-center contact__title'>
        {translations[lang].contacts.offers}
      </h5>
      <p className='text-center contact__descr'>
        {translations[lang].contacts.text}
      </p>
      <Link className='contact__email' href='mailto:enjoyhillol@gmail.com'>
        <span id='contact' ref={typedEl} />
      </Link>
    </section>
  )
}
export default Contacts
