import { useLang } from '@/hooks/useLang'

const Contacts = () => {
  const { lang, translations } = useLang()

  return (
    <section className='container contact__section d-flex flex-column scroll-animation-left'>
      <h5 className='text-center contact__title'>
        {translations[lang].contacts.offers}
      </h5>
      <p className='text-center contact__descr'>
        {translations[lang].contacts.text}
      </p>
      <a className='contact__email' href='mailto:enjoyhillol@gmail.com'>
        <span id='contact' />
      </a>
    </section>
  )
}
export default Contacts
