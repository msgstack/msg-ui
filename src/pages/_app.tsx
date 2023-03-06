import type { AppProps } from 'next/app'
import App from 'next/app'
import { Provider } from 'react-redux'

import '@styles/globals.scss'
import '@styles/layout.scss'

import { wrapper } from '@store'
import { fetchSystem } from '@store/system/actions'
import BaseLayout from '@components/layout/Base'

interface PageProps {
  pageProps: {
    id: number
  }
}

const NextApp = ({
  Component,
  ...rest
}: Omit<AppProps, 'pageProps'> & PageProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <BaseLayout>
        <Component {...props.pageProps} />
      </BaseLayout>
    </Provider>
  )
}

NextApp.getInitialProps = wrapper.getInitialAppProps(
  ({ dispatch }) =>
    async (appCtx): Promise<PageProps> => {
      await dispatch(fetchSystem())
      const appProps = await App.getInitialProps(appCtx)

      return {
        pageProps: {
          ...appProps.pageProps,
          id: 1,
        },
      }
    }
)

export default NextApp
