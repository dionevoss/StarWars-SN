import { useRouter } from 'next/router'

const People = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <p>{id}</p>
    </>
  )
}

export default People
