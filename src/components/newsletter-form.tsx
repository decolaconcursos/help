// Create By: Lenderson on 9/3/2022

import React from 'react'

type Props = {
  formID?: string | number
}

export const NewsletterForm: React.FC<Props> = ({ formID = 3572924 }) => {
  const actionUrl = `https://app.convertkit.com/forms/${formID}/subscriptions`

  return (<>
    <form action={actionUrl} method='post'>
      <div className='relative'>
        <div className='bg-white px-2 py-2 w-full flex rounded-md'>
          <input type="hidden" id="myApiKey" name="myApiKey" value="myApiKeyValue" />
          <input type='email'
                 name="email_address"
                 aria-label="Endereço de Email"
                 required
                 className='appearance-none font-semibold py-2 focus:outline-0 flex-1 pl-4 placeholder:font-semibold placeholder:text-slate-300'
                 placeholder='Digite seu Email'/>
          <button className='rounded-md bg-primary-800 text-xs md:text-md text-white h-auto px-4 font-bold uppercase hover:shadow hover:bg-primary-700 animated ml-2 '>
            Cadastrar
          </button>
        </div>
      </div>

    </form>
  </>)
}