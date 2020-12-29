import Link from 'next/link';

function Index() {
  return (
    <div>
      <h1> Website number 1 </h1>
      <Link href='/about'> About </Link> <br />
      <Link href='/good-boy'> Wanna see a good boy? </Link>
    </div>
  )
};

export default Index;