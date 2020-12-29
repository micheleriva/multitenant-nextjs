import Link from 'next/link';

function About() {
  return (
    <div>
      <h1>About this website</h1>
      <p>
        This is just a test website made as an example for a multi-tenant Next.js app <br />
        <Link href='/'> Back to Home </Link>
      </p>
    </div>
  );
};

export default About;
