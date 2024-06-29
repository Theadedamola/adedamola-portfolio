import { Context } from '../Context/Context'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DesignDetails from '../Components/DesignDetails/DesignDetails'

const Casestudy = () => {
     const { caseStudy } = useContext(Context)
     const { designdetails } = useParams()
     const design = caseStudy.find((e) => e.name === designdetails)
  return (
    <div>
      <DesignDetails design={design} />
    </div>
  )
}
export default Casestudy
