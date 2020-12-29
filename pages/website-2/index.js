import Link from 'next/link';

function Index() {
  return (
    <>
      <h1> Second website! </h1>
      <Link href='/about'> About </Link>
      <Link href='/shows'> My favorite TV shows </Link>
    </>
  )
};

export default Index;