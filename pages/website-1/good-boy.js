import Link from 'next/link';

function GoodBoy() {
  return (
    <div>
      <h1>Here's a good boy.</h1>
      <p>
        <Link href='/'> Back to Home </Link>
      </p>
      <img src='/website-1/goodboy.jpg' width='500' />
    </div>
  );
};

export default GoodBoy;
