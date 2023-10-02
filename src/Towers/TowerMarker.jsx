import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const TowerMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon="fa6-solid:tower-observation" color="#c70039" width="30" height="30" />
        </div>
    )
}

export default TowerMarker