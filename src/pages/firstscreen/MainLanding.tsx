import Nextcohort from './Nextcohort'
import Landingpage from './Landingpage'
import Past from './Past'
import Pathways from './Pathways'
import Standout from './Standout'
import Testimonies from './Testimonies'
import Who from './Who'
import Footer from '../../components/footer/Footer'
import Connected from './Connected'

const MainLanding = () => {
  return (
    <div>
        <Landingpage />
        <Who />
        <Pathways />
        <Standout />
        <Past />
        <Testimonies />
        <Nextcohort />
        <Connected />
        <Footer />
    </div>
  )
}

export default MainLanding