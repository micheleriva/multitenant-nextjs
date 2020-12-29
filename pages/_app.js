import dynamic from 'next/dynamic';

const tenants = require('../multitenant-config');
const Layout1 = dynamic(() => import('../components/layouts/website-1'));
const Layout2 = dynamic(() => import('../components/layouts/website-2'));
const Layout3 = dynamic(() => import('../components/layouts/website-3'));

const Layout = {
  'website-1': Layout1,
  'website-2': Layout2,
  'website-3': Layout3,
};

function MyApp({ Component, pageProps }) {

  const tenant     = tenants.find(({ domain }) => domain === pageProps.tenant).name;
  const PageLayout = Layout[tenant];
  
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100vh;
        }
      `}</style>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </div>
  )
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const tenant    = ctx?.req?.hostname;
  const pageProps = { tenant };

  if (Component.getInitialProps) {
    pageProps = {...pageProps, ...await Component.getInitialProps(ctx)};
  }

  return {
    pageProps: {
      tenant
    }
  };
};

export default MyApp;