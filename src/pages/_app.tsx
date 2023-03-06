import type { AppProps } from 'next/app'
import App from 'next/app'
import { Provider } from 'react-redux'

import '@styles/globals.css'
import { wrapper } from '@store'
import { fetchSystem } from '@store/system/actions'

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
      <Component {...props.pageProps} />
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
