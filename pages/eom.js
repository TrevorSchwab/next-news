import { Toolbar } from '../components/toolbar'
import styles from '../styles/EOM.module.css'

export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/trevorschwab/next-news/employeeOfTheMonth',
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    }
  }
}

export const EOM = ({ employee }) => {
  return(
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee Of The Month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3>employee name</h3>
          <h6>employee position</h6>
          <img />
          <p>employee description</p>
        </div>
      </div>      
    </div>
  )
}

export default EOM;