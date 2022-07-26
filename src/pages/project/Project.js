
import { useParams } from "react-router-dom"
import { useDocument } from '../../hooks/useDocument'
import ProjectSummary from './ProjectSummary'


// styles
import './Project.css'

export default function Project() {
  const { id } = useParams()
  const { document, error } = useDocument('projects', id)
  

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <p>Loading...</p>
  }

  return (
    <div className="project-details">
      <ProjectSummary project={document}/>
    </div>
  )
}