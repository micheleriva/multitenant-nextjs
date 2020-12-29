import Link from 'next/link'

function Episodes() {
  return (
    <>
      <div>
        <h1> Here's a list of my favorite TV shows ever. </h1>
        <div>
          <ul>
            <li> Sense 8 </li>
            <li> The Queen's Gambit </li>
            <li> How I Met Your Mother </li>
            <li> Black Mirror </li>
            <li> South Park </li>
            <li> Family Guy </li>
            <li> Better Call Saul </li>
          </ul>
        </div>
      <Link href='/'> Back to Home </Link>
      </div>
    </>
  )
}

export default Episodes;